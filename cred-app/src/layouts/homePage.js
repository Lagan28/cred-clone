import React from 'react';

import HeroSection from "../components/HeroSection";
import Header from "../components/common/header";
import ProductShowcase from "../components/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial";
import Experience from "../components/Experience";
import CredSecurity from "../components/CredSecurity";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShowcase />
            <FeelSpecial />
            <Experience />
            <CredSecurity />
        </>
    );
}

export default HomePage;