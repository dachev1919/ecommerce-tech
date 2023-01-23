import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";

function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}

const ProductCard = ({id, image, title, brand, description, price, rating, secondImage}) => {
    return (
        <div className='product-card card-wrapper rounded-3 position-relative'>
            <div className="product-card__image mb-1">
                <Link to={`/ecommerce-tech/product/${id}`}>
                    <img src={image} alt="product"/>
                    <img src={secondImage} alt="product"/>
                </Link>
            </div>
            <div className="product-card__details">
                <h6 className='product-card__brand mb-1'>{brand}</h6>
                <Link to={`/ecommerce-tech/product/${id}`}><h5 className='mb-1 product-card__title'>{truncate(title, 25)}</h5></Link>
                <ReactStars
                    count={5}
                    size={16}
                    isHalf={true}
                    value={rating}
                    edit={false}
                    activeColor='#ffd700'
                />
                <p className="product-card__price mb-1 mt-1">${price}</p>
            </div>
            <div className="product-card__action-bar position-absolute">
                <div className='d-flex flex-column gap-1'>
                    <Link to={'/'}><img src="/images/wish.svg" alt="wish"/></Link>
                    <Link to={'/'}><img src="/images/add-cart.svg" alt="add"/></Link>
                    <Link to={'/'}><img src="/images/view.svg" alt="view"/></Link>
                    <Link to={'/'}><img src="/images/prodcompare.svg" alt="compare"/></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;