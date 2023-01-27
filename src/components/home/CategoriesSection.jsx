import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/components/home/CategoriesSection.css";
import img1 from '../../assets/images/camera.jpg';
import img2 from '../../assets/images/tv.jpg';
import img3 from '../../assets/images/watch.jpg';
import img4 from '../../assets/images/headphone.jpg';
import img5 from '../../assets/images/watch.jpg';
import img6 from '../../assets/images/headphone.jpg';
import img7 from '../../assets/images/camera.jpg';
import img8 from '../../assets/images/tv.jpg';

const CATEGORIES = [
    {
        "id": 1,
        "title": "Cameras",
        "text": "10 Items",
        "image": img1,
    },
    {
        "id": 2,
        "title": "Smart TV",
        "text": "13 Items",
        "image": img2,
    },
    {
        "id": 3,
        "title": "Smart Watches",
        "text": "16 Items",
        "image": img3,
    },
    {
        "id": 4,
        "title": "Music & Gaming",
        "text": "11 Items",
        "image": img4,
    },
    {
        "id": 5,
        "title": "Smart Watches",
        "text": "16 Items",
        "image": img5,
    },
    {
        "id": 6,
        "title": "Music & Gaming",
        "text": "11 Items",
        "image": img6,
    },
    {
        "id": 7,
        "title": "Cameras",
        "text": "18 Items",
        "image": img7,
    },
    {
        "id": 8,
        "title": "Smart TV",
        "text": "13 Items",
        "image": img8,
    },
];

const CategoriesSection = () => {
    return (
        <section className="categories-section">
            <Container fluid="xxl">
                <Row>
                    <Col className="col-12">
                        <div
                            className="categories card-wrapper without-margin d-flex flex-wrap justify-content-between align-items-center">
                            {
                                CATEGORIES.map(category => (
                                    <Link key={ category.id } id={ category.id }
                                          className="d-flex gap-2 gap-lg-3 align-items-center justify-content-between">
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