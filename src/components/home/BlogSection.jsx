import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../UI/BlogCard";
import "../../styles/components/home/BlogSection.css";
import { BLOG } from "../../assets/data/blog";
import { Link } from "react-router-dom";

const BlogSection = () => {
    return (
        <section className="blog">
            <Container fluid="xxl">
                <Link to={'/ecommerce-tech/blog'}><h3 className="section-heading">Our Latest News</h3></Link>
                <Row>
                    {
                        BLOG.map(news => (
                            <Col key={ news.id } className="col-3">
                                <BlogCard news={news} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    );
};

export default BlogSection;