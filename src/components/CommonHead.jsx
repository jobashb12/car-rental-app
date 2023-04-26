import React from "react";
import "../styles/CommonHead.css";

const CommonHead = ({ heading, title }) => {
    return (
        <div className="common-head">
            <p>{heading}</p>
            <h3>{title}</h3>
        </div>
    );
};

export default CommonHead;
