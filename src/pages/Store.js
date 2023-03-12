import React from 'react'
import ProductList from '../components/Product/ProductList'
import productItems from '../asset/fakeData/productItems'
import Helmet from '../components/Helmet'

const Store = () => {
  return (
        <Helmet title='Cửa hàng'>
            <div className='container-xxl pd-t-45 pd-b-45'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-product'>
                            <div>Lọc theo </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <ProductList data={productItems} />
                    </div>
                </div>
            </div>
            </Helmet>
    )
}

export default Store
