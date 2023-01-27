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
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import TermOfService from "../pages/TermOfService";
import ShippingPolicy from "../pages/ShippingPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Checkout from "../pages/Checkout";

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
            <Route path="/ecommerce-tech/forgot" element={ <ForgotPassword /> }/>
            <Route path="/ecommerce-tech/signup" element={ <Signup /> }/>
            <Route path="/ecommerce-tech/privacy-policy" element={ <PrivacyPolicy /> }/>
            <Route path="/ecommerce-tech/refund-policy" element={ <RefundPolicy /> }/>
            <Route path="/ecommerce-tech/shipping-policy" element={ <ShippingPolicy /> }/>
            <Route path="/ecommerce-tech/term-policy" element={ <TermOfService /> }/>
            <Route path="/ecommerce-tech/checkout" element={ <Checkout /> }/>
        </Routes>
    );
};

export default Routers;