import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Helmet from '../components/Helmet'
import { AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

/**
 * User: Huy
 * Usage: Get a product 
 * @returns array
 */

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProducts] = useState([])
    const { nameProd, thumbnails, description, rating, numReviews, price, quantity, color, size } = product
    console.log([thumbnails,color, size ])


    useEffect(() => {
        const getSingleProduct = async () => {
            const { data } = await axios.get(`/v1/products/${id}`) 
            setProducts(data.product)
        }
        getSingleProduct()
    }, [id])

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <Helmet title="Sản phẩm">
            <div className='pd-t-45 pd-b-45'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-lg-6'>
                            <img className='w-9xl h-9xl' src='' alt={nameProd} />
                        </div>
                        <div className='col-12 col-sm-6 col-lg-6'>
                            <h1 className='title-product fz-24'>{nameProd}</h1>
                            <div className='price mg-b-8'>
                                <span>{price} VNĐ {price && price > 300 ? <small className='mg-l-5'>( Miễn phí vận chuyển với đơn trị giá từ 300k trở lên )</small> : ''}</span>
                            </div>
                            <div className='rating mg-b-16'>
                                <span>
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </span>
                            </div>
                            <div className='color-variable fz-14 mg-b-16'>
                                <p className='title-color fz-16 mg-b-8'>Màu sắc</p>
                                    {
                                        color && color.map(item => (
                                        <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>{item}</span>
                                    ))
                                }
                            </div>
                                <div className='size-variable fz-14  mg-b-30'>
                                    <p className='title-color fz-16 mg-b-8'>Kích cỡ</p>
                                    {
                                        size && size.map(item => (
                                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>{item}</span>
                                        ))
                                    }
                                </div>
                            <div className='d-flex align-items-center mg-b-16'>
                                <div className=''>
                                    <span className='decrease mg-r-8 align-middle border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>
                                        <AiOutlineMinus />
                                    </span>
                                    <span className='border-default align-middle border-color-secondary pd-tb-4 pd-lr-16 border-circle-4'>0</span>
                                    <span className='increase mg-l-8 align-middle border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>
                                        <AiOutlinePlus />
                                    </span>
                                </div>
                                <div className='mg-l-16 add-cart'>
                                    <button className='btn-action-secondary'>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div className='buy-now'>
                                <Link to='/cart'>
                                    <button className='btn-action-primary full-width h-2xl text-uppercase d-flex align-items-center flex-column'>
                                        <span>Mua ngay</span>
                                        <small className='fz-12 mg-t-4'>( Hàng sẽ được vận chuyển tối đa sau 2 ngày )</small>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col-12 mg-t-45'>
                            <span className='fz-20 fw-lg text-uppercase'>Mô tả sản phẩm</span>
                            <div className='description'>
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default ProductDetail
