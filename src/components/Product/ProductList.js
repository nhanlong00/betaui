import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  return (
    <div className="row">
      {data.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
