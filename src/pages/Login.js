import React from "react";
import { Link } from 'react-router-dom'
import Helmet from "../components/Helmet";

const Login = () => {
  return (
        <Helmet title="Đăng nhập">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="mg-45 d-flex justify-content-center align-items-center form-login">
                            <form className="form-group pd-20 border-circle-12">
                                <h1 className="text-center mg-b-16 fz-30">Đăng nhập</h1>
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
                                </div>
                                <div className="mg-b-16 text-center btn-submit">
                                    <button className="btn  bg-secondary color-white">Đăng nhập</button>
                                </div>
                                <div className="text-center">
                                    Bạn chưa có tài khoản ?
                                    <Link to="/register">
                                        <span className="mg-l-10">Đăng kí</span>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link to='/forgotpass'>
                                        Quên mật khẩu
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

export default Login;
