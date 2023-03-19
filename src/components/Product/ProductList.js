import React, { useEffect } from "react"

import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from "../../app/Actions/ProductActions"

import ProductItem from "./ProductItem"
import Loading from '../LoadingError/Loading'
import Message from "../LoadingError/Error"

const ProductList = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products: items  } = productList

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])

    return (
        <div className="row">
            { 
                loading ? (<Loading />) : error ? (<Message variant="alert-danger">{error}</Message>)
                :
                (
                    <>
                        { items.products && items.products.map((item) => (
                            <ProductItem key={item._id} item={item} />
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default ProductList;
