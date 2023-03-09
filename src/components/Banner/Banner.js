import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { UncontrolledCarousel } from 'reactstrap'

const Banner = () => {
  	return (
		<div className="banner pd-t-20 pd-b-20">
			<div className="row">
				<div className="col-12">
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
			</div>
		</div>
  	)
}

export default Banner


