import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Store from "../pages/Store";
import Blog from "../pages/Blog";
import News from "../styles/pages/News";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/ecommerce-tech"/> }></Route>
            <Route path="/ecommerce-tech" element={ <Home/> }/>
            <Route path="/ecommerce-tech/about" element={ <About/> }/>
            <Route path="/ecommerce-tech/contact" element={ <Contact/> }/>
            <Route path="/ecommerce-tech/product/:id" element={ <Contact/> }/>
            <Route path="/ecommerce-tech/store" element={ <Store/> }/>
            <Route path="/ecommerce-tech/blog" element={ <Blog /> }/>
            <Route path="/ecommerce-tech/blog/:id" element={ <News /> }/>
        </Routes>
    );
};

export default Routers;