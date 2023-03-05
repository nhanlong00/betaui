import React from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

const ProductItems = ({ item }) => {
  const { slug, productName, price, imgUrl, id } = item;

  return (
    <div className="pd-t-20 pd-b-20">
      <div className="product-card">
        <Link to={`/shop/${slug}`}>
          <div className="product-card__item">
            <img
              src={imgUrl}
              alt="product-card"
              width={270}
              height={270}
              className="product-card__item-image"
            />
            <h3 className="product-card__item-name">{productName}</h3>
          </div>
        </Link>
        <div className="product-card__bottom">
          <p className="product-card__bottom__price">$ {price}</p>
          <span className="product-card__bottom__to-cart">
            <BsCartPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
