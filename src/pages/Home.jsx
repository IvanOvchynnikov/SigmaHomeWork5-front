import React from 'react';
import Header from "../components/header/Header";
import Offers from "../components/offers/offers";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Testimonials from "../components/testimonials/Testimonials";
import OfferOrganick from "../components/offerOrganick/OfferOrganick";
import Econic from "../components/econic/Econic";
import Creative from "../components/creative/Creative";
import News from "../components/news/News";

const Home = ({cartItems,setCartItems}) => {
    return (
        <>
            <Header/>
            <Offers/>
            <About/>
            <Products cartItems={cartItems} setCartItems={setCartItems}/>
            <Testimonials/>
            <OfferOrganick/>
            <Econic/>
            <Creative/>
            <News/>
        </>

    );
};

export default Home;