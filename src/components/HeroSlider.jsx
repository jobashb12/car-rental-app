import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 3000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <>
            <Slider {...settings} className="slider">
                <div className="hero-slider1">
                    <div className="slider-content">
                        <p>For Rent $70 Per Day</p>
                        <h2>Reserver Now And Get 50% Off</h2>
                        <button>
                            <Link to="/car">Reserve Now</Link>
                        </button>
                    </div>
                </div>
                <div className="hero-slider2">
                    <div className="slider-content">
                        <p>For Rent $70 Per Day</p>
                        <h2>Reserver Now And Get 50% Off</h2>
                        <button>
                            <Link to="/car">Reserve Now</Link>
                        </button>
                    </div>
                </div>
                <div className="hero-slider3">
                    <div className="slider-content">
                        <p>For Rent $70 Per Day</p>
                        <h2>Reserver Now And Get 50% Off</h2>
                        <button>
                            <Link to="/car">Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default HeroSlider;
