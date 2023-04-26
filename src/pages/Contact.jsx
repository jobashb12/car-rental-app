import React from "react";
import CommonSection from "../components/CommonSection";
import Helmet from "../Helmet";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <Helmet title="Contact">
            <div className="contact">
                <CommonSection title="Contact" />
                <div className="contact-row">
                    <div className="contact-form">
                        <h3>Get In Touch</h3>
                        <form>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Your Name"
                            />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email"
                            />
                            <textarea
                                className="form-control"
                                placeholder="Message"
                            ></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="address">
                            123 ZindaBazar, Sylhet, Bangladesh
                        </div>
                        <div className="phone">
                            <span>Phone:</span>
                            +88683896366
                        </div>
                        <div className="email">
                            <span>Email:</span>
                            example@gmail.com
                        </div>
                        <div className="social">
                            <h3>Follow Us</h3>
                            <div className="icon">
                                <i class="ri-facebook-line"></i>
                                <i class="ri-instagram-line"></i>
                                <i class="ri-linkedin-line"></i>
                                <i class="ri-twitter-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Contact;
