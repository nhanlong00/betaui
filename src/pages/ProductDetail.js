import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import Helmet from '../components/Helmet'
import Loading from '../components/LoadingError/Loading'
import Message from '../components/LoadingError/Error'
import Rating from '../components/Rating/Rating'

import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../app/Actions/ProductActions'

/**
 * User: Huy
 * Usage: Get a product 
 * @returns array
 */

const ProductDetail = () => {
    const { id } = useParams()
    const history = useNavigate()
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)
    const { loading, error, product: singleProduct } = productDetail

    const [qty, setQty] = useState(0)
    const [sizes, setSizes] = useState(undefined)
    const [images, setImages] = useState(undefined)
    const [colors, setColors] = useState(undefined)

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [id])

    const handleDecrease = () => {
        if(qty <= 0) {
            setQty(0)
        } else {
            setQty(qty - 1)
        }
    }

    const handleIncrease = () => {
        setQty(qty + 1)
    }

    const handleAddtoCart = (e) => {
        e.preventDefault()
        history(`/cart/${id}?qty=${qty}&color=${colors}&size=${sizes}`)
    }

    return (
        <Helmet title={ 'a' ?? 'Sản phẩm'}>
            { loading 
                ? ( <Loading /> ) 
                : error 
                    ? <Message variant="alert-danger">{error}</Message> 
                    : (
                        <div className='pd-t-45 pd-b-45 product-detail'>
                            <div className='container-xxl'>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 col-lg-6'>
                                        {
                                            singleProduct.thumbnails && singleProduct.thumbnails.map(thumbnail => (
                                                <img key={thumbnail} 
                                                    className='w-9xl h-9xl image-detail' 
                                                    src={thumbnail} 
                                                    alt={singleProduct.nameProd} 
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className='col-12 col-sm-6 col-lg-6'>
                                        <h1 className='title-product fz-24'>{singleProduct.nameProd}</h1>
                                        <div className='price mg-b-8'>
                                            <span>{singleProduct.price} VNĐ {singleProduct.price && singleProduct.price > 300 ? <small className='mg-l-5'>( Miễn phí vận chuyển với đơn trị giá từ 300k trở lên )</small> : ''}</span>
                                        </div>
                                        <div className='rating mg-b-16'>
                                           <Rating value={singleProduct.rating}></Rating>
                                        </div>
                                        <div className='color-variable fz-14 mg-b-16'>
                                            <p className='title-color fz-16 mg-b-8'>Màu sắc</p>
                                                {
                                                    singleProduct.color && singleProduct.color.map(item => (
                                                    <span key={item} className={`color border-default border-color-secondary
                                                            pd-tb-4 pd-lr-8 mg-r-8 border-circle-4  
                                                        ${colors === item ? 'active' : ''}`}
                                                        onClick={() => setColors(item)}
                                                    >
                                                            {item}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                            <div className='size-variable fz-14  mg-b-30'>
                                                <p className='title-color fz-16 mg-b-8'>Kích cỡ</p>
                                                {
                                                    singleProduct.size && singleProduct.size.map(item => (
                                                        <span key={item}
                                                            className={`size border-default border-color-secondary 
                                                                        pd-tb-4 pd-lr-8 mg-r-8 border-circle-4 
                                                                        ${sizes === item ? 'active' : ''}`
                                                                    }
                                                            onClick={() => setSizes(item)}
                                                        >
                                                            {item}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        <div className='quantity d-flex align-items-center mg-b-16'>
                                            <div className='fl'>
                                                <span className='decrease mg-r-8 align-middle border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'
                                                    onClick={handleDecrease}
                                                >
                                                    <AiOutlineMinus />
                                                </span>
                                                <input
                                                    className='form-control text-center w-3lg'
                                                    type="text"
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}

                                                />
                                                <span className='increase mg-l-8 align-middle border-default border-color-secondary pd-tb-4 pd-lr-8 mg-r-8 border-circle-4'
                                                    onClick={handleIncrease}
                                                >
                                                    <AiOutlinePlus />
                                                </span>
                                            </div>
                                            <div className='mg-l-16 add-cart'>
                                                <button className='btn-action-secondary btn-card'
                                                    onClick={handleAddtoCart}
                                                >Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                        <div className='buy-now'>
                                            <Link to='/cart'>
                                                <button className='btn-buynow btn-action-primary full-width h-2xl text-uppercase d-flex align-items-center flex-column'>
                                                    <span>Mua ngay</span>
                                                    <small className='fz-12 mg-t-4'>( Hàng sẽ được vận chuyển tối đa sau 2 ngày )</small>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='col-12 mg-t-45'>
                                        <span className='fz-20 fw-lg text-uppercase'>Mô tả sản phẩm</span>
                                        <div className='description'>
                                            {singleProduct.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
            }
        </Helmet>
    )
}

export default ProductDetail
