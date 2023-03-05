import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { UncontrolledCarousel } from 'reactstrap'

const Banner = () => {
	
  return (
    <div className="banner pd-t-20 pd-b-20">
        <div className="row">
            <div className="col-9">
			<UncontrolledCarousel className='border-circle-8'
					items={[
						{
							altText: '',
							caption: '',
							key: 1,
							src: 'http://thoitrang9.giaodienwebmau.com/wp-content/uploads/2021/09/banner-1.jpg'
						},
						{
							altText: '',
							caption: '',
							key: 2,
							src: 'http://thoitrang9.giaodienwebmau.com/wp-content/uploads/2021/09/banner-2.jpg'
						}
					]}
				/>
            </div>

            <div className="col-3 banner-col-right">
                <div className='banner-right pd-b-14'><img className='full-width border-circle-8' src="http://thoitrang9.giaodienwebmau.com/wp-content/uploads/2021/10/imager_47835.jpg" /></div>
                <div className='banner-right pd-t-14'><img className='full-width border-circle-8' src="http://thoitrang9.giaodienwebmau.com/wp-content/uploads/2021/10/fashion-banner-design-with-outfit-camera-case-vector-31175490.jpg" /></div>
            </div>
        </div>
    </div>
  )
}

export default Banner


