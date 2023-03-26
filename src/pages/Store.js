import React, { useEffect } from "react"

import Helmet from '../components/Helmet'
import ProductItem from "../components/Product/ProductItem"

import Loading from '../components/LoadingError/Loading'
import Message from '../components/LoadingError/Error'

import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from "../app/Actions/ProductActions"

const Store = (props) => {
    const { keyword } = props

    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products: items  } = productList

    useEffect(() => {
        dispatch(listProduct(keyword))
    }, [dispatch, keyword])

    return (
        <Helmet title='Cửa hàng'>
            <div className='container-xxl pd-t-45 pd-b-45'>
                <div className="row">
                    <div className="col-3">
                        dasdsa
                    </div>
                    <div className="col-9">
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
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Store
