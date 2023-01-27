import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Breadcrumb = ({breadcrumbs}) => {
    return (
        <div className='breadcrumb py-4 mb-0 text-center'>
            <Container fluid='xxl'>
                <Row>
                    <Col className='col-12'>
                        <p className='mb-0'>
                            <Link to={'/ecommerce-tech'}>Home</Link>
                            {
                                breadcrumbs.map((breadcrumb, index) => (
                                    <>
                                        /
                                        <Link key={index} to={breadcrumb.link}>{breadcrumb.title}</Link>
                                    </>
                                ))
                            }
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Breadcrumb;