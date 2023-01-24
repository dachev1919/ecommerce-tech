import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({ title, canonical }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{ title }</title>
                <link rel="canonical" href={ `https://dachev1919.github.io/ecommerce-tech/${ canonical }` }/>
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;