import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarData from "../assets/data/carData";
import BookingForm from "../components/BookingForm";
import PaymentSection from "../components/PaymentSection";
import Helmet from "../Helmet";
import "../styles/CarDetail.css";

const CarDetail = () => {
    const { name } = useParams();
    const [data, setData] = useState("");
    useEffect(() => {
        setData(CarData.find(d => d.carName === name));
    }, []);

    return (
        <Helmet title={name}>
            <div className="car-detail">
                <div className="car-row">
                    <div className="car-img">
                        <img src={data.imgUrl} alt={data.carName} />
                    </div>
                    <div className="car-data">
                        <h1>{data.carName}</h1>
                        <div className="price-rating">
                            <div className="price">{`$${data.price}.00 / Day`}</div>
                            <div className="rating">
                                <span style={{ color: "#f9a826" }}>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                </span>
                                ({data.rating} ratings)
                            </div>
                        </div>
                        <p>{data.description}</p>
                        <div className="specification">
                            <div>
                                <span>
                                    <i class="ri-police-car-line"></i>
                                    {data.model}
                                </span>
                                <span>
                                    <i class="ri-settings-2-line"></i>
                                    {data.automatic}
                                </span>
                                <span>
                                    <i class="ri-timer-flash-line"></i>
                                    {data.speed}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i class="ri-map-pin-line"></i>
                                    {data.gps}
                                </span>
                                <span>
                                    <i class="ri-wheelchair-line"></i>
                                    {data.seatType}
                                </span>
                                <span>
                                    <i class="ri-building-2-line"></i>
                                    {data.brand}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car-row mt-70">
                    <BookingForm />
                    <PaymentSection />
                </div>
            </div>
        </Helmet>
    );
};

export default CarDetail;
