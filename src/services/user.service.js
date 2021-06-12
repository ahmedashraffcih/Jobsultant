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
                Email: email,
                password: password
            }
        }

        try 
        {

            const response = await ApiService.customRequest(requestData)
            if (response.data.token) 
            {
                //Sending the token for the token service to save it into local storage
                //console.log(response.data)
                TokenService.saveToken(response.data.token);
                //Saving user id
                TokenService.saveUserId(response.data.userdocID);
                TokenService.saveUserType(response.data.userType);
                ApiService.setHeader();
                //redirecting user after logging to Home page
                if(response.data.userType=='employer')
                {
                    router.push(router.history.current.query.redirect || '/EmployerHome');
                }
                else
                {
                    router.push(router.history.current.query.redirect || '/');
                }
                
                location.reload();
            }
            else
            {
                throw new AuthenticationError(response.data.status, response.data.message)
            }
            const user = response.data
            TokenService.StoreUser(JSON.stringify(user))
            //console.log(JSON.stringify(user))
            //return the whole response to store it as the user's data
            return user
        } 
        catch (error) 
        {
            console.log(error)
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
                fname: firstname,
                lname: lastname,
                Email: email,
                password: password,
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)
            console.log(response.data)
            /* Sending the token for the token service to save it into local storage however,
            we returns the response data to save the user's info by the store's login function*/
            TokenService.saveToken(response.data.token);
            TokenService.saveUserId(response.data.payload.id); 
            TokenService.saveverified(response.data.verified);
            //Store user type for conditional rendering
            TokenService.saveUserType(response.data.type);
            //saving user as an object in local storage
            TokenService.StoreUser(JSON.stringify(response.data))
            //saving user id
            return response.data
        } catch (error) {
            console.log("Register Failed")
            throw new AuthenticationError(error.response.status, error.response.data.title)
        }
    },
    registerEmployer: async function(email, password, firstname, lastname, title, phone, companyName, companyPhone, industry) {
        const requestData = {
            method: 'post',
            url: "http://localhost:3000/Employers/Register",
            data: {
                fname: firstname,
                lname: lastname,
                Email: email,
                password: password,
                title: title,
                phone : phone,
                companyName:companyName,
                companyPhone:companyPhone,
                industry:industry,
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)
            console.log(response.data)
            /* Sending the token for the token service to save it into local storage however,
            we returns the response data to save the user's info by the store's login function*/
            TokenService.saveToken(response.data.token);
            TokenService.saveUserId(response.data.payload.id);
            //Store user type for conditional rendering
            TokenService.saveUserType(response.data.type);
            // //saving user as an object in local storage
            TokenService.StoreUser(JSON.stringify(response.data))
            location.reload();
            //saving user id
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
        TokenService.removeUser()
        TokenService.removeUserId()
        TokenService.removeUserType()
        ApiService.removeHeader()
        TokenService.removeverified()
        // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
    }
}

export default UserService

export { UserService, AuthenticationError }