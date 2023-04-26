import React from "react";
import { Link } from "react-router-dom";

const CarSection = ({
    id,
    imgUrl,
    brand,
    price,
    model,
    automatic,
    speed,
    carName,
}) => {
    return (
        <div className="offer-card" key={id}>
            <div className="card-img">
                <img src={imgUrl} alt={brand} />
            </div>
            <h4 className="card-title">{carName}</h4>
            <div className="per-day">{`$${price}.00 / Day`}</div>
            <div className="car-specification">
                <div className="specification">
                    <i class="ri-car-line"></i>
                    {model}
                </div>
                <div className="specification">
                    <i class="ri-settings-2-line"></i>
                    {automatic}
                </div>
                <div className="specification">
                    <i class="ri-timer-flash-line"></i>
                    {speed}
                </div>
            </div>
            <div className="offer-btn">
                <button className="rent">
                    <Link to={"/car/" + carName}>Rent</Link>
                </button>
                <button className="details">Details</button>
            </div>
        </div>
    );
};

export default CarSection;
