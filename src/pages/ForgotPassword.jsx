import { useState } from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/pages/Forgot.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const formSubmitHandler = e => {
        e.preventDefault();
        setEmail("");
    };

    return (
        <>
            <Meta title="Forgot Password" canonical={ "forgot/" }/>
            <Breadcrumb title="Forgot"/>
            <section className="forgot">
                <Container fluid='xxl'>
                    <div className="forgot__wrapper text-center card-wrapper">
                        <h3 className="mb-3">Reset Your Password</h3>
                        <p className="mb-4">We will send you an email to reset your password</p>
                        <form className="forgot__form" onSubmit={ (e) => formSubmitHandler(e) }>
                            <div>
                                <input value={ email } onChange={ e => setEmail(e.target.value) } type="email"
                                       className="form-control mb-3" placeholder="Email" required/>
                            </div>
                            <div className="forgot__buttons d-flex flex-column align-items-center gap-3 justify-content-center mt-4">
                                <button className="btn-primary btn" type='submit'>Reset</button>
                                <Link to="/ecommerce-tech">
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ForgotPassword;