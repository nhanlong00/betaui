import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { HiSwitchHorizontal } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineBars } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'

const Header = () => {
    const [dropdown, setDropDown] = useState(false)
    const [hideShowMenu, setHideShowMenu] = useState(false)

    let handleDropDown = () => {
        setDropDown(!dropdown)
    }

    return (
        <header className='header'>
            <div className='header-top py-3 bg-default'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                            <span className='header-text color-white'>Miễn phí vận chuyển với đơn hàng từ 100k trở lên</span>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='text-end color-white'>
                                Liên hệ: <a className='color-white' href='tel:+0853335368'> 0853335368</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header-bottom py-3 bg-default border-top border-color-secondaray'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h1 className='mb-0'>
                                <Link className='color-white' to="/">Juniky</Link>
                            </h1>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type='text' className='form-control py-2'
                                    placeholder="Tìm kiếm"
                                />
                                <button className='input-group-text' id="basic-addon2">
                                    <BsSearch className='fs-5' />
                                </button>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='d-flex align-items-center justify-content-between header-bottom-action'>
                                <div className='compare-product d-flex align-items-center'>
                                    <div><HiSwitchHorizontal className='color-white fz-24 mg-r-10' /></div>
                                    <Link><span className='color-white'>So sánh <br /> <small>sản phẩm</small></span></Link>
                                </div>

                                <div className='favorite-whislist d-flex align-items-center'>
                                    <div><BsHeart className='color-white fz-24 mg-r-10' /></div>
                                    <Link><span className='color-white'>Danh sách <br /> <small>yêu thích</small></span></Link>
                                </div>
            
                                <div className='login d-flex align-items-center'>
                                    <div className='ml-1'><FiUser className='color-white fz-24 mg-r-10' /></div>
                                    <div className='d-flex flex-column'>
                                        <Link to='/login'><span className='color-white'>Đăng nhập</span></Link>
                                        <Link to='/register'><small className='color-white'>Đăng kí</small></Link>
                                    </div>
                                </div>

                                <div className='cart d-flex align-items-center'>
                                    <Link to='/cart'>
                                        <div><AiOutlineShoppingCart className='color-white fz-24 mg-r-10' /></div>
                                    </Link>
                                    <div className='cart-number color-white'>0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menu-nav py-3 bg-secondary'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-items d-flex align-items-center'>
                                <div className='mg-r-45'>
                                    <div className="dropdown">
                                        <span className='color-white text-uppercase d-flex align-items-center'
                                            onClick={() => handleDropDown()}
                                        >
                                            <BiCategoryAlt className='mg-r-10 fz-24' />
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
                                        <NavLink className="color-white menu-item text-uppercase pd-lr-22" to='/'>Trang chủ</NavLink>
                                        <NavLink className="color-white menu-item text-uppercase pd-lr-22" to='/about'>Giới thiệu</NavLink>
                                        <NavLink className="color-white menu-item text-uppercase pd-lr-22" to='/store'>Cửa hàng</NavLink>
                                        <NavLink className="color-white menu-item text-uppercase pd-lr-22" to='/blogs' >Tin tức</NavLink>
                                        <NavLink className="color-white menu-item text-uppercase pd-lr-22" to='/contact'>Liên hệ</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='menu-mobi'>
                            <AiOutlineBars className='fz-24 color-white' />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header