import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {RiDeleteBin5Line} from "react-icons/ri";
import { Link } from "react-router-dom";
import '../styles/pages/Cart.css';

const Cart = () => {
    const products = useSelector(state => state.cart.cartItems);
    const subtotal = useSelector(state => state.cart.totalQuantity);

    return (
        <>
            <Meta title='Cart' canonical={'cart/'} />
            <Breadcrumb title='Your Shopping Cart' />
            <section className="cart d-flex align-items-center">
                <Container fluid='xxl'>
                    {
                        products.length
                        ? (
                            <>
                                <div className="cart__header">
                                    <Row>
                                        <Col className='col-6'>
                                            <h5 className='text-uppercase'>Product</h5>
                                        </Col>
                                        <Col className='col-2 text-center'>
                                            <h5 className='text-uppercase'>Price</h5>
                                        </Col>
                                        <Col className='col-2 text-center'>
                                            <h5 className='text-uppercase'>Total</h5>
                                        </Col>
                                        <Col className='col-2 text-center'>
                                            <h5 className='text-uppercase'>Action</h5>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="cart__list">
                                    {
                                        products.map(product => (
                                            <Row className='cart__product'>
                                                <Col className='col-6 d-flex gap-5 align-items-center'>
                                                    <div className="cart__product-image">
                                                        <Link to={ `/ecommerce-tech/store/${ product.id }` }><img src={ product.image } alt="product"/></Link>
                                                    </div>
                                                    <div className="cart__product-info">
                                                        <Link to={ `/ecommerce-tech/store/${ product.id }` }><p>{ product.title }</p></Link>
                                                        <p>
                                                            <span>Color: </span>
                                                            {
                                                                product.color.map(color => (
                                                                    <span
                                                                        className='d-inline-block'
                                                                        style={{ background: color, width: '10px', height: '10px', marginRight: '10px', borderRadius: '50%' }}
                                                                    />
                                                                ))
                                                            }
                                                        </p>
                                                        <p><span>Category: </span></p>
                                                    </div>
                                                </Col>
                                                <Col className='col-2 text-center'>$ {product.price}</Col>
                                                <Col className='col-2 text-center'>$ {product.totalPrice}</Col>
                                                <Col className='col-2 text-center'><button className='btn btn-primary' style={{ padding: '.5rem', lineHeight: '100%' }}><RiDeleteBin5Line/></button></Col>
                                            </Row>
                                        ))
                                    }
                                </div>
                            </>
                            )
                        :  <h3 className="text-center">No products in the cart</h3>
                    }
                </Container>
            </section>
        </>
    );
};

export default Cart;