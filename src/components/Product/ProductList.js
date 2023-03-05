import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({data}) => {
  return (
		<>
			{
				data.map((item) => (
					<ProductItem
						key={item.id}
						item={item}
					/>
				))
			}
		</>
	)
}

export default ProductList
