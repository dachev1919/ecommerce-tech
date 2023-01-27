import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "../../styles/components/home/MarquesSection.css";
import img1 from '../../assets/images/brand-01.png';
import img2 from '../../assets/images/brand-02.png';
import img3 from '../../assets/images/brand-03.png';
import img4 from '../../assets/images/brand-04.png';
import img5 from '../../assets/images/brand-05.png';
import img6 from '../../assets/images/brand-06.png';
import img7 from '../../assets/images/brand-07.png';
import img8 from '../../assets/images/brand-08.png';

const MARQUE = [
    {
        id: 101,
        "image": img1,
    },
    {
        id: 102,
        "image": img2,
    },
    {
        id: 103,
        "image": img3,
    },
    {
        id: 104,
        "image": img4,
    },
    {
        id: 105,
        "image": img5,
    },
    {
        id: 106,
        "image": img6,
    },
    {
        id: 107,
        "image": img7,
    },
    {
        id: 108,
        "image": img8,
    },
];

const MarquesSection = () => {
    return (
        <section className="marque-wrapper">
            <Container fluid="xxl">
                <Row>
                    <Col className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper without-margin">
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