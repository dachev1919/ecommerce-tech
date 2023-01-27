import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {RiDeleteBin5Line} from "react-icons/ri";
import { Link } from "react-router-dom";
import '../styles/pages/Cart.css';
import { cartAction } from "../store/cart/cartSlice";

const Cart = () => {
    const products = useSelector(state => state.cart.cartItems);
    const subtotal = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const deleteProductHandler = (id) => {
        dispatch(cartAction.deleteItem(id));

    }

    return (
        <>
            <Meta title='Cart' canonical={'cart/'} />
            <Breadcrumb breadcrumbs={[{title: 'Cart', link: '/ecommerce-tech/cart'}]} />
            <section className="cart d-flex align-items-center">
                <Container fluid='xxl'>
                    {
                        products.length
                        ? (
                            <>
                                <div className="cart__header">
                                    <Row>
                                        <Col className='col-4' md='6'>
                                            <h5 className='text-uppercase'>Product</h5>
                                        </Col>
                                        <Col className='col-3 text-center' md='2'>
                                            <h5 className='text-uppercase'>Price</h5>
                                        </Col>
                                        <Col className='col-3 text-center' md='2'>
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
                                            <Row key={product.id} className='cart__product'>
                                                <Col className='col-4 d-flex gap-2 gap-md-5 align-items-center flex-column flex-md-row' md='6'>
                                                    <div className="cart__product-image">
                                                        <Link to={ `/ecommerce-tech/store/${ product.id }` }><img src={ product.image } alt="product"/></Link>
                                                    </div>
                                                    <div className="cart__product-info">
                                                        <Link to={ `/ecommerce-tech/store/${ product.id }` }><p>{ product.title }</p></Link>
                                                        <p>
                                                            <span>Color: </span>
                                                            {
                                                                product.color.map((color, index) => (
                                                                    <span
                                                                        key={index}
                                                                        className='d-inline-block'
                                                                        style={{ background: color, width: '10px', height: '10px', marginRight: '10px', borderRadius: '50%' }}
                                                                    />
                                                                ))
                                                            }
                                                        </p>
                                                        <p><span>Category: </span>{product.category}</p>
                                                    </div>
                                                </Col>
                                                <Col className='col-3 text-center' md='2'>$ {product.price}</Col>
                                                <Col className='col-3 text-center' md='2'>$ {product.totalPrice}</Col>
                                                <Col className='col-2 text-center'>
                                                    <button onClick={() => deleteProductHandler(product.id)} className='btn btn-primary' style={{ padding: '.4rem .5rem', lineHeight: '100%' }}>
                                                        <RiDeleteBin5Line/>
                                                    </button>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </div>
                                <div className="cart__footer">
                                    <Row className='justify-content-end'>
                                        <Col className='col-12 text-md-end' md='4'>
                                            <p className='mb-4 d-flex align-items-center justify-content-md-end gap-3 fw-bold'><span>Subtotal:</span> $ {subtotal}</p>
                                            <p className='mb-4'>Taxes and shipping calculated at checkout</p>
                                            <Link to='/ecommerce-tech/checkout' className='btn btn-primary w-100'>Check Out</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </>
                            )
                        : <h3 className="text-center">No products in the cart</h3>
                    }
                </Container>
            </section>
        </>
    );
};

export default Cart;