import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "../../styles/components/home/HeroSection.css";

SwiperCore.use([Pagination, EffectCoverflow]);

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container fluid="xxl">
                <Row>
                    <Col className="col-12" lg='6'>
                        <Swiper
                            className="main-banner position-relative"
                            effect={ "coverflow" }
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
                                <img src="/images/main-banner-1.jpg" className="img-fluid" alt="m-banner"/>
                                <div className="main-banner__content position-absolute">
                                    <h4>Supercharged For Pros.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p className='m-0'>From $999.00 or $41.62/mo.<br/>for 24 mo. Footnote*</p>
                                    <Link className="btn btn-primary mt-3 mt-md-4">Buy Now</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/main-banner.jpg" className="img-fluid " alt="m-banner"/>
                                <div className="main-banner__content position-absolute">
                                    <h4>Supercharged For Pros.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p className='m-0'>From $999.00 or $41.62/mo.<br/>for 24 mo. Footnote*</p>
                                    <Link className="btn btn-primary mt-3 mt-md-4">Buy Now</Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </Col>
                    <Col className="col-12" lg='6'>
                        <div className="small-banners d-grid">
                            <Link className="small-banner position-relative">
                                <img src="/images/catbanner-01.jpg" className="img-fluid" alt="m-banner"/>
                                <div className="small-banner__content position-absolute">
                                    <h4 className="mb-1">Best Sale</h4>
                                    <h5 className="mb-1">Laptop Max</h5>
                                    <p className="mb-2">From $1699.00 or<br/>$64.62/mo.</p>
                                </div>
                            </Link>
                            <Link className="small-banner position-relative">
                                <img src="/images/catbanner-02.jpg" className="img-fluid" alt="m-banner"/>
                                <div className="small-banner__content position-absolute">
                                    <h4 className="mb-1">New Arrival</h4>
                                    <h5 className="mb-1">Buy IPad Air</h5>
                                    <p className="mb-2">From $599.00 or<br/>$49.91/mo. for 12 mo. *</p>
                                </div>
                            </Link>
                            <Link className="small-banner position-relative">
                                <img src="/images/catbanner-03.jpg" className="img-fluid" alt="m-banner"/>
                                <div className="small-banner__content position-absolute">
                                    <h4 className="mb-1">15% OFF</h4>
                                    <h5 className="mb-1">Smartwatch 7</h5>
                                    <p className="mb-2">Shop the latest band<br/>styles and colors</p>
                                </div>
                            </Link>
                            <Link className="small-banner position-relative">
                                <img src="/images/catbanner-04.jpg" className="img-fluid" alt="m-banner"/>
                                <div className="small-banner__content position-absolute">
                                    <h4 className="mb-1">Free Engraving</h4>
                                    <h5 className="mb-1">AirPods Max</h5>
                                    <p className="mb-2">High-fidelity playback &<br/>ultra-low distortion</p>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;