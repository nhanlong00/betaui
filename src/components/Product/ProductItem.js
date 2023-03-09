import React from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

const ProductItems = ({ item }) => {
  const { name, image, price, rating } = item;

  return (
    <div className="col-lg-4 col-md-6">
        <div className="product-card border-default border-color-secondaray border-circle-4 pd-8 mg-b-24">
            <Link>
                <div className="product-card__item">
                    <img src={image} className="product-card__item-image full-width" />
                    <h3 className="product-card__name fz-16 text-uppercase mg-t-12 color-secondary">{name}</h3>
                </div>
            </Link>

            <div className="product-card__bottom fl justify-between">
                <p className="product-card__bottom__price">Giá: {price} VND</p>
                <div className="rating">{rating}</div>
            </div>

            <div className="product-cart__actions">
                <div className="mg-b-8">
                    <Link><p className="btn-action-primary full-width text-center mb-0">Xem chi tiết</p></Link>
                </div>
                <div>
                    <button className="btn-action-secondary full-width">Mua ngay</button>
                </div>
            </div>
        </div>  
    </div>
  );
};

export default ProductItems;
