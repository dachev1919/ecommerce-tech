import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { wishlistActions } from "../store/wishlist/wishlistSlice";
import "../styles/pages/Wishlist.css";
import { cartAction } from "../store/cart/cartSlice";
import { toast } from "react-toastify";
import cross from '../assets/images/cross.svg';

function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + "..." : str;
}

const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    const addToWishlistHandler = (product) => {
        dispatch(wishlistActions.addItem(product));
    };

    const addToCartHandler = (product) => {
        dispatch(cartAction.addItem({
            id: product.id,
            image: product.image,
            title: product.title,
            brand: product.brand,
            description: product.description,
            price: product.price,
            rating: product.rating,
            link: product.link,
            secondImage: product.secondImage,
            thirdImage: product.thirdImage,
            category: product.category,
            tags: product.tags,
            color: product.color,
            type: product.type,
            sku: product.sku,
            availability: product.availability,
        }));

        toast.success("product added successfully");
    };

    return (
        <>
            <Meta title="Wishlist" canonical={ "wishlist/" }/>
            <Breadcrumb breadcrumbs={[{title: 'Wishlist', link: '/ecommerce-tech/wishlist'}]}/>
            <section className="wishlist d-flex align-items-center">
                <Container fluid='xxl'>
                    <Row>
                        {
                            wishlist.length
                                ? (
                                    wishlist.map(product => (
                                        <Col key={ product.id } className="col-12 text-center" sm='6' md='4' lg='3'>
                                            <div className="wishlist__product card-wrapper without-margin mb-4">
                                                <div className="wishlist__product-image position-relative">
                                                    <Link to={ `/ecommerce-tech/store/${ product.id }` }><img
                                                        src={ product.image } alt="product"/></Link>
                                                    <img onClick={ () => addToWishlistHandler(product) }
                                                         className="wishlist__product-cross" src={ cross }
                                                         alt="cross"/>
                                                </div>
                                                <div className="wishlist__product-info">
                                                    <Link to={ `/ecommerce-tech/store/${ product.id }` }><h3
                                                        className="wishlist__product-title">{ truncate(product.title, 20) }</h3>
                                                    </Link>
                                                    <p className="wishlist__product-price">$ { product.price }</p>
                                                    <button className="btn btn-primary w-100"
                                                            onClick={ () => addToCartHandler(product) }>Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    )))
                                : <h3 className="text-center">There are no products in the list</h3>
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Wishlist;