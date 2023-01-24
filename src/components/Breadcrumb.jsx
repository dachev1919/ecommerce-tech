import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Breadcrumb = ({title}) => {
    return (
        <div className='breadcrumb py-4 mb-0 text-center'>
            <Container fluid='xxl'>
                <Row>
                    <Col className='col-12'>
                        <p className='text-dark mb-0'><Link className='text-dark' to={'/ecommerce-tech'}>Home</Link> / {title}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Breadcrumb;