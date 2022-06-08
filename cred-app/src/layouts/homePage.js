import React from 'react';

import HeroSection from "../components/HeroSection";
import Header from "../components/common/header";
import ProductShowcase from "../components/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial";
import Experience from "../components/Experience";
import CredSecurity from "../components/CredSecurity";
import BrandsBanner from "../components/BrandsBanner";
import WindowPeak from "../components/WindowPeek";
import MobileScroll from "../components/MobileScroll";
import Story from "../components/Story";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShowcase />
            <FeelSpecial />
            <BrandsBanner />
            <Experience />
            <MobileScroll />
            <div className="non-mobile">
                <WindowPeak />
            </div>
            <CredSecurity />
            <Story />
        </>
    );
}

export default HomePage;