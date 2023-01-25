import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Store from "../pages/Store";
import Blog from "../pages/Blog";
import News from "../pages/News";
import Compare from "../pages/Compare";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/ecommerce-tech"/> }></Route>
            <Route path="/ecommerce-tech" element={ <Home/> }/>
            <Route path="/ecommerce-tech/about" element={ <About/> }/>
            <Route path="/ecommerce-tech/contact" element={ <Contact/> }/>
            <Route path="/ecommerce-tech/store/:id" element={ <ProductDetails /> }/>
            <Route path="/ecommerce-tech/store" element={ <Store/> }/>
            <Route path="/ecommerce-tech/blog" element={ <Blog /> }/>
            <Route path="/ecommerce-tech/blog/:id" element={ <News /> }/>
            <Route path="/ecommerce-tech/compare" element={ <Compare /> }/>
            <Route path="/ecommerce-tech/wishlist" element={ <Wishlist /> }/>
            <Route path="/ecommerce-tech/login" element={ <Login /> }/>
            <Route path="/ecommerce-tech/cart" element={ <Cart /> }/>
        </Routes>
    );
};

export default Routers;