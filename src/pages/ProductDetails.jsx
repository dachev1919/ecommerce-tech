import Meta from "../components/Meta";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { PRODUCTS } from "../assets/data/products";
import FeaturedSection from "../components/home/FeaturedSection";
import '../styles/pages/ProductDetails.css';
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { cartAction } from "../store/cart/cartSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { IoGitCompareOutline, IoGitCompareSharp } from "react-icons/io5";
import { wishlistActions } from "../store/wishlist/wishlistSlice";
import { compareActions } from "../store/compare/compareSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

const ProductDetails = () => {
    const { id } = useParams();
    const product = PRODUCTS.find(product => Number(product.id) === Number(id));
    const inWishlist = useSelector(state => state.wishlist.wishlistItems.find(item => item.id === product.id));
    const inCompare = useSelector(state => state.compare.compareItems.find(item => item.id === product.id));
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [id]);

    const formSubmitHandler = e => {
        e.preventDefault();
        setName('');
        setEmail('');
        setReview('');
    }

    const addToCartHandler = () => {
        dispatch(cartAction.addItem(product));

        toast.success('product added successfully');
    }

    const addToWishlist = () => {
        dispatch(wishlistActions.addItem(product));
    }

    const addToCompare = () => {
        dispatch(compareActions.addItem(product));
    }

    return (
        <>
            <Meta canonical={ `product/${product.id}` } title={product.title} />
            <Breadcrumb breadcrumbs={[{title: 'Store', link: "/ecommerce-tech/store"}, {title: product.title, link: `/ecommerce-tech/store/${product.id}`}]} />
            <section className="product-details">
                <Container fluid='xxl' className='card-wrapper'>
                    <Row>
                        <Col md='6' className='col-12'>
                            {/* Main Swiper */ }
                            <Swiper
                                modules={ [Thumbs] }
                                thumbs={ { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } }
                                grabCursor={ true }
                                centeredSlides={ true }
                                slidesPerView={ "auto" }
                                className='product-details__main-image'
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
                                    <img src={product.image} alt="product"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={product.secondImage} alt="thumbnails"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={product.thirdImage} alt="thumbnails"/>
                                </SwiperSlide>
                            </Swiper>
                            {/* Thumb Swiper */ }
                            <Swiper
                                className="product-details__thumbs-image mt-3"
                                modules={ [Thumbs] }
                                slidesPerView={ 2 }
                                spaceBetween={15}
                                onSwiper={ setThumbsSwiper }
                            >
                                <SwiperSlide>
                                    <img src={product.image} alt="product"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={product.secondImage} alt="thumbnails"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={product.thirdImage} alt="thumbnails"/>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                        <Col md='6' className='col-12 position-relative'>
                            <div className="product-details__content">
                                <h4 className='product-details__title'>{product.title}</h4>
                                <h5>$ {product.price}</h5>
                                <ReactStars
                                    count={ 5 }
                                    size={ 16 }
                                    isHalf={ true }
                                    value={ product.rating }
                                    edit={ false }
                                    activeColor="#ffd700"
                                />
                                <div className='w-100 product-details__write-review'>
                                    <a href="#reviews">Write a review</a>
                                </div>
                                <p><span>Type: </span>{product.type}</p>
                                <p><span>Brand: </span>{product.brand}</p>
                                <p><span>Category: </span>{product.category}</p>
                                <p className='product-details__tags'><span className='title'>Tags: </span>{ product.tags.map(tag => <span>{tag}</span>)}</p>
                                <p><span>SKU: </span>{product.sku}</p>
                                <p><span>Availability: </span>{product.availability}</p>
                                <p className='product-details__color'>
                                    <span className='title'>Color: </span>
                                    {
                                        product.color.map(color => (
                                            <span
                                                className='d-inline-block'
                                                style={{ background: color }}
                                            />
                                        ))
                                    }
                                </p>
                                <div className="d-flex gap-3 product-details__actions mt-4">
                                    <div className='d-flex align-items-center gap-2' onClick={() => addToWishlist()}>
                                        <img style={{ width: '16px' }} src={ `${inWishlist ? '/images/wish-black.svg' : '/images/wish.svg'}` } alt="wish"/>
                                        <p className='m-0'>Add To Wishlist</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-2' onClick={() => addToCompare()}>
                                        {
                                            inCompare ? <IoGitCompareSharp /> : <IoGitCompareOutline />
                                        }
                                        <p className='m-0'>Add To Compare</p>
                                    </div>
                                </div>
                                <div className="product-details__buttons pb-3 gap-3 d-flex">
                                    <button className='btn btn-primary' onClick={() => addToCartHandler()}>Add to cart</button>
                                    <Link className='btn btn-secondary' to='/ecommerce-tech/store'>Continue Shopping</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='product-details__description pb-2'>
                <Container fluid='xxl'>
                    <div className="product-details__description-wrapper">
                        <h3 className='section-heading'>Description</h3>
                        <div className="card-wrapper without-margin">
                            <p className='m-0'>{product.description}</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section id='reviews' className='product-details__review pb-2'>
                <Container fluid='xxl'>
                    <div className="product-details__review-wrapper">
                        <h3 className='section-heading'>Reviews</h3>
                        <div className="card-wrapper without-margin">
                            <h4 className='mb-4'>Customer Reviews</h4>
                            <div className='d-flex gap-3 align-items-center'>
                                <ReactStars
                                    count={ 5 }
                                    size={ 25 }
                                    isHalf={ true }
                                    value={ product.rating }
                                    edit={ false }
                                    activeColor="#ffd700"
                                />
                                Based on 2 reviews
                            </div>

                            <h4 className='mt-4 mb-4'>New Comment</h4>
                            <form className='product-details__review-form' onSubmit={(e) => formSubmitHandler(e)}>
                                <ReactStars
                                    count={ 5 }
                                    size={ 25 }
                                    isHalf={ true }
                                    activeColor="#ffd700"
                                    classNames='gap-3'
                                />
                                <div className='mt-3'>
                                    <input value={ name } onChange={ e => setName(e.target.value) } type="text"
                                           className="form-control mb-3" placeholder="Name" required/>
                                </div>
                                <div>
                                    <input value={ email } onChange={ e => setEmail(e.target.value) } type="email"
                                           className="form-control mb-3" placeholder="Email" required/>
                                </div>
                                <div>
                                    <textarea rows='4' value={ review } onChange={ e => setReview(e.target.value) }
                                           className="form-control mb-3" placeholder="Review" required/>
                                </div>
                                <div className="login__buttons d-flex gap-3 justify-content-end mt-4">
                                    <button type='submit' className='btn-primary btn'>Write a review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <FeaturedSection products={ PRODUCTS } title='Our Popular Products'/>
        </>
    );
};

export default ProductDetails;