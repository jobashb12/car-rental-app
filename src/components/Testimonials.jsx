import React from "react";
import CommonHead from "../components/CommonHead";
import Ava1 from "../assets/images/ava-1.jpg";
import Ava2 from "../assets/images/ava-2.jpg";
import Ava3 from "../assets/images/ava-3.jpg";
import Ava4 from "../assets/images/ava-4.jpg";
import Slider from "react-slick";
import "../styles/Testimonials.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonial-main">
            <CommonHead heading="Our clients says" title="Testimonials" />
            <div className="testimonial">
                <Slider {...settings}>
                    <div className="testimonial-card">
                        <p className="testimonial-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum
                            minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="testimonial-detail">
                            <div className="testimonial-img">
                                <img src={Ava1} alt="Ava1" />
                            </div>
                            <div className="detail">
                                <h3>Jhon Doe</h3>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum
                            minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="testimonial-detail">
                            <div className="testimonial-img">
                                <img src={Ava2} alt="Ava2" />
                            </div>
                            <div className="detail">
                                <h3>Jhon Doe</h3>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum
                            minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="testimonial-detail">
                            <div className="testimonial-img">
                                <img src={Ava3} alt="Ava3" />
                            </div>
                            <div className="detail">
                                <h3>Jhon Doe</h3>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum
                            minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="testimonial-detail">
                            <div className="testimonial-img">
                                <img src={Ava4} alt="Ava4" />
                            </div>
                            <div className="detail">
                                <h3>Jhon Doe</h3>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
