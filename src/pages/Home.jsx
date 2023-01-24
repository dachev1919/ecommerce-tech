import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import ServicesSection from "../components/home/ServicesSection";
import CategoriesSection from "../components/home/CategoriesSection";
import BannersSection from "../components/home/BannersSection";
import SpecialSection from "../components/home/SpecialSection";
import PopularProductsSection from "../components/home/PopularProductsSection";
import MarquesSection from "../components/home/MarquesSection";
import BlogSection from "../components/home/BlogSection";
import { PRODUCTS } from "../assets/data/products";
import Meta from "../components/Meta";


const Home = () => {

    return (
        <>
            <Meta title='Home' canonical=''/>

            <HeroSection/>

            <ServicesSection/>

            <CategoriesSection/>

            <FeaturedSection products={ PRODUCTS }/>

            <BannersSection/>

            <SpecialSection products={ PRODUCTS }/>

            <PopularProductsSection products={ PRODUCTS }/>

            <MarquesSection/>

            <BlogSection/>
        </>
    );
};

export default Home;