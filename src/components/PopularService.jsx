import React from "react";
import ServiceData from "../assets/data/serviceData";
import "../styles/PopularService.css";
import CommonHead from "./CommonHead";

const popularService = () => {
    return (
        <div className="popular-service">
            <CommonHead heading="See our" title="Popular Services" />
            <div className="service-body">
                {ServiceData.map(d => {
                    return (
                        <div className="service-card" key={d.id}>
                            <div className="service-icon">
                                <i className={d.icon}></i>
                            </div>
                            <h4 className="service-title">{d.title}</h4>
                            <p className="service-description">{d.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default popularService;
