import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "react-bootstrap";

const ShippingPolicy = () => {
    return (
        <>
            <Meta title="Shipping Policy" canonical={ "shipping-policy/" }/>
            <Breadcrumb breadcrumbs={[{title: 'Shipping Policy', link: '/ecommerce-tech/shipping-policy'}]}/>
            <section className="shipping policy">
                <Container fluid='xxl'>
                    <div className="shipping__wrapper card-wrapper without-margin">
                        <div className="shipping__item policy__item">
                            <h5>The Standard Lorem Ipsum Passage</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque dolores error in ipsa ipsam laborum molestiae non officia omnis quod repellat repellendus reprehenderit repudiandae, sequi tempore, tenetur ullam voluptatibus?
                            </p>
                        </div>
                        <div className="shipping__item policy__item">
                            <h5>At Vero Eos Et Accusamus Et lusto Odio Dignissimos</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic iure quisquam saepe. At delectus enim, fugit iste, modi nam, placeat quam quidem repudiandae vel velit vitae voluptate voluptatibus?
                            </p>
                        </div>
                        <div className="shipping__item policy__item">
                            <h5>Certain Circumstances And Owing To The Claims Of Duty Or The Obligations</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur distinctio enim illum laudantium magnam maiores molestiae officiis perspiciatis possimus quidem, repellat saepe sunt vero. Dicta.
                            </p>
                        </div>
                        <div className="shipping__item policy__item">
                            <h5>Integer Ultricees Laireet Nunc In Gravida</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis deserunt et eveniet fugit ipsa iusto laboriosam laudantium, mollitia repudiandae rerum sapiente soluta sunt tempora ut. Eos magnam quis tenetur!
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ShippingPolicy;