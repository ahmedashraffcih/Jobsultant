import ApiService from './api.service'
import { TokenService } from './storage.service'
import router from '../router'


class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService.
     *
     * @returns access_token
     * @throws AuthenticationError
    **/
    login: async function(email, password) {
        const requestData = {
            method: 'post',
            url: "http://localhost:3000/Login",
            data: {
                email: email,
                password: password
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)
            if (response.data.response.token) {
                TokenService.saveToken(response.data.response.token)
                TokenService.saveUserId(response.data.response.user.id)
                ApiService.setHeader()
                if(response.data.response.rated == true)
                {
                    router.push(router.history.current.query.redirect || '/jobs');
                }
                else if(response.data.response.rated == false) {
                    router.push(router.history.current.query.redirect || '/');
                }
            }else{
                throw new AuthenticationError(response.data.response.status, response.data.response.message)
            }
            return response.data.response.token
        } catch (error) {
            console.log("Login Fail")
            throw new AuthenticationError(error.response.status, error.response.data.title)
        }
    },

    /**
     * Register the access token.
    **/
    register: async function(email, password, firstname, lastname) {
        const requestData = {
            method: 'post',
            url: "http://localhost:3000/Register",
            data: {
                Email: email,
                password: password,
                firstName: firstname,
                lastName: lastname,
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)
            return response.data
        } catch (error) {
            console.log("Register Failed")
            throw new AuthenticationError(error.response.status, error.response.data.title)
        }
    },
    /**
     * Refresh the access token.
    **/
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken()

        const requestData = {
            method: 'post',
            url: "/o/token/",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            },
            auth: {
                email: process.env.VUE_APP_CLIENT_ID,
                password: process.env.VUE_APP_CLIENT_SECRET
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)

            TokenService.saveToken(response.data.access_token)
            TokenService.saveRefreshToken(response.data.refresh_token)
            // Update the header in ApiService
            ApiService.setHeader()

            return response.data.access_token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
    **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        ApiService.removeHeader()
        
        
        // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
    }
}

export default UserService

export { UserService, AuthenticationError }