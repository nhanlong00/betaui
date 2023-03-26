import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './Reducers/ProductReducers'
import { cartReducer} from './Reducers/CartReducers'
import { userLoginReducer } from './Reducers/UserReducers'

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    },

    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}

const store = configureStore({
    initialState,
    reducer: {
        productList: productListReducer,
        productDetail: productDetailsReducer,
        cart: cartReducer,
        userLogin: userLoginReducer
    }
})

export default store