import axios from 'axios'
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../Constants/ProductConstants.js'

/**
 * User: Huy
 * Usage: GET API FROM SERVER
 * @returns {}
 */

export const listProduct = () =>  async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const { data } = await axios.get('/v1/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS, 
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.message : error.message
        })
    }
}

/**
 * User: Huy
 * Usage: GET API FROM SERVER SINGLE PRODUCT
 * @returns []
 */

export const productDetails = (id) =>  async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/v1/products/${id}`) 
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS, 
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.message : error.message
        })
    }
}