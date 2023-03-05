import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-default'>
            <div className='container-xxl py-3'>
                <div>
                    <div className='row'>
                        <div className='col-4 footer-left'>
                            <div>
                                <h1 className='footer-logo color-white'>Logo</h1>
                                <p className='footer-brief color-white'>
                                    Chúng tôi chuyên cung cấp mặt hàng chính hãng nhiều 
                                    thể loại và đa dạng người dùng 
                                    Chúng tôi chuyên cung cấp mặt hàng chính hãng nhiều 
                                </p>
                            </div>
                            <div className='footer-info'>
                                <div>
                                    <span className='color-white mg-r-5'>Số điện thoại:</span>
                                    <a className='color-white' href='+tel:0853335368'>0853335368</a>
                                </div>
                                <div>
                                    <span className='color-white mg-r-5'>Email:</span>
                                    <a className='color-white' href='mailto:tranhanhtuongvi@gmail.com'>tranhanhtuongvi@gmail.com</a>
                                </div>
                                <div>
                                    <span className='color-white mg-r-5'>Địa chỉ:</span>
                                    <span className='color-white'>Hoàng Cầu, Ô chợ dừa, Đống đa, Hà Nội</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 footer-center'>
                            <div className='title color-white fz-24 mg-b-16'>Danh mục</div>
                            <ul className='intro-list__items'>
                                <li className=''>
                                    <Link className='list-item color-white' to="/">Trang chủ</Link>
                                </li>
                                <li className=''>
                                    <Link className='list-item color-white' to="/store">Cửa hàng</Link>
                                </li>
                                <li className=''>
                                    <Link className='list-item color-white' to="/blogs">Tin tức</Link>
                                </li>
                                <li className=''>
                                    <Link className='list-item color-white' to="/contact">Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-4 footer-right'>
                            <div className='payment-method color-white color-white fz-24 mg-b-16'>Phương thức thanh toán</div>
                            <div className='contact-social color-white'>
                                <div className='contact-us-social color-white'>Liên hệ với chúng tôi</div>
                                <ul className='social-items'>
                                    <li className='social-item'><a className='color-white' href='/'>Facebook</a></li>
                                    <li className='social-item'><a className='color-white' href='/'>Tiktok</a></li>
                                    <li className='social-item'><a className='color-white' href='/'>Zalo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-xxl py-3'>
                <div className='row'>
                    <div className='col-12 footer-copyright'>
                        <p className='mb-0 color-white text-center mtb-10'>Copyright {new Date().getFullYear()} by me</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer