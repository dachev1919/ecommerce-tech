import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/components/home/CategoriesSection.css";

const CATEGORIES = [
    {
        "id": 1,
        "title": "Cameras",
        "text": "10 Items",
        "image": "/images/camera.jpg",
    },
    {
        "id": 2,
        "title": "Smart TV",
        "text": "13 Items",
        "image": "/images/tv.jpg",
    },
    {
        "id": 3,
        "title": "Smart Watches",
        "text": "16 Items",
        "image": "/images/watch.jpg",
    },
    {
        "id": 4,
        "title": "Music & Gaming",
        "text": "11 Items",
        "image": "/images/headphone.jpg",
    },
    {
        "id": 5,
        "title": "Smart Watches",
        "text": "16 Items",
        "image": "/images/watch.jpg",
    },
    {
        "id": 6,
        "title": "Music & Gaming",
        "text": "11 Items",
        "image": "/images/headphone.jpg",
    },
    {
        "id": 7,
        "title": "Cameras",
        "text": "18 Items",
        "image": "/images/camera.jpg",
    },
    {
        "id": 8,
        "title": "Smart TV",
        "text": "13 Items",
        "image": "/images/tv.jpg",
    },
];

const CategoriesSection = () => {
    return (
        <section className="categories-section">
            <Container fluid="xxl">
                <Row>
                    <Col className="col-12">
                        <div
                            className="categories card-wrapper d-flex flex-wrap justify-content-between align-items-center">
                            {
                                CATEGORIES.map(category => (
                                    <Link key={ category.id } id={ category.id }
                                          className="d-flex gap-30 align-items-center justify-content-between">
                                        <div>
                                            <h6>{ category.title }</h6>
                                            <p>{ category.text }</p>
                                        </div>
                                        <img src={ category.image } alt="camera"/>
                                    </Link>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CategoriesSection;