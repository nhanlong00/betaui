import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductItems = ({ item }) => {
  const { _id, nameProd, thumbnails, price, rating } = item;

  useEffect(() => {
    window.scrollTo(0,0)
  })

    return (
        <div className="col-lg-4 col-md-6">
            <div className="product-card border-default border-color-secondaray border-circle-4 pd-8 mg-b-24">
                <Link to={`/store/${_id}`}>
                    <div className="product-card__item">
                        <img src={thumbnails[0]} className="product-card__item-image full-width" alt={nameProd} />
                        <h3 className="product-card__name fz-16 text-uppercase mg-t-12 color-secondary text-flow">{nameProd}</h3>
                    </div>
                </Link>

                <div className="product-card__bottom fl justify-between">
                    <p className="product-card__bottom__price">Giá: {price}  VND</p>
                    <div className="rating">{rating}</div>
                </div>

                <div className="product-cart__actions">
                    <div className="mg-b-8">
                        <Link to={`/store/${_id}`}><p className="btn-action-primary full-width text-center mb-0">Xem chi tiết</p></Link>
                    </div>
                    <div>
                        <button className="btn-action-secondary full-width">Mua ngay</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProductItems;
