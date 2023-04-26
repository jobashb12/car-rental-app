import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-row">
                <div className="footer-logo">
                    <div className="logo">
                        <i class="ri-car-line"></i>
                        <h1>Rent Car Service</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur, distinctio, itaque reiciendis ab
                        cupiditate harum ex quam veniam, omnis expedita animi
                        quibusdam obcaecati mollitia? Delectus et ad illo
                        recusandae temporibus?
                    </p>
                </div>
                <div className="quick-link">
                    <h3>Quick Links</h3>
                    <ul className="footer-nav">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/car">Car Listing</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="head-office">
                    <h3>Head Office</h3>
                    <ul className="office-list">
                        <li>123 Zindabazar, Sylhet, Bangladesh</li>
                        <li>Phone: +0995345875365</li>
                        <li>Email: muhib5532@gmail.com</li>
                        <li>Office Time: 10am - 7pm</li>
                    </ul>
                </div>
                <div className="news-letter">
                    <h3>Newsletter</h3>
                    <div className="news-body">
                        <p>Subscribe our newsletter</p>
                        <div className="news-input">
                            <input type="text" placeholder="Email" />
                            <i class="ri-send-plane-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p>
                    <i class="ri-copyright-line"></i>
                    Copyright {new Date().getFullYear()}, Developed by Jobash
                    Butt. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
