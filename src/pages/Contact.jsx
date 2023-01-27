import Breadcrumb from "../components/Breadcrumb";
import { Container } from "react-bootstrap";
import "../styles/pages/Contact.css";
import { FaHome, FaInfo, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
    };

    return (
        <>
            <Breadcrumb breadcrumbs={[{title: 'Contact', link: '/ecommerce-tech/contact'}]}/>
            <section className="contact">
                <Container fluid='xxl'>
                    <iframe
                        title="google"
                        className="w-100 p-0 m-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162758.4773324267!2d30.392609615675063!3d50.401951397557305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1674650027987!5m2!1sru!2sua"
                        width="600" height="450" style={ { border: "0" } }
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div
                        className="contact__form mt-5 card-wrapper d-flex flex-wrap align-items-start justify-content-between">
                        <div className="w-50 contact__form-left">
                            <h4 className="section-heading mt-2">Contact</h4>
                            <form onSubmit={ e => formSubmitHandler(e) }>
                                <div>
                                    <input value={ name } onChange={ e => setName(e.target.value) } type="text"
                                           className="form-control mb-3" placeholder="Name" required/>
                                </div>
                                <div>
                                    <input value={ email } onChange={ e => setEmail(e.target.value) } type="email"
                                           className="form-control mb-3" placeholder="Email" required/>
                                </div>
                                <div>
                                    <input value={ phone } onChange={ e => setPhone(e.target.value) } type="text"
                                           className="form-control mb-3" placeholder="Phone number" required/>
                                </div>
                                <div>
                                    <textarea value={ message } onChange={ e => setMessage(e.target.value) } name=""
                                              className="form-control mb-4" cols="30" rows="10"
                                              placeholder="Comment"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                        <div className="w-50 contact__form-right">
                            <h4 className="section-heading mt-2">Get in touch with us</h4>
                            <div className="contact__info">
                                <div className="mb-3 d-flex gap-3">
                                    <FaHome/>
                                    <p>33 New Sobornaya St. Ste 750 Kiev, Ukraine, 321761 </p>
                                </div>
                                <div className="mb-3">
                                    <a href="tel:+32173126363" className="d-flex gap-3">
                                        <FaPhone/>
                                        <p>+32173126363</p>
                                    </a>
                                </div>
                                <div className="mb-3 ">
                                    <a href="mailto:admin@admin.com" className="d-flex gap-3">
                                        <AiFillMail/>
                                        <p>admin@admin.com</p>
                                    </a>
                                </div>
                                <div className="mb-3 d-flex gap-3">
                                    <FaInfo/>
                                    <p>Monday - Friday 1Q AM - 8 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Contact;