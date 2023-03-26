import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

import Helmet from "../components/Helmet";
import Message from '../components/LoadingError/Error'
import Loading from '../components/LoadingError/Loading'

import { useDispatch, useSelector } from 'react-redux'
import { login } from "../app/Actions/UserActions";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const redirectUrl = searchParams.get('/')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    console.log(userLogin)

    useEffect(() => {
        if(userInfo) {
            navigate('/')
        }
    }, [userInfo, navigate, redirectUrl])

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <Helmet title="Đăng nhập">
            <div className="container-xxl">
                <div className="row">
                    { error && <Message variant="alert-danger">{error}</Message> }
                    { loading && <Loading />}

                    <div className="col-12">
                        <div className="mg-45 d-flex justify-content-center align-items-center form-login">
                            <form onSubmit={handleLogin} className="form-group pd-20 border-circle-12">
                                <h1 className="text-center mg-b-16 fz-30">Đăng nhập</h1>
                                <div className="mg-b-16">
                                    <label className="mg-b-8">Tài khoản</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nhập email hoặc số điện thoại"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="message-error"></span>
                                </div>

                                <div className="mg-b-16">
                                    <label className="mg-b-8">Mật khẩu</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        autoComplete="true" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mg-b-16 text-center btn-submit">
                                    <button type="submit" className="btn bg-secondary color-white">Đăng nhập</button>
                                </div>
                                <div className="text-center">
                                    Bạn chưa có tài khoản ?
                                    <Link to={redirectUrl ? `/register?redirectUrl=${redirectUrl}` : '/register' }>
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
