import React from "react";
import ReactStars from "react-rating-stars-component/dist/react-stars";

function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}


const SpecialProduct = ({ id, image, secondImage, title, brand, description, price, rating }) => {
    return (
        <div className="special-product card-wrapper">
            <div className="d-flex justify-content-between">
                <div className="special-product__images"><img src={ image } alt="special"/></div>
                <div className="special-product__content">
                    <h5 className="special-product__brand">{ brand }</h5>
                    <h6 className="special-product__title">{ truncate(title, 30) }</h6>
                    <ReactStars
                        count={5}
                        size={16}
                        isHalf={true}
                        value={rating}
                        edit={false}
                        activeColor='#ffd700'
                    />
                    <p className="special-product__price">
                        <span className='red-p'>{price}</span><strike>{Number(price) + 20}</strike>
                    </p>
                    <div className="special-product__discount gap-10 d-flex align-items-center">
                        <p className='m-0'>
                            <b>5 days</b>
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle d-flex p-2 bg-warning'>1</span>:
                            <span className='badge rounded-circle d-flex p-2 bg-warning'>1</span>:
                            <span className='badge rounded-circle d-flex p-2 bg-warning'>1</span>
                        </div>
                    </div>
                     <div className="special-product__counter">
                         <p>Products: 5</p>
                         <div className="progress">
                             <div className="progress-bar" role="progressbar" style={ {width: "25%"} } aria-valuenow="25"
                                  aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;