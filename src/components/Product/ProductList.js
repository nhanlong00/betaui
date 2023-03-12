import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from 'axios'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/v1/products')
      setProducts(data.products)
    }

    getData()
  }, [])

  return (
    <div className="row">
      { products.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
