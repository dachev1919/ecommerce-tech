import Meta from "../components/Meta";
import { Link, useParams } from "react-router-dom";
import { BLOG } from "../assets/data/blog";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const News = () => {
    const { id } = useParams();
    const news = BLOG.find(({ id: itemId }) => Number(itemId) === Number(id));
    const {
        image,
        date,
        title,
        description,
    } = news;

    window.scrollTo(0, 0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Meta canonical={ `blog/${ news.id }` } title={ news.title }/>
            <Breadcrumb breadcrumbs={[{title: 'Blog', link: '/ecommerce-tech/blog'}, {title: news.title, link: `/ecommerce-tech/blog/${ id}`}]}/>
            <section className="news py-5">
                <Container fluid='xxl'>
                    <Row>
                        <Col className="col-12 m-auto" md='8'>
                            <div className="news__image card-wrapper without-margin p-0 overflow-hidden">
                                <img className="w-100" src={ image } alt="news"/>
                            </div>
                            <div className="news__content text-center">
                                <p className="news__date mt-4">{ date }</p>
                                <h1 className="mt-4">{ title }</h1>
                                <h5 className="mt-4">{ description }</h5>
                                <Link to={ "/ecommerce-tech/blog" }>
                                    <button className="btn btn-primary without-responsive mt-4">Back</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default News;