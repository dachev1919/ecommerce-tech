import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import "../styles/Header.css";
import { useSelector } from "react-redux";
import {RxHamburgerMenu} from "react-icons/rx";
import {GrClose} from "react-icons/gr";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const searchRef = useRef();
    const headerBottom = useRef();

    const searchClickHandler = () => {
        searchRef.current.classList.toggle('active');
    }

    const mobileMenuHandler = () => {
        headerBottom.current.classList.toggle('active');
    }

    return (
        <>
            <header className="header-top-strip py-3">
                <Container fluid="xxl">
                    <Row>
                        <Col className="col-7">
                            <p className="mb-0 text-white">Free Shipping Over $100 & Free Returns</p>
                        </Col>
                        <Col className="col-5">
                            <p className="mb-0 text-end text-white">Hotline: <a className="text-white"
                                                                                href="tel:+371263615263">+371263615263</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </header>
            <header className="header-upper py-3">
                <Container fluid="xxl">
                    <Row className="align-items-center">
                        <Col className="col-2" >
                            <h1 className="h2 mb-0"><Link className="text-white" to={ "/ecommerce-tech" }>E-Tech</Link>
                            </h1>
                        </Col>
                        <Col className="col-10">
                            <div className="header-upper__links d-flex align-items-center justify-content-end gap-3 gap-sm-4 gap-md-0 justify-content-md-between">
                                <div ref={searchRef} className="input-group position-relative">
                                    <div className='form-control p-0'>
                                        <input
                                            type="text"
                                            className="form-control py-2"
                                            placeholder="Search Product Here..."
                                            aria-label="Search Product Here..."
                                            aria-describedby="basic-addon2"
                                        />
                                        <BsSearch className="fs-6 d-block d-md-none"/>
                                    </div>
                                    <span onClick={() => searchClickHandler()} className="input-group-text p-md-3 p-0" id="basic-addon2">
                                    <BsSearch className="fs-6"/>
                                </span>
                                </div>
                                <div>
                                    <Link to='/ecommerce-tech/compare' className="d-flex text-center text-lg-start flex-column flex-lg-row align-items-center gap-1 gap-lg-2 text-white">
                                        <img src="images/compare.svg" alt="compare"/>
                                        <p className="mb-0 d-none d-md-block">Compare <br/> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/ecommerce-tech/wishlist' className="d-flex text-center text-lg-start flex-column flex-lg-row align-items-center gap-1 gap-lg-2 text-white">
                                        <img src="images/wishlist.svg" alt="wishlist"/>
                                        <p className="mb-0 d-none d-md-block">Favourite <br/> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/ecommerce-tech/login' className="d-flex text-center text-lg-start flex-column flex-lg-row align-items-center gap-1 gap-lg-2 text-white">
                                        <img src="images/user.svg" alt="wishlist"/>
                                        <p className="mb-0 d-none d-md-block">Login <br/> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/ecommerce-tech/cart' className="d-flex text-center text-lg-start flex-row flex-md-column flex-lg-row align-items-center gap-1 gap-lg-2 text-white position-relative">
                                        <img src="images/cart.svg" alt="wishlist"/>
                                        <div className="d-flex flex-column gap-1">
                                            <span className="badge bg-white text-dark">{ cartTotalQuantity }</span>
                                            <p className="mb-0 d-none d-md-block">$ { cartTotalAmount }</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='header-upper__burger d-md-none d-block' onClick={() => mobileMenuHandler()}>
                                    <RxHamburgerMenu />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <header ref={headerBottom} className="header-bottom">
                <div className="overlay d-block d-md-none" onClick={() => mobileMenuHandler()}></div>
                <Container fluid="xxl" className='position-relative'>
                    <GrClose className='header-bottom__close d-block d-md-none' onClick={() => mobileMenuHandler()} />
                    <Row>
                        <Col className="col-12">

                            <div className="menu-bottom d-flex flex-column flex-md-row align-items-center gap-0 gap-md-4">
                                <div>
                                    <Dropdown className="d-flex" isOpen={ dropdownOpen } toggle={ toggle }>
                                        <DropdownToggle
                                            className="d-flex align-items-center gap-10 pb-3 pt-3 bg-transparent" caret>
                                            Shop Categories
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className="menu-links py-3">
                                    <div className="d-flex align-items-center gap-30 flex-column flex-md-row">
                                        <NavLink to="/ecommerce-tech">Home</NavLink>
                                        <NavLink to="/ecommerce-tech/store">Our Store</NavLink>
                                        <NavLink to="/ecommerce-tech/blog">Blog</NavLink>
                                        <NavLink to="/ecommerce-tech/contact">Contact</NavLink>
                                    </div>
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