import React from 'react';
import HeroSection from "../components/HeroSection";
import Header from "../components/common/header";
import ProductShowcase from "../components/ProductShowcase";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShowcase />
        </>
    );
}

export default HomePage;