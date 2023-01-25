import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/Breadcrumb";

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title="Privacy Policy" canonical={ "privacy-policy/" }/>
            <Breadcrumb title="Privacy Policy"/>
            <section className="privacy-policy">
            </section>
        </>
    );
};

export default PrivacyPolicy;