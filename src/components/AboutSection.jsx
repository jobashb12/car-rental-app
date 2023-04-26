import React from "react";
import Bmw from "../assets/images/cars-img/bmw-offer.png";
import "../styles/AboutSection.css";

const AboutSection = () => {
    return (
        <div className="about-section">
            <h3 className="head">About Us</h3>
            <div className="about-body">
                <div className="about-left">
                    <h3>Welcome to car rent service</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatum blanditiis esse accusantium dignissimos
                        labore laborum. Veniam, corporis mollitia temporibus, in
                        quaerat vero deleniti amet dolorem repudiandae, pariatur
                        nam dolore! Impedit neque sit ad temporibus quam
                        similique dolor ipsam praesentium sunt.
                    </p>
                    <div className="about-description">
                        <div className="description">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum
                            dolor sit amet.
                        </div>
                        <div className="description">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum
                            dolor sit amet.
                        </div>
                        <div className="description">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum
                            dolor sit amet.
                        </div>
                        <div className="description">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum
                            dolor sit amet.
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <img src={Bmw} />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
