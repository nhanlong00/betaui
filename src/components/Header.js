import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { HiSwitchHorizontal } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'

const Header = () => {
    const [dropdown, setDropDown] = useState(false)

    let handleDropDown = () => {
        setDropDown(!dropdown)
    }

    return (
        <header className='header'>
            <div className='header-top py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <span className='header-text text-white'>Miễn phí vận chuyển với đơn hàng từ 100k trở lên</span>
                        </div>
                        <div className='col-6'>
                            <div className='text-end text-white'>
                                Liên hệ: <a className='text-white' href='tel:+0853335368'> 0853335368</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h1 className='mb-0'>
                                <Link className='text-white' href="/">Logo </Link>
                            </h1>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type='text' className='form-control py-2'
                                    placeholder="Seaching ..."
                                />
                                <button className='input-group-text' id="basic-addon2">
                                    <BsSearch className='fs-5' />
                                </button>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='compare-product d-flex align-items-center'>
                                    <div><HiSwitchHorizontal className='text-white' /></div>
                                    <Link><span className='text-white'>So sánh <br /> <small>sản phẩm</small></span></Link>
                                </div>

                                <div className='favorite-whislist d-flex align-items-center'>
                                    <div><BsHeart className='text-white' /></div>
                                    <Link><span className='text-white'>Danh sách <br /> <small>yêu thích</small></span></Link>
                                </div>

                                <div className='login d-flex align-items-center'>
                                    <div className='ml-1'><FiUser className='text-white' /></div>
                                    <Link><span className='text-white'>Đăng nhập <br /> <small>Tài khoản của tôi</small></span></Link>
                                </div>

                                <div className='cart d-flex align-items-center'>
                                    <Link>
                                        <div><AiOutlineShoppingCart className='text-white' /></div>
                                    </Link>
                                    <div className='cart-number text-white'>0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menu-nav py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-items d-flex align-items-center'>
                                <div className='mr-50'>
                                    <div className="dropdown">
                                        <span className='text-white text-uppercase d-flex align-items-center'
                                            onClick={() => handleDropDown()}
                                        >
                                            <BiCategoryAlt className='mr-10' />
                                            Danh mục khác
                                        </span>
                                        <ul className={`dropdown-menu ${dropdown ? 'active' : ''}`}>
                                            <li>
                                                <Link className="dropdown-item" to="">Quần áo</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="">Nước hoa</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-50'>
                                        <NavLink className="text-white menu-item" to='/'>Trang chủ</NavLink>
                                        <NavLink className="text-white menu-item" to='/about'>Giới thiệu</NavLink>
                                        <NavLink className="text-white menu-item" to='/store'>Cửa hàng</NavLink>
                                        <NavLink className="text-white menu-item" to='/blogs' >Tin tức</NavLink>
                                        <NavLink className="text-white menu-item" to='/contact'>Liên hệ</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header