import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection.jsx";
import FeaturesSection from "./components/Features.jsx";
import DeviceSection from "./components/DeviceSection.jsx";
import CustomSection from "./components/CustomSection.jsx";


const App = () => {
    return (
        <>
            <Header />
            <HeroSection/>
            <FeaturesSection/>
            <DeviceSection />
            <CustomSection />
        </>
    );
};

export default App;
