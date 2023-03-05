import React from 'react'
import { Link } from 'react-router-dom'
import { FiSend } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <div className='container-xxl py-3'>
                <div className='row'>
                    <div className='footer-top-data d-flex'>
                        <div className='col-5 d-flex align-items-center'>
                            <FiSend className='text-white icon-send' />
                            <h2 className='mb-0 text-white text-newsletter'>Sign Up for NewsLetter</h2>
                        </div>
                        <div className='col-7'>
                            <div className='input-group'>
                                <input
                                    type="text"
                                    className='form-control py-1'
                                    placeholder='Enter for Newsletter'
                                    aria-aria-label='...'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-2' id='basic-addon2'>
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-xxl py-3'>
                <div>
                    <div className='row'>
                        <div className='col-4 footer-left'>
                            <h1 className='footer-logo text-white'>Logo</h1>
                            <p className='footer-brief text-white'>
                                Chúng tôi chuyên cung cấp mặt hàng chính hãng nhiều 
                                thể loại và đa dạng người dùng 
                                Chúng tôi chuyên cung cấp mặt hàng chính hãng nhiều 
                                thể loại và đa dạng người dùng 
                                Chúng tôi chuyên cung cấp mặt hàng chính hãng nhiều 
                                thể loại và đa dạng người dùng 
                            </p>
                        </div>
                        <div className='col-4 footer-center'>
                            <div className='title text-white'>Danh mục</div>
                            <ul className='intro-list__items'>
                                <li className=''>
                                    <Link className='list-item' to="/">Trang chủ</Link>
                                </li>
                                <li className=''>
                                    <Link className='list-item' to="/store">Cửa hàng</Link>
                                </li>
                                <li className=''>
                                    <Link className='list-item' to="/blogs">Tin tức</Link>
                                </li>
                                <li className=''>
                                    <Link className='list-item' to="/contact">Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-4 footer-right'>
                            <div className='payment-method text-white'>Phương thức thanh toán</div>
                            <div className='contact-social text-white'>
                                <div className='contact-us-social text-white'>Liên hệ với chúng tôi</div>
                                <ul className='social-items'>
                                    <li className='social-item'><a className='text-white' href='/'>Facebook</a></li>
                                    <li className='social-item'><a className='text-white' href='/'>Tiktok</a></li>
                                    <li className='social-item'><a className='text-white' href='/'>Zalo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-xxl py-3'>
                <div className='row'>
                    <div className='col-12 footer-copyright'>
                        <p className='mb-0 text-white text-center mtb-10'>Copyright {new Date().getFullYear()} by me</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer