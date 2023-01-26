import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../UI/ProductCard";
import "../../styles/components/home/FeaturedSection.css";

const FeaturedSection = ({ products, title }) => {
    return (
        <section className="featured-collection">
            <Container fluid="xxl">
                <h3 className="section-heading">{ title }</h3>
                <Row>
                    {
                        products.map(product => (
                            <Col key={ product.id } className="col-12" sm='6' md='4' lg='3' xl='2'>
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