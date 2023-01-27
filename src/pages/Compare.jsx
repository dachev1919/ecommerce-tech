import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/pages/Compare.css";
import { Link } from "react-router-dom";
import { compareActions } from "../store/compare/compareSlice";
import cross from '../assets/images/cross.svg';

function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + "..." : str;
}

const Compare = () => {
    const products = useSelector(state => state.compare.compareItems);
    const dispatch = useDispatch();

    const addToCompareHandler = (product) => {
        dispatch(compareActions.addItem(product));
    };

    return (
        <>
            <Meta title="Compare" canonical={ "compare/" }/>
            <Breadcrumb breadcrumbs={[{title: 'Compare', link: '/ecommerce-tech/compare'}]}/>
            <section className="compare d-flex align-items-center">
                <Container fluid='xxl'>
                    {
                        products.length
                            ? <>
                                <div className="card-wrapper compare__wrapper d-flex">
                                    <div className="compare__titles">
                                        <p>Title:</p>
                                        <p>Brand:</p>
                                        <p>Price:</p>
                                        <p>Rating:</p>
                                        <p>Category:</p>
                                        <p>Tags:</p>
                                        <p>Color:</p>
                                        <p>Type:</p>
                                        <p>SKU:</p>
                                        <p>Availability:</p>
                                    </div>
                                    <div className="compare__products d-flex overflow-auto">
                                        {
                                            products.map(product => (
                                                <div key={ product.id } className="compare__product">
                                                    <div className="compare__product-image position-relative text-center">
                                                        <Link to={ `/ecommerce-tech/store/${ product.id }` }><img
                                                            src={ product.image } alt="product"/></Link>
                                                        <img onClick={ () => addToCompareHandler(product) }
                                                             className="compare__product-cross" src={ cross }
                                                             alt="cross"/>
                                                    </div>
                                                    <div className="compare__product-content text-center">
                                                        <Link
                                                            to={ `/ecommerce-tech/store/${ product.id }` }>{ truncate(product.title, 20) }</Link>
                                                        <p>{ product.brand }</p>
                                                        <p>{ product.price }</p>
                                                        <p>{ product.rating }</p>
                                                        <p>{ product.category }</p>
                                                        <p>{ product.tags.join(", ") }</p>
                                                        <p>{
                                                            product.color.map(color => (
                                                                <span
                                                                    className='d-inline-block'
                                                                    style={{ background: color, width: '10px', height: '10px', marginRight: '10px', borderRadius: '50%' }}
                                                                />
                                                            ))
                                                        }</p>
                                                        <p>{ product.type }</p>
                                                        <p>{ product.sku }</p>
                                                        <p>{ product.availability }</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </>
                            : <h3 className="text-center">No products to compare</h3>
                    }
                </Container>
            </section>
        </>
    );
};

export default Compare;