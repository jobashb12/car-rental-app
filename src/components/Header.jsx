import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top-row">
                    <div className="header-top-left">
                        <span>Need Help?</span>
                        <div className="header-top-help">
                            <i class="ri-phone-fill"></i> +1-202-555-0149
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="header-top-login">
                            <i class="ri-login-circle-line"></i> Login
                        </div>
                        <div className="header-top-register">
                            <i class="ri-user-line"></i> Register
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-center">
                <div className="header-center-row">
                    <div className="header-center-left">
                        <div className="header-center-logo">
                            <i class="ri-car-line"></i>
                            <h1>
                                <Link to="/home">Rent Car Service</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="header-center-right">
                        <div className="header-center-country">
                            <i class="ri-earth-line"></i>
                            <div className="country">
                                <h3>Bangladesh</h3>
                                <p>Sylhet City, Bangladesh</p>
                            </div>
                        </div>
                        <div className="header-center-time">
                            <i class="ri-time-line"></i>
                            <div className="country">
                                <h3>Sunday to Friday</h3>
                                <p>10am - 7pm</p>
                            </div>
                        </div>
                        <button className="header-center-call">
                            <Link to="/contact">
                                <i class="ri-phone-line"></i>
                                Request a call
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="navigation">
                <div className="mobile-icon">
                    <i class="ri-menu-line" onClick={() => setMenu(!menu)}></i>
                </div>
                <nav
                    className={`${menu && "mobile-nav"}`}
                    onClick={() => setMenu(false)}
                >
                    <ul className={`navbar ${menu && "mobile-navbar"}`}>
                        <li>
                            <NavLink
                                to="/home"
                                className={navClass =>
                                    navClass.isActive ? "active " : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={navClass =>
                                    navClass.isActive ? "active" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/car"
                                className={navClass =>
                                    navClass.isActive ? "active" : ""
                                }
                            >
                                Cars
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={navClass =>
                                    navClass.isActive ? "active" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={navClass =>
                                    navClass.isActive ? "active" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-search">
                        <input type="text" placeholder="Search" />
                        <i class="ri-search-line"></i>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
