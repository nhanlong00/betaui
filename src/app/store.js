import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './Reducers/ProductReducers'

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer
    }
})

export default store