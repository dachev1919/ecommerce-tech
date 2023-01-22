import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <Container fluid="xxl">
                    <Row>
                        <Col className="col-6">
                            <p className="mb-0 text-white">Free Shipping Over $100 & Free Returns</p>
                        </Col>
                        <Col className="col-6">
                            <p className="mb-0 text-end text-white">Hotline: <a className="text-white"
                                                                                href="tel:+371263615263">+371263615263</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </header>
            <header className="header-upper py-3">
                <Container fluid='xxl'>
                    <Row className='align-items-center'>
                        <Col className='col-2'>
                            <h1 className='h2 mb-0'><Link className='text-white' to={'/ecommerce-tech'}>E-Tech</Link></h1>
                        </Col>
                        <Col className='col-5'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </Col>
                        <Col className='col-5'>
                            <div className="header-upper__links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/compare.svg" alt="compare"/>
                                        <p className='mb-0'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/wishlist.svg" alt="wishlist"/>
                                        <p className='mb-0'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/user.svg" alt="wishlist"/>
                                        <p className='mb-0'>Login <br /> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/cart.svg" alt="wishlist"/>
                                        <div className='d-flex flex-column gap-1'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;