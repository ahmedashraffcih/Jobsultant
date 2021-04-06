const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const USER_ID_KEY = 'user_id'
const USER = 'UserData'
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    
    //USER SIDE

    getUserId() {
        return localStorage.getItem(USER_ID_KEY)
    },
   
    saveUserId(userId) {
        localStorage.setItem(USER_ID_KEY, userId)
    },

    removeUserId() {
        localStorage.removeItem(USER_ID_KEY)
    },

    StoreUser(payload) {
        localStorage.setItem(USER, payload)
    },
    
    getUser() {
        return localStorage.getItem(USER)
    },

    removeUser() {
        localStorage.removeItem(USER)
    },

    //-----------------------------
    //TOKEN SIDE

    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }

}

export { TokenService }