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
 * Usage: Using Manage State PRODUCTLIST
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const productListReducer = ( state = {products: [],}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: true,
                error: action.payload
            }

        default:
            return state
    }
}

/**
 * User: Huy
 * Usage: Using Manage State PRODUCT DETAIL
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const productDetailsReducer = ( state = { products: {review: [] },}, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}