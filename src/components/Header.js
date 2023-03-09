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
                        <div className='col-3'>
                            <h1 className='mb-0'>
                                <Link className='color-white' to="/">Juniky</Link>
                            </h1>
                        </div>
                        <div className='col-6'>
                            <div className="form-search rlt">
                                <input type='text' className='input-search'
                                    placeholder="Tìm kiếm"
                                />
                                <button className='btn-search absol'>
                                    <BsSearch className='fs-5 btn-search-action' />
                                </button>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='fl align-center justify-end header-bottom-action'>
                                <div className='login fl align-center mg-r-20'>
                                    <div className='ml-1'><FiUser className='color-white fz-24 mg-r-10' /></div>
                                    <div className='fl fl-direction-col'>
                                        <Link to='/login'><span className='color-white'>Đăng nhập</span></Link>
                                        <Link to='/register'><small className='color-white'>Đăng kí</small></Link>
                                    </div>
                                </div>
                                <div className='cart fl align-items-center'>
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
                        <div className='col-12 menu-nav-link'>
                            <div className='menu-items fl align-items-center'>
                                <div className='mg-r-45'>
                                    <div className="dropdown">
                                        <span className='color-white text-uppercase fl align-items-center'
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
                                    <div className='fl align-items-center gap-50'>
                                        <NavLink className="link-item color-white menu-item text-uppercase pd-lr-22" to='/'>Trang chủ</NavLink>
                                        <NavLink className="link-item color-white menu-item text-uppercase pd-lr-22" to='/about'>Giới thiệu</NavLink>
                                        <NavLink className="link-item color-white menu-item text-uppercase pd-lr-22" to='/store'>Cửa hàng</NavLink>
                                        <NavLink className="link-item color-white menu-item text-uppercase pd-lr-22" to='/new' >Tin tức</NavLink>
                                        <NavLink className="link-item color-white menu-item text-uppercase pd-lr-22" to='/contact'>Liên hệ</NavLink>
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