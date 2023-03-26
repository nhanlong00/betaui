import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../Constants/UserConstants'

/**
 * Usage: Login
 * @param {*} id 
 * @returns 
 */

export const login = (email, password) =>  async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const config = {
            headers: {
                "Content-Type": "application/json",
                // 'Accept' : 'application/json',
                // 'Authorization' : 'Bearer'
            },
        }

        const { data } = await axios.post(`/v1/users/login`, { email, password }, config) 

        dispatch({
            type: USER_LOGIN_SUCCESS, 
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.message : error.message
        })
    }
}