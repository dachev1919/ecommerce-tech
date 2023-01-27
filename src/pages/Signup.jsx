import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "react-bootstrap";
import { useState } from "react";
import '../styles/pages/Signup.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmitHandler = e => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Meta title="Sign Up" canonical={ "signup/" }/>
            <Breadcrumb breadcrumbs={[{title: 'Signup', link: '/ecommerce-tech/signup'}]}/>
            <section className="signup">
                <Container fluid='xxl'>
                    <div className="signup__wrapper text-center card-wrapper">
                        <h3 className='mb-4'>Sign Up</h3>
                        <form className='signup__form' onSubmit={(e) => formSubmitHandler(e)}>
                            <div>
                                <input value={ firstName } onChange={ e => setFirstName(e.target.value) } type="text"
                                       className="form-control mb-3" placeholder="First Name" required/>
                            </div>
                            <div>
                                <input value={ lastName } onChange={ e => setLastName(e.target.value) } type="text"
                                       className="form-control mb-3" placeholder="Last Name" required/>
                            </div>
                            <div>
                                <input value={ email } onChange={ e => setEmail(e.target.value) } type="email"
                                       className="form-control mb-3" placeholder="Email" required/>
                            </div>
                            <div>
                                <input value={ password } onChange={ e => setPassword(e.target.value) } type="password"
                                       className="form-control mb-3" placeholder="Password" required/>
                            </div>
                            <div className="signup__buttons d-flex gap-3 justify-content-center mt-4">
                                <button className='btn btn-primary' type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Signup;