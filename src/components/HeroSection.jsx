import React from "react";
import HeroSlider from "./HeroSlider";
import "../styles/HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-main">
            <HeroSlider />
            <div className="hero-form">
                <div className="hero-form-left">Find your best car here</div>
                <div className="hero-form-right">
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="From address"
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="To address"
                        />
                        <input type="date" className="form-control address" />
                        <input
                            type="time"
                            className="form-control address time"
                        />
                        <select className="form-control">
                            <option value="ac">AC Car</option>
                            <option value="non-ac">Non AC Car</option>
                        </select>
                        <button className="form-control">Find Car</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
