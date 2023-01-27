import { Col, Container, Row } from "react-bootstrap";
import "../../styles/components/home/ServicesSection.css";

const ServicesSection = () => {
    return (
        <section className="services-section">
            <Container fluid="xxl">
                <Row>
                    <Col className="col-12">
                        <div className="services gap-5 gap-sm-0 d-flex align-items-center justify-content-between">
                            <div className="d-flex flex-column flex-xxl-row align-items-center gap-3">
                                <img src="images/service.png" alt="services"/>
                                <div className='text-center text-xxl-start'>
                                    <h6 className="mb-1">Free Shipping</h6>
                                    <p className="m-0">From all orders over $5</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-xxl-row align-items-center gap-3">
                                <img src="images/service-02.png" alt="services"/>
                                <div className='text-center text-xxl-start'>
                                    <h6 className="mb-1">Daily Surprise Offers</h6>
                                    <p className="m-0">Save upto 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-xxl-row align-items-center gap-3">
                                <img src="images/service-03.png" alt="services"/>
                                <div className='text-center text-xxl-start'>
                                    <h6 className="mb-1">Support 24/7</h6>
                                    <p className="m-0">Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-xxl-row align-items-center gap-3">
                                <img src="images/service-04.png" alt="services"/>
                                <div className='text-center text-xxl-start'>
                                    <h6 className="mb-1">Affordable Prices</h6>
                                    <p className="m-0">Get Factory Default Price</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-xxl-row align-items-center gap-3">
                                <img src="images/service-05.png" alt="services"/>
                                <div className='text-center text-xxl-start'>
                                    <h6 className="mb-1">Secure Payment</h6>
                                    <p className="m-0">100% Protected Payment</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;