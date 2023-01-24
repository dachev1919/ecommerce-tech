import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../UI/ProductCard";
import "../../styles/components/home/FeaturedSection.css";

const FeaturedSection = ({ products }) => {
    return (
        <section className="featured-collection">
            <Container fluid="xxl">
                <h3 className="section-heading">Featured Collection</h3>
                <Row>
                    {
                        products.map(product => (
                            <Col key={ product.id } className="col-2">
                                <ProductCard product={ product }/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedSection;