import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import "../styles/Footer.css";
import newsletter from '../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>
            <footer className="py-4 newsletter">
                <Container fluid="xxl">
                    <Row>
                        <Col className="col-12 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start" md='5'>
                            <div className="footer-top-data d-flex align-items-center gap-30">
                                <img src={ newsletter } alt="newsletter"/>
                                <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
                            </div>
                        </Col>
                        <Col className="col-12" md='7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address..."
                                    aria-label="Your Email Address..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <footer className="py-4">
                <Container fluid="xxl">
                    <Row>
                        <Col className="col-12 mb-5 mb-md-0" sm='6' md='3' lg='4'>
                            <h5 className="text-white mb-4">Contact Use</h5>
                            <div>
                                <address className="text-white">
                                    Ukraine: 371 New Vill chopal, <br/> Kiev, Sobornaya <br/>PostCode: 12312
                                </address>
                                <a href="tel:+2311231233" className="mt-3 d-block">+2311231233</a>
                                <a href="mailto:admin@admin.com" className="mt-3 d-block">admin@admin.com</a>
                                <div className="social-icons gap-3 d-flex mt-3 align-items-center">
                                    <a href="/">
                                        <BsLinkedin className="text-white fs-6"/>
                                    </a>
                                    <a href="/">
                                        <BsGithub className="text-white fs-6"/>
                                    </a>
                                    <a href="/">
                                        <BsYoutube className="text-white fs-6"/>
                                    </a>
                                    <a href="/">
                                        <BsInstagram className="text-white fs-6"/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-12 mb-5 mb-md-0" sm='6' md='3'>
                            <h5 className="text-white mb-4">Information</h5>
                            <div className="footer-links flex-column d-flex">
                                <Link to="/ecommerce-tech/privacy-policy" className="text-white py-2 mn-1">Privacy Policy</Link>
                                <Link to="/ecommerce-tech/refund-policy" className="text-white py-2 mn-1">Refund Policy</Link>
                                <Link to="/ecommerce-tech/shipping-policy" className="text-white py-2 mn-1">Shipping Policy</Link>
                                <Link to="/ecommerce-tech/term-policy" className="text-white py-2 mn-1">Terms Of Service</Link>
                                <Link to="/ecommerce-tech/blog" className="text-white py-2 mn-1">Blogs</Link>
                            </div>
                        </Col>
                        <Col className="col-12 mb-5 mb-md-0" sm='6' md='3'>
                            <h5 className="text-white mb-4">Account</h5>
                            <div className="footer-links flex-column d-flex">
                                <Link to='/ecommerce-tech' className="text-white py-2 mn-1">Search</Link>
                                <Link to='/ecommerce-tech' className="text-white py-2 mn-1">About Us</Link>
                                <Link to='/ecommerce-tech' className="text-white py-2 mn-1">Faq</Link>
                                <Link to='/ecommerce-tech' className="text-white py-2 mn-1">Contact</Link>
                                <Link to='/ecommerce-tech' className="text-white py-2 mn-1">Size Chart</Link>
                            </div>
                        </Col>
                        <Col className="col-12 mb-5 mb-md-0" sm='6' md='3' lg='2'>
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <div className="footer-links flex-column d-flex">
                                <Link to='/ecommerce-tech/store' className="text-white py-2 mn-1">Accessories</Link>
                                <Link to='/ecommerce-tech/store' className="text-white py-2 mn-1">Laptops</Link>
                                <Link to='/ecommerce-tech/store' className="text-white py-2 mn-1">Headphones</Link>
                                <Link to='/ecommerce-tech/store' className="text-white py-2 mn-1">Tablets</Link>
                                <Link to='/ecommerce-tech/store' className="text-white py-2 mn-1">Watches</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <footer className="py-4 copyright">
                <Container fluid="xxl">
                    <Row>
                        <Col className="col-12">
                            <p className="text-center text-white mb-0">&copy; Copyrights { new Date().getFullYear() }.
                                Developed by Dachev. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;