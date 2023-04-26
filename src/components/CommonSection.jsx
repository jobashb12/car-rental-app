import React from "react";
import "../styles/CommonSection.css";

const CommonSection = ({ title }) => {
    return (
        <div className="common-section">
            <h3>{title}</h3>
        </div>
    );
};

export default CommonSection;
