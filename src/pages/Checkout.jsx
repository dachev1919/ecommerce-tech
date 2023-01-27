import '../styles/pages/Checkout.css';
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postal, setPostal] = useState('');
    const products = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const formSubmitHandler = e => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPhone('');
        setCountry('');
        setCity('');
        setPostal('');
    }

    const breadcrumbs = [
        {
            title: 'Cart',
            link: '/ecommerce-tech/cart'
        },
        {
            title: 'Payment',
            link: '/ecommerce-tech/checkout'
        },
    ]
    return (
        <>
            <Meta title='Checkout' canonical={'checkout/'} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="cart d-flex align-items-center checkout">
                <Container fluid='xxl'>
                    {
                        products.length
                        ? (
                            <>
                                <Row>
                                    <Col md='8' className='col-12 mb-md-0 mb-3'>
                                        <div className="card-wrapper without-margin">
                                            <form className='login__form' onSubmit={(e) => formSubmitHandler(e)}>
                                                <div>
                                                    <input value={ name } onChange={ e => setName(e.target.value) } type="text"
                                                           className="form-control mb-3" placeholder="Name" required/>
                                                </div>
                                                <div>
                                                    <input value={ email } onChange={ e => setEmail(e.target.value) } type="email"
                                                           className="form-control mb-3" placeholder="Email" required/>
                                                </div>
                                                <div>
                                                    <input value={ phone } onChange={ e => setPhone(e.target.value) } type="number"
                                                           className="form-control mb-3" placeholder="Phone" required/>
                                                </div>
                                                <div>
                                                    <input value={ country } onChange={ e => setCountry(e.target.value) } type="text"
                                                           className="form-control mb-3" placeholder="Country" required/>
                                                </div>
                                                <div>
                                                    <input value={ city } onChange={ e => setCity(e.target.value) } type="text"
                                                           className="form-control mb-3" placeholder="City" required/>
                                                </div>
                                                <div>
                                                    <input value={ postal } onChange={ e => setPostal(e.target.value) } type="text"
                                                           className="form-control mb-3" placeholder="Postal Code" required/>
                                                </div>
                                                <div className='checkout__buttons d-flex flex-column flex-sm-row align-items-center justify-content-end gap-3 mt-5'>
                                                    <Link className='btn btn-secondary without-responsive' to='/ecommerce-tech/store'>Continue Shopping</Link>
                                                    <button type='submit' className='btn btn-primary without-responsive'>Payment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Col>
                                    <Col md='4' className='col-12'>
                                        <div className="card-wrapper without-margin">
                                            <div className="checkout__products">
                                                {
                                                    products.map(product => (
                                                        <div key={product.id} className='checkout__product gap-3 d-flex align-items-center justify-content-between'>
                                                            <div className="checkout__product-image position-relative">
                                                                <span className='badge'>{product.quantity}</span>
                                                                <Link to={`/ecommerce-tech/store/${ product.id }`}><img src={product.image} alt="product"/></Link>
                                                            </div>
                                                            <div className="checkout__product-info">
                                                                <Link to={`/ecommerce-tech/store/${ product.id }`}><p className='mb-2'>{product.title}</p></Link>
                                                                <p className='mb-0'><span>Category: </span>{product.category}</p>
                                                            </div>
                                                            <div className="checkout__product-price">
                                                                <p className='mb-0'>$ {product.price}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="checkout__subtotal-info">
                                                <div className="checkout__subtotal checkout__total d-flex align-items-center justify-content-between gap-2">
                                                    <p className='title'>Subtotal</p>
                                                    <p>$ {totalAmount}</p>
                                                </div>
                                                <div className="checkout__shipping checkout__total d-flex align-items-center justify-content-between gap-2">
                                                    <p className='mb-0 title'>Shipping</p>
                                                    <p className='mb-0 '>FREE</p>
                                                </div>
                                            </div>
                                            <div className="checkout__total d-flex align-items-center justify-content-between gap-2">
                                                <p className='mb-0 title fw-bold'>Total</p>
                                                <p className='mb-0 fw-bold'>$ {totalAmount}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        )
                        : <h3 className="text-center">No products in the cart</h3>
                    }
                </Container>
            </section>
        </>
    );
};

export default Checkout;