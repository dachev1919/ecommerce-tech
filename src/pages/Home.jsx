import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import Swiper React components
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/UI/BlogCard";
import ProductCard from "../components/UI/ProductCard";
import SpecialProduct from "../components/UI/SpecialProduct";

SwiperCore.use([Pagination, EffectCoverflow]);

const CATEGORIES = [
    {
        'id': 1,
        'title': 'Cameras',
        'text': '10 Items',
        'image': '/images/camera.jpg'
    },
    {
        'id': 2,
        'title': 'Smart TV',
        'text': '13 Items',
        'image': '/images/tv.jpg'
    },
    {
        'id': 3,
        'title': 'Smart Watches',
        'text': '16 Items',
        'image': '/images/watch.jpg'
    },
    {
        'id': 4,
        'title': 'Music & Gaming',
        'text': '11 Items',
        'image': '/images/headphone.jpg'
    },
    {
        'id': 5,
        'title': 'Smart Watches',
        'text': '16 Items',
        'image': '/images/watch.jpg'
    },
    {
        'id': 6,
        'title': 'Music & Gaming',
        'text': '11 Items',
        'image': '/images/headphone.jpg'
    },
    {
        'id': 7,
        'title': 'Cameras',
        'text': '18 Items',
        'image': '/images/camera.jpg'
    },
    {
        'id': 8,
        'title': 'Smart TV',
        'text': '13 Items',
        'image': '/images/tv.jpg'
    }
];

const MARQUE = [
    {
        'image': '/images/brand-01.png'
    },
    {
        'image': '/images/brand-02.png'
    },
    {
        'image': '/images/brand-03.png'
    },
    {
        'image': '/images/brand-04.png'
    },
    {
        'image': '/images/brand-05.png'
    },
    {
        'image': '/images/brand-06.png'
    },
    {
        'image': '/images/brand-07.png'
    },
    {
        'image': '/images/brand-08.png'
    },
];

const NEWS = [
    {
        id: 1,
        image: '/images/blog-1.jpg',
        date: '11 June, 2022',
        title: 'A Beautiful Sunday Morning Renaissance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        link: '/ecommerce-tech',
    },
    {
        id: 2,
        image: '/images/blog-1.jpg',
        date: '11 June, 2022',
        title: 'Sed Ut Perspiciatis Unde Omnis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        link: '/ecommerce-tech',
    },
    {
        id: 3,
        image: '/images/blog-1.jpg',
        date: '11 June, 2022',
        title: 'Vitae Magnis Fusce Leoreet Porttitor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        link: '/ecommerce-tech',
    },
    {
        id: 4,
        image: '/images/blog-1.jpg',
        date: '11 June, 2022',
        title: 'Urna Pretium Elit Mauris Cursus Curbitu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        link: '/ecommerce-tech',
    },
];

const PRODUCTS = [
    {
        id: 1,
        image: '/images/speaker.jpg',
        title: 'Kids Headphones Bulk 10 Pack Multi Colored For Studies',
        brand: 'Havelis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        price: '100',
        rating: '4.5',
        link: '/ecommerce-tech',
        secondImage: '/images/tab.jpg',
    },
    {
        id: 2,
        image: '/images/tab.jpg',
        title: 'Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera',
        brand: 'Sony',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        price: '10',
        rating: '0',
        link: '/ecommerce-tech',
        secondImage: '/images/speaker.jpg',
    },
    {
        id: 3,
        image: '/images/tab1.jpg',
        title: 'Honor T1 7.0 1GB RAM 8 GB ROM',
        brand: 'Havelis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        price: '100',
        rating: '4',
        link: '/ecommerce-tech',
        secondImage: '/images/tab3.jpg',
    },
    {
        id: 4,
        image: '/images/tab2.jpg',
        title: 'Beoplay A1 Portable Bluetooth Speaker With Micro',
        brand: 'Havelis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        price: '500',
        rating: '4',
        link: '/ecommerce-tech',
        secondImage: '/images/tv.jpg',
    },
    {
        id: 5,
        image: '/images/tab3.jpg',
        title: 'Milanese Loop Watch Band For 42mm/44mm Apple',
        brand: 'Apple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        price: '10',
        rating: '5',
        link: '/ecommerce-tech',
        secondImage: '/images/tab1.jpg',
    },
    {
        id: 5,
        image: '/images/tv.jpg',
        title: 'Sony EXTRA BASS Portable Splash-Proof Wireless',
        brand: 'Bajaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?',
        price: '220',
        rating: '5',
        link: '/ecommerce-tech',
        secondImage: '/images/tab3.jpg',
    },
];

