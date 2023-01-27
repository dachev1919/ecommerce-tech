import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/components/home/BannersSection.css";
import img1 from '../../assets/images/banner-1.png';
import img2 from '../../assets/images/banner-2.png';
import img3 from '../../assets/images/banner-3.png';
import img4 from '../../assets/images/banner-4.png';

const BANNERS = [
    {
        id: 3001,
        subtitle: "Big Screen",
        title: "Smart Watch Series 7",
        text: "From $399 or $16.62/mo. for 24 mo.*",
        image: img1,
    },
    {
        id: 3002,
        subtitle: "Studio Display",
        title: "600 nits of brightness.",
        text: "27-inch 5K Retina display",
        image: img2,
    },
    {
        id: 3003,
        subtitle: "Smartphones",
        title: "Smartphone 13 Pro.",
        text: "Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*",
        image: img3,
    },
    {
        id: 3004,
        subtitle: "Home Speakers",
        title: "Room-filling sound",
        text: "From $699 or $116.58/mo. for 12 mo.*",
        image: img4,
    },
];

const BannersSection = () => {
    return (
        <section className="banners">
            <Container fluid="xxl">
                <h3 className="section-heading">Our Popular Products</h3>
                <Row>
                    {
                        BANNERS.map(({ id, subtitle, title, text, image }) => (
                            <Col key={ id } className="col-12" lg='3' sm='6'>
                                <Link to={ "/ecommerce-tech" }>
                                    <div className="banners__banner card-wrapper without-margin position-relative">
                                        <div className="banners__banner-image">
                                            <img src={ image } alt=""/>
                                        </div>
                                        <div className="banners__banner-content">
                                            <h3 className="banners__banner-subtitle mb1">{ subtitle }</h3>
                                            <h2 className="banners__banner-title mb-1">{ title }</h2>
                                            <p className="banners__banner-text mb-0">{ text }</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    );
};

export default BannersSection;