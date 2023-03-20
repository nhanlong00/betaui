import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './Reducers/ProductReducers'
import { cartReducer } from './Reducers/CartReducers'

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailsReducer,
        cart: cartReducer
    }
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") 
? JSON.parse(localStorage.getItem("cartItem"))
: []

const initialState = {
    cart: { 
        cartItem: cartItemsFromLocalStorage
    }
}


export default store