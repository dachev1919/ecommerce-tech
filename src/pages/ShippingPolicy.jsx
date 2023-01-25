import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";

const ShippingPolicy = () => {
    return (
        <>
            <Meta title="Shipping Policy" canonical={ "shipping-policy/" }/>
            <Breadcrumb title="Shipping Policy"/>
            <section className="shipping">
            </section>
        </>
    );
};

export default ShippingPolicy;