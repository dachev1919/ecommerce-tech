import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../UI/ProductCard";
import "../../styles/components/home/PopularProductsSection.css";

const PopularProductsSection = ({ products }) => {
    return (
        <section className="popular-products">
            <Container fluid="xxl">
                <h3 className="section-heading">Our Popular Products</h3>
                <Row>
                    <Col className="col-12" sm='6' lg='3'>
                        <Link to={ "/ecommerce-tech" }>
                            <div className="popular-products__banner card-wrapper without-margin position-relative">
                                <div className="popular-products__banner-image">
                                    <img src="images/banner.png" alt=""/>
                                </div>
                                <div className="popular-products__banner-content">
                                    <h3 className="popular-products__banner-subtitle text-white mb2">10% OFF</h3>
                                    <h2 className="popular-products__banner-title text-white mb-3">Home Speakers</h2>
                                    <p className="popular-products__banner-text text-white mb-0">From $399 or $16.62/mo.<br/>for
                                        24 mo.*</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    {
                        products.slice(0, 3).map((product, index) => (
                            <Col key={ Number(product.id) + index * 3732 } className="col-12" sm='6' lg='3'>
                                <ProductCard product={product} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default PopularProductsSection;