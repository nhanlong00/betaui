import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const ProductDetail = () => {
    const [price, setPrice] = useState(400)

    return (
        <div className='pd-t-45 pd-b-45'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-lg-6'>
                        <img className='w-9xl h-9xl' src='http://thoitrang9.giaodienwebmau.com/wp-content/uploads/2021/09/3-0_1_copy.jpg' />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-6'>
                        <h1 className='title-product fz-24'>
                            Áo Polo thể thao nam ProMax-S1 Logo thoáng khí – Xanh Aqua
                        </h1>
                        <div className='price mg-b-8'>
                            <span>219.000đ {price && price >= 400 ? '(Freeship đơn hàng > 400k)' : ''}</span>
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
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>Xanh</span>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>Đỏ</span>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>Trắng</span>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>Đen</span>
                        </div>
                        <div className='size-variable fz-14  mg-b-30'>
                            <p className='title-color fz-16 mg-b-8'>Kích cỡ</p>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>M</span>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>L</span>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>XL</span>
                            <span className='border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'>XXL</span>
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
                            <button className='btn-action-primary full-width h-2xl text-uppercase d-flex align-items-center flex-column'>
                                <span>Mua ngay</span>
                                <small className='fz-12 mg-t-4'>( Hàng sẽ được vận chuyển tối đa sau 2 ngày )</small>
                            </button>
                        </div>
                    </div>

                    <div className='col-12 mg-t-45'>
                        <span className='fz-20 fw-lg text-uppercase'>Mô tả sản phẩm</span>
                        <div className='description'>
                            description description description description description
                            description description description description description
                            description description description description description
                            description description description description description
                            description description description description description
                            description description description description description
                            description description description description description
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
