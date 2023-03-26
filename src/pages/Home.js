import React from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/Product/ProductList'
import Helmet from '../components/Helmet'

const Home = () => {

    return (
        <Helmet title='Trang chủ'>
            <div className='container-xxl'>
                <div>
                    <Banner />
                </div>
                <div className='row pd-t-30 pd-b-30'>
                    <div className='col-3'>
                        <h3 className='fz-24 text-uppercase fw-md'>{'Danh mục sản phẩm'}</h3>
                    </div>
                    <div className='col-9'>
                        <ProductList/>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Home
