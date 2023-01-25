import Meta from "../components/Meta";
import { Col, Container, Row } from "react-bootstrap";
import { BLOG } from "../assets/data/blog";
import BlogCard from "../components/UI/BlogCard";
import '../styles/pages/Blog.css';
import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Meta title='Blog' canonical={'blog/'} />
            <section className="blog">
                <Container fluid='xxl'>
                    <h3 className='section-heading text-center'>Blog</h3>
                    <Row>
                        {
                            BLOG.map(news => (
                                <Col key={news.id} className='col-6'>
                                    <BlogCard news={news} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Blog;