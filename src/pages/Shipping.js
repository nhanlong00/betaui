import React from 'react'

const Shipping = () => {
  return (
    <div className='container-xxl'>
        <div className='row mg-t-45 mg-b-45'>
            <div className='col-12 col-md-6'>
                <h1 className='fz-18 text-uppercase'>Thông tin thanh toán</h1>
                <div className='border-default border-color-success mg-b-24'></div>

                <div className='payement-info'>
                    <div className='form-group mg-b-16'>
                        <label className='mg-b-8'>Họ và tên</label>
                        <input type='text' className='form-control' placeholder='Họ và tên'/>
                    </div>

                    <div className='form-group mg-b-16'>
                        <label className='mg-b-8'>Số điện thoại</label>
                        <input type='text' className='form-control' placeholder='Số điện thoại' />
                    </div>

                    <div className='form-group mg-b-16'>
                        <label className='mg-b-8'>Địa chỉ</label>
                        <input type='text' className='form-control' placeholder='Addres' />
                    </div>

                    <div className='form-group mg-b-16'>
                        <label className='mg-b-8'>E-mail</label>
                        <input type='text' className='form-control' placeholder='E-mail' />
                    </div>

                    <div className='form-group mg-b-16'>
                        <label className='mg-b-8'>Ghi chú đơn hàng (tùy chọn)</label>
                        <textarea type='text' className='form-control h-4xl' 
                        placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.' />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
            <h1 className='fz-18 text-uppercase'>Đơn hàng của bạn</h1>
                <div className='border-default border-color-success mg-b-24'></div>

                <div className='product-info'>
                    <div className='mg-b-8'>Sản phẩm</div>
                    <div className='border-top border-color-secondary pd-tb-12'>Tên sản phẩm: {'Áo sơ mi nam dài tay Café-DriS khử mùi - Xanh nhạt'} {'x1'}</div>
                    <div className='border-top border-color-secondary pd-tb-12'>Kích cỡ: {'XL'}L</div>
                    <div className='border-top border-color-secondary pd-tb-12'>Màu sắc: {'D'}</div>
                    <div className='border-top border-color-secondary pd-tb-12'>Tổng: {'3190000'}</div>

                    <div className='fl border-top border-color-secondary pd-tb-12'>
                        <div className='mg-r-12 form-check'>
                            <input className='form-check-input mg-r-10' type='radio' />
                            <label>Chuyển khoản ngân hàng</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input mg-r-10' type='radio' />
                            <label>Trả tiền mặt khi nhận hàng</label>
                        </div>
                    </div>

                    <div className='pd-t-20 border-top border-color-secondary pd-tb-12'>
                        <button className='btn-action-secondary full-width'>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shipping
