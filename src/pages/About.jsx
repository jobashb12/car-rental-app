import React from "react";
import AboutSection from "../components/AboutSection";
import CommonSection from "../components/CommonSection";
import Drive from "../assets/images/drive.jpg";
import "../styles/About.css";
import BecomeDriver from "../components/BecomeDriver";
import OurMembers from "../components/OurMembers";
import Helmet from "../Helmet";

const About = () => {
    return (
        <Helmet title="About">
            <div className="about-main">
                <CommonSection title="About Us" />
                <AboutSection />

                <div className="safe-ride">
                    <div className="ride-left">
                        <img src={Drive} alt="Drive" />
                    </div>
                    <div className="ride-right">
                        <h1>We Are Committed To Provide Safe Ride Solutions</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eveniet veniam assumenda aperiam accusantium
                            ex autem perferendis repellendus nostrum delectus.
                            Nemo et dolore est tempore rem minima adipisci magni
                            dolorum ipsam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eveniet veniam assumenda aperiam accusantium
                            ex autem perferendis repellendus nostrum delectus.
                            Nemo et dolore est tempore rem minima adipisci magni
                            dolorum ipsam.
                        </p>
                        <div className="ride-help">
                            <i class="ri-phone-line"></i>
                            <div className="help">
                                <h3>Need Any Help?</h3>
                                <p>+00123456789</p>
                            </div>
                        </div>
                    </div>
                </div>

                <BecomeDriver />
                <OurMembers />
            </div>
        </Helmet>
    );
};

export default About;
