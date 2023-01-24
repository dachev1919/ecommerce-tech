import { useState } from "react";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import { Link } from "react-router-dom";
import { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/components/UI/SpecialProduct.css";

function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + "..." : str;
}


const SpecialProduct = ({ id, image, secondImage, thirdImage, title, brand, description, price, rating }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="special-product card-wrapper">
            <div className="d-flex justify-content-between special-product__wrapper">
                <div className="special-product__images">
                    {/* Main Swiper */ }
                    <Swiper
                        modules={ [Thumbs] }
                        thumbs={ { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } }
                        grabCursor={ true }
                        centeredSlides={ true }
                        slidesPerView={ "auto" }
                        coverflowEffect={ {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        } }
                        pagination={ { clickable: true } }
                    >
                        <SwiperSlide>
                            <img src={ image } alt="special"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ secondImage } alt="special"/>
                        </SwiperSlide>
                    </Swiper>
                    {/* Thumb Swiper */ }
                    <Swiper
                        className="special-product__thumb"
                        modules={ [Thumbs] }
                        slidesPerView={ 2 }
                        onSwiper={ setThumbsSwiper }
                    >
                        <SwiperSlide>
                            <img src={ image } alt="special"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ secondImage } alt="special"/>
                        </SwiperSlide>
                    </Swiper>


                </div>
                <div className="special-product__content">
                    <h5 className="special-product__brand">{ brand }</h5>
                    <Link to={ `/ecommerce-tech/product/${ id }` }><h6
                        className="special-product__title">{ truncate(title, 30) }</h6></Link>
                    <ReactStars
                        count={ 5 }
                        size={ 16 }
                        isHalf={ true }
                        value={ rating }
                        edit={ false }
                        activeColor="#ffd700"
                    />
                    <p className="special-product__price gap-10 d-flex my-2">
                        <span className="red-p">{ price }</span><strike>{ Number(price) + 20 }</strike>
                    </p>
                    <div className="special-product__discount gap-10 d-flex align-items-center">
                        <p className="m-0">
                            <b>5 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                            <span className="badge bg-danger">1</span>:
                            <span className="badge bg-danger">1</span>:
                            <span className="badge bg-danger">1</span>
                        </div>
                    </div>
                    <div className="special-product__counter my-3">
                        <p className="mb-2">Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={ { width: "25%" } }
                                 aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </div>
                    <Link to={ `/ecommerce-tech/product/${ id }` } className="btn btn-primary">View</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;