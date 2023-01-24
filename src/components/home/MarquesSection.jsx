import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "../../styles/components/home/MarquesSection.css";

const MARQUE = [
    {
        id: 101,
        "image": "/images/brand-01.png",
    },
    {
        id: 102,
        "image": "/images/brand-02.png",
    },
    {
        id: 103,
        "image": "/images/brand-03.png",
    },
    {
        id: 104,
        "image": "/images/brand-04.png",
    },
    {
        id: 105,
        "image": "/images/brand-05.png",
    },
    {
        id: 106,
        "image": "/images/brand-06.png",
    },
    {
        id: 107,
        "image": "/images/brand-07.png",
    },
    {
        id: 108,
        "image": "/images/brand-08.png",
    },
];

const MarquesSection = () => {
    return (
        <section className="marque-wrapper">
            <Container fluid="xxl">
                <Row>
                    <Col className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex align-items-center">
                                {
                                    MARQUE.map(mark => (
                                        <div key={ mark.id }>
                                            <img src={ mark.image } alt="marque"/>
                                        </div>
                                    ))
                                }
                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MarquesSection;