const Home = () => {

    return (
        <>
            <section className="home-wrapper-1">
                <Container fluid='xxl'>
                    <Row>
                        <Col className='col-6'>
                            <Swiper
                                className="main-banner position-relative"
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <img src="/images/main-banner-1.jpg" className='img-fluid' alt="m-banner"/>
                                <div className="main-banner__content position-absolute">
                                    <h4>Supercharged For Pros.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo.<br/>for 24 mo. Footnote*</p>
                                    <Link className='btn btn-primary mt-4'>Buy Now</Link>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/main-banner.jpg" className='img-fluid ' alt="m-banner"/>
                                <div className="main-banner__content position-absolute">
                                    <h4>Supercharged For Pros.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo.<br/>for 24 mo. Footnote*</p>
                                    <Link className='btn btn-primary mt-4'>Buy Now</Link>
                                </div>
                                </SwiperSlide>
                            </Swiper>

                        </Col>
                        <Col className='col-6'>
                            <div className="small-banners d-grid">
                                <Link className="small-banner position-relative">
                                    <img src="/images/catbanner-01.jpg" className='img-fluid' alt="m-banner"/>
                                    <div className="small-banner__content position-absolute">
                                        <h4 className='mb-1'>Best Sale</h4>
                                        <h5 className='mb-1'>Laptop Max</h5>
                                        <p className='mb-2'>From $1699.00 or<br/>$64.62/mo.</p>
                                    </div>
                                </Link>
                                <Link className="small-banner position-relative">
                                    <img src="/images/catbanner-02.jpg" className='img-fluid' alt="m-banner"/>
                                    <div className="small-banner__content position-absolute">
                                        <h4 className='mb-1'>New Arrival</h4>
                                        <h5 className='mb-1'>Buy IPad Air</h5>
                                        <p className='mb-2'>From $599.00 or<br/>$49.91/mo. for 12 mo. *</p>
                                    </div>
                                </Link>
                                <Link className="small-banner position-relative">
                                    <img src="/images/catbanner-03.jpg" className='img-fluid' alt="m-banner"/>
                                    <div className="small-banner__content position-absolute">
                                        <h4 className='mb-1'>15% OFF</h4>
                                        <h5 className='mb-1'>Smartwatch 7</h5>
                                        <p className='mb-2'>Shop the latest band<br/>styles and colors</p>
                                    </div>
                                </Link>
                                <Link className="small-banner position-relative">
                                    <img src="/images/catbanner-04.jpg" className='img-fluid' alt="m-banner"/>
                                    <div className="small-banner__content position-absolute">
                                        <h4 className='mb-1'>Free Engraving</h4>
                                        <h5 className='mb-1'>AirPods Max</h5>
                                        <p className='mb-2'>High-fidelity playback &<br/>ultra-low distortion</p>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="home-wrapper-2">
                <Container>
                    <Row>
                        <Col className='col-12'>
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="/images/service.png" alt="services"/>
                                    <div>
                                        <h6 className='mb-1'>Free Shipping</h6>
                                        <p className='m-0'>From all orders over $5</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="/images/service-02.png" alt="services"/>
                                    <div>
                                        <h6 className='mb-1'>Daily Surprise Offers</h6>
                                        <p className='m-0'>Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="/images/service-03.png" alt="services"/>
                                    <div>
                                        <h6 className='mb-1'>Support 24/7</h6>
                                        <p className='m-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="/images/service-04.png" alt="services"/>
                                    <div>
                                        <h6 className='mb-1'>Affordable Prices</h6>
                                        <p className='m-0'>Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="/images/service-05.png" alt="services"/>
                                    <div>
                                        <h6 className='mb-1'>Secure Payment</h6>
                                        <p className='m-0'>100% Protected Payment</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="home-wrapper-3">
                <Container fluid='xxl'>
                    <Row>
                        <Col className='col-12'>
                            <div className="categories card-wrapper d-flex flex-wrap justify-content-between align-items-center">
                                {
                                    CATEGORIES.map(category => (
                                        <Link id={category.id} className='d-flex gap-30 align-items-center justify-content-between'>
                                            <div>
                                                <h6>{category.title}</h6>
                                                <p>{category.text}</p>
                                            </div>
                                            <img src={category.image} alt="camera"/>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='featured-collection'>
                <Container fluid='xxl'>
                    <h3 className='section-heading'>Featured Collection</h3>
                    <Row>
                        {
                            PRODUCTS.map(({id, image, secondImage, title, brand, description, price, rating}) => (
                                <Col key={id} className='col-2'>
                                    <ProductCard
                                        id={id}
                                        image={image}
                                        title={title}
                                        brand={brand}
                                        description={description}
                                        price={price}
                                        rating={rating}
                                        secondImage={secondImage}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section className='special'>
                <Container fluid='xxl'>
                    <h3 className="section-title">Special Product</h3>
                    <Row>
                        {
                            PRODUCTS.map(({id, image, secondImage, title, brand, description, price, rating}) => (
                                <Col key={id} className='col-4'>
                                    <SpecialProduct
                                        id={id}
                                        image={image}
                                        secondImage={secondImage}
                                        title={title}
                                        brand={brand}
                                        description={description}
                                        price={price}
                                        rating={rating}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section className="marque-wrapper">
                <Container fluid='xxl'>
                    <Row>
                        <Col className='col-12'>
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex align-items-center'>
                                        {
                                            MARQUE.map(mark => (
                                                <div key={mark.id}>
                                                    <img src={mark.image} alt="marque"/>
                                                </div>
                                            ))
                                        }
                                </Marquee>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='blog'>
                <Container fluid='xxl'>
                    <h3 className='section-heading'>Our Latest News</h3>
                    <Row>
                        {
                            NEWS.map(({id, title, date, description, link, image}) => (
                                <Col key={id} className='col-3'>
                                    <BlogCard image={image} date={date} title={title} description={description} link={link} />
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;