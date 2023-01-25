import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";

const TermOfService = () => {
    return (
        <>
            <Meta title="Term Of Service" canonical={ "term-policy/" }/>
            <Breadcrumb title="Term Of Service"/>
            <section className="term-of-service">
            </section>
        </>
    );
};

export default TermOfService;