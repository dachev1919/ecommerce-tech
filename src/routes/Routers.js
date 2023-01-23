import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/ecommerce-tech' />}></Route>
            <Route path='/ecommerce-tech' element={<Home />} />
            <Route path='/ecommerce-tech/about' element={<About />} />
            <Route path='/ecommerce-tech/contact' element={<Contact />} />
            <Route path='/ecommerce-tech/product/*:id' element={<Contact />} />
        </Routes>
    );
};

export default Routers;