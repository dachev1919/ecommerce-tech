import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";

const RefundPolicy = () => {
    return (
        <>
            <Meta title="Refund Policy" canonical={ "refund-policy/" }/>
            <Breadcrumb title="Refund Policy"/>
            <section className="refund-policy">
            </section>
        </>
    );
};

export default RefundPolicy;