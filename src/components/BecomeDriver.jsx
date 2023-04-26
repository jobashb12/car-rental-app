import React from "react";
import ToyotaOffer2 from "../assets/images/cars-img/toyota-offer-2.png";
import "../styles/BecomeDriver.css";

const BecomeDriver = () => {
    return (
        <div className="driver-main">
            <div className="become-driver">
                <div className="driver-left">
                    <img src={ToyotaOffer2} alt="ToyotaOffer2" />
                </div>
                <div className="driver-right">
                    <h1>Do You Want to Earn With Us? So Don't Be Late</h1>
                    <button>Become a Driver</button>
                </div>
            </div>
        </div>
    );
};

export default BecomeDriver;
