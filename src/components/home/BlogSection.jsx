import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../UI/BlogCard";
import "../../styles/components/home/BlogSection.css";

const NEWS = [
    {
        id: 1001,
        image: "/images/blog-1.jpg",
        date: "11 June, 2022",
        title: "A Beautiful Sunday Morning Renaissance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?",
        link: "/ecommerce-tech",
    },
    {
        id: 1002,
        image: "/images/blog-2.jpg",
        date: "11 June, 2022",
        title: "Sed Ut Perspiciatis Unde Omnis",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?",
        link: "/ecommerce-tech",
    },
    {
        id: 1003,
        image: "/images/blog-3.jpg",
        date: "11 June, 2022",
        title: "Vitae Magnis Fusce Leoreet Porttitor",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?",
        link: "/ecommerce-tech",
    },
    {
        id: 1004,
        image: "/images/blog-4.jpg",
        date: "11 June, 2022",
        title: "Urna Pretium Elit Mauris Cursus Curbitu",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos?",
        link: "/ecommerce-tech",
    },
];

const BlogSection = () => {
    return (
        <section className="blog">
            <Container fluid="xxl">
                <h3 className="section-heading">Our Latest News</h3>
                <Row>
                    {
                        NEWS.map(({ id, title, date, description, link, image }) => (
                            <Col key={ id } className="col-3">
                                <BlogCard image={ image } date={ date } title={ title } description={ description }
                                          link={ link }/>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    );
};

export default BlogSection;