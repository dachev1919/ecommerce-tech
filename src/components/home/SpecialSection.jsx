import { Col, Container, Row } from "react-bootstrap";
import SpecialProduct from "../UI/SpecialProduct";
import "../../styles/components/home/SpecialSection.css";

const SpecialSection = ({ products }) => {
    return (
        <section className="special">
            <Container fluid="xxl">
                <h3 className="section-heading">Special Product</h3>
                <Row>
                    {
                        products.map(({
                                          id,
                                          image,
                                          secondImage,
                                          thirdImage,
                                          title,
                                          brand,
                                          description,
                                          price,
                                          rating,
                                      }, index) => (
                            <Col key={ Number(id) + Number(index) * 200 } className="col-4">
                                <SpecialProduct
                                    id={ id }
                                    image={ image }
                                    secondImage={ secondImage }
                                    thirdImage={ thirdImage }
                                    title={ title }
                                    brand={ brand }
                                    description={ description }
                                    price={ price }
                                    rating={ rating }
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default SpecialSection;