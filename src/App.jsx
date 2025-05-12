import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection.jsx";
import FeaturesSection from "./components/Features.jsx";
import DeviceSection from "./components/DeviceSection.jsx";
import CustomSection from "./components/CustomSection.jsx";
import TestimonialsSlider from "./components/TestimonialsSlider.jsx";
import PricingPlans from "./components/PricingPlans.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <Header />
            <div id="home">
                <HeroSection />
            </div>
            <div id="features">
                <FeaturesSection />
            </div>
            <div id="about" >
                <DeviceSection />
                <CustomSection />
            </div>
            <div id="testimonials">
                <TestimonialsSlider />
            </div>
            <div id="pricing">
                <PricingPlans/>
            </div>
            <div id="contact">
                <ContactUs/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </>
    );
};

export default App;
