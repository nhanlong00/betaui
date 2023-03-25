import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './Reducers/ProductReducers'
import { cartReducer } from './Reducers/CartReducers'
import { initialState } from './Actions/CartActions'


const store = configureStore({
    initialState,
    reducer: {
        productList: productListReducer,
        productDetail: productDetailsReducer,
        toCart: cartReducer
    }
})

export default store