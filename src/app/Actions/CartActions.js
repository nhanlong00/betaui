import axios from "axios"

import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
} from "../Constants/CartConstants"

/**
 * User: Huy
 * Usage: Add product to cart
 * @param {*} id 
 * @param {*} quantity 
 * @returns {}
 */

export const addItemToCart = (id, quantity, size, color) => async (dispatch, getState) => {
    const { data } = await axios.get(`/v1/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.nameProd,
            image: data.thumbnails[0],
            price: data.price,
            countInStock: data.countInStock,
            quantity,
            size,
            color
        },
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

/**
 * User: Huy
 * Usage: Remove a product to cart
 * @param {*} id 
 * @returns 
 */

export const removeItemFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

/**
 * User: Huy
 * Usage: Save address shipping
 * @param {*} data 
 * @returns 
 */
export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

/**
 * User: Huy
 * Usage: Save payment method
 * @param {*} data 
 * @returns 
 */

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  
    localStorage.setItem('paymentMethod', JSON.stringify(data));
  };