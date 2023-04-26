import React from "react";

const Helmet = props => {
    document.title = "Rent Car Service - " + props.title;
    return <>{props.children}</>;
};

export default Helmet;
