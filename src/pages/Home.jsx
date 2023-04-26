import React from "react";
import PopularService from "../components/PopularService";
import AboutSection from "../components/AboutSection";
import BecomeDriver from "../components/BecomeDriver";
import HeroSection from "../components/HeroSection";
import HotOffer from "../components/HotOffer";
import "../styles/Home.css";
import Testimonials from "../components/Testimonials";
import CommonBlog from "../components/CommonBlog";
import Helmet from "../Helmet";

const Home = () => {
    return (
        <Helmet title="Home">
            <div className="home-main">
                <HeroSection />
                <AboutSection />
                <PopularService />
                <HotOffer item={true} />
                <BecomeDriver />
                <Testimonials />
                <CommonBlog />
            </div>
        </Helmet>
    );
};

export default Home;
