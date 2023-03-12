import React from "react";
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'

const Register = () => {
  return (
    <Helmet title="Đăng kí">
        <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="mg-45 d-flex justify-content-center align-items-center form-login">
                    <form className="form-group pd-20 border-circle-12">
                        <h1 className="text-center mg-b-16 fz-30">Đăng ký</h1>
                        
                        <div className="mg-b-16">
                            <label className="mg-b-8">Họ và tên</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Họ và tên"
                            />
                            <span className="message-error"></span>
                        </div>
                        
                        <div className="mg-b-16">
                            <label className="mg-b-8">Tài khoản</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Nhập email hoặc số điện thoại"
                            />
                            <span className="message-error"></span>
                        </div>

                        <div className="mg-b-16">
                            <label className="mg-b-8">Mật khẩu</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Nhập mật khẩu"
                            />
                            <span className="message-error"></span>
                        </div>

                        <div className="mg-b-16">
                            <label className="mg-b-8">Nhập lại mật khẩu</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                            />
                            <span className="message-error"></span>
                        </div>

                        <div className="mg-b-16">
                            <label className="mg-b-8">Địa chỉ</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Nhập địa chỉ"
                            />
                            <span className="message-error"></span>
                        </div>

                        <div className="mg-b-16 text-center btn-submit">
                            <button className="btn  bg-secondary color-white">Đăng nhập</button>
                        </div>
                        <div className="text-center">
                            Đăng nhập ngay bây giờ ?
                            <Link to="/login">
                                <span className="mg-l-10">Đăng nhập</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </Helmet>
  )
}

export default Register;
