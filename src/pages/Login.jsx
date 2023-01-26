import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import '../styles/pages/Login.css';
import { Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmitHandler = e => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Meta title="Login" canonical={ "login/" }/>
            <Breadcrumb title="Login"/>
            <section className="login">
                <Container fluid='xxl'>
                    <div className="login__wrapper text-center card-wrapper">
                        <h3 className='mb-4'>Login</h3>
                        <form className='login__form' onSubmit={(e) => formSubmitHandler(e)}>
                            <div>
                                <input value={ email } onChange={ e => setEmail(e.target.value) } type="email"
                                       className="form-control mb-3" placeholder="Email" required/>
                            </div>
                            <div>
                                <input value={ password } onChange={ e => setPassword(e.target.value) } type="password"
                                       className="form-control mb-3" placeholder="Password" required/>
                            </div>
                            <Link to='/ecommerce-tech/forgot'>Forgot your password?</Link>
                            <div className="login__buttons d-flex gap-3 justify-content-center mt-4">
                                <button type='submit' className='btn-primary btn'>Login</button>
                                <Link to='/ecommerce-tech/signup'><button className='btn btn-secondary'>Sign Up</button></Link>
                            </div>
                        </form>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default Login;