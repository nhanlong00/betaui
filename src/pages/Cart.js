import React, { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { BiTrashAlt} from 'react-icons/bi'
import Helmet from '../components/Helmet'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/Actions/CartActions'

const Cart = () => {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    // const newParams = [...searchParams]
    // console.log(newParams)

    const dispatch = useDispatch()

    useEffect(() => {
        if(id) {
            dispatch(addToCart(id))
        }
    }, [dispatch, id])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Helmet title='Giỏ hàng'>
            <div className='container-xxl'>
                <div className='row pd-t-45 pd-b-45'>
                    <div className='col-9'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" className='text-center'>STT</th>
                                    <th scope="col" className='text-center'>Sản phẩm</th>
                                    <th scope="col" className='text-center'>Giá</th>
                                    <th scope="col" className='text-center'>Số lượng</th>
                                    <th scope="col" className='text-center'>Hành động</th>
                                    <th scope="col" className='text-center'>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-center align-middle'>1</td>
                                    <td className='' style={{width: 300}}>
                                        <div>
                                            <img className='w-2xl h-2xl' src="http://thoitrang9.giaodienwebmau.com/wp-content/uploads/2021/09/3-0_1_copy-247x296.jpg" alt='img-sanpham' />
                                            <div >Tên sản phẩm</div>
                                        </div>
                                    </td>
                                    <td className='text-center align-middle'>219.000đ</td>
                                    <td className='align-middle text-center'>
                                        <span>0</span>
                                    </td>
                                    <td className='text-center align-middle'>
                                        <BiTrashAlt className='fz-22' />
                                    </td>
                                    <td className='text-center align-middle'>219.000đ</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=''>
                            <Link><span className=''>Tiếp tục xem giỏ hàng</span></Link>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className=''>
                            <h3 className='fz-24 mg-b-16'>Thông tin hóa đơn</h3>
                            <div className='border-default border-color-secondary mg-tb-4'></div>
                            <div className='payment-info__detail'>
                                <div>Tổng số lượng đặt</div>
                                <div>Tổng số tiền</div>
                                <div>Địa chỉ</div>
                            </div>

                            <div className='mg-tb-16 text-center'>
                                <Link to='/shipping'>
                                    <button className='btn bg-secondary color-white'>Tiến hành thanh toán</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
