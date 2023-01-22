import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/ecommerce-tech' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/ecommerce-tech/about' element={<About />} />
                        <Route path='/ecommerce-tech/contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
