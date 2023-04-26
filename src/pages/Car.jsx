import React, { useState } from "react";
import "../styles/Car.css";
import CommonSection from "../components/CommonSection";
import HotOffer from "../components/HotOffer";
import Helmet from "../Helmet";

const Car = () => {
    const [select, setSelect] = useState(false);
    const selectOption = e => {
        let check = e.target.value;
        if (check === "low") setSelect(false);
        else setSelect(true);
    };
    return (
        <Helmet title="Car">
            <div className="car-section">
                <CommonSection title="Car Listing" />
                <div className="car-sort">
                    {select ? (
                        <i class="ri-sort-desc"></i>
                    ) : (
                        <i class="ri-sort-asc"></i>
                    )}
                    Sort By
                    <select onChange={selectOption}>
                        <option value="select">Select</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                </div>
                <HotOffer item={false} select={select} />
            </div>
        </Helmet>
    );
};

export default Car;
