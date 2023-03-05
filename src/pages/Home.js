import React from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/Product/ProductList'
import productItems from '../asset/fakeData/productItems'

const Home = () => {
  return (
    <div className='container-xxl'>
      <div>
        <Banner />
      </div>
      <div className='row'>
        <div className='col-3'>

        </div>
        <div className='col-9'>
          <ProductList data={productItems} />
        </div>
      </div>
    </div>
  )
}

export default Home
