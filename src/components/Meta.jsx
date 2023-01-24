import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({title, canonical}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ title }</title>
            <link rel="canonical" href={`https://dachev1919.github.io/ecommerce-tech/${canonical}`} />
        </Helmet>
    );
};

export default Meta;