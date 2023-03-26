import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams   } from 'react-router-dom'

import { BiTrashAlt} from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Helmet from '../components/Helmet'

import { addItemToCart } from '../app/Actions/CartActions'

const Cart = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const quantity = searchParams.get('quantity');
    const color = searchParams.get('color');
    const size = searchParams.get('size');
    
    const dispatch = useDispatch()
    
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems)

    useEffect(() => {
        if(id) {
            dispatch(addItemToCart(id, quantity, size, color))
        }
    }, [dispatch, id, quantity, size, color])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    // Total price 
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + (item.price * item.qty),
        0
    );

    return (
        <Helmet title='Giỏ hàng'>
            <div className='container-xxl'>
                {
                    cartItems.length === 0 ? (
                        <div className='row'>
                            <div className='alert alert-info text-center mg-t-20'>
                                <div className='mg-b-10'>Giỏ hàng trống</div>
                                <AiOutlineShoppingCart style={{fontSize: 100}} />
                                <div>
                                    <Link className='' to="/store">
                                        Mua hàng ngay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='row pd-t-45 pd-b-45'>
                            <div className='fz-24 mg-b-10 fw-xl text-uppercase'>{'Giỏ hàng'}</div>
                            <div className='col-12 mg-b-30 fz-18 bg-secondary color-white pd-8'>Tổng sản phẩm trong giỏ hàng({cartItems.length})</div>
                            <div className='col-9'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>STT</th>
                                            <th scope="col" className='text-center'>Sản phẩm</th>
                                            <th scope="col" className='text-center'>Giá</th>
                                            <th scope="col" className='text-center'>Số lượng</th>
                                            <th scope="col" className='text-center'>Tổng tiền</th>
                                            <th scope="col" className='text-center'>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems && cartItems.map((item, index) => (
                                            <tr key={item.product}>
                                                <td className='text-center align-middle'>{++index}</td>
                                                <td className='' style={{width: 300}}>
                                                    <Link to={`/product/${item.product}`}>
                                                        <div className='mg-b-10 color-default'>{item.name}</div>
                                                    </Link>
                                                    <div >
                                                        <img className='w-6lg h-6lg' src={item.image} alt={item.name} />
                                                    </div>
                                                </td>
                                                <td className='text-center price align-middle'>{item.price}</td>
                                                <td className='align-middle text-center'>
                                                    <span>{item.quantity}</span>
                                                </td>
                                                <td className='text-center align-middle total-price'>
                                                    {0}
                                                </td>
                                                <td className='text-center align-middle'>
                                                    <BiTrashAlt className='fz-22' />
                                                </td>
                                            </tr>
                                            ))
                                        }
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
                                        <div>Tổng số lượng đặt: </div>
                                        <div>Tổng số tiền: </div>
                                    </div>

                                    <div className='mg-tb-16 text-center'>
                                        <Link to='/shipping'>
                                            <button className='btn bg-secondary color-white'>Tiến hành thanh toán</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                }
            </div>
        </Helmet>
    )
}

export default Cart
