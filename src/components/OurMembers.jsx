import React from "react";
import CommonHead from "./CommonHead";
import MemberData from "../assets/data/memberData";
import "../styles/OurMembers.css";

const OurMembers = () => {
    return (
        <div className="members-main">
            <CommonHead heading="Experts" title="Our Members" />
            <div className="members-cards">
                {MemberData.map(d => {
                    return (
                        <div className="member-card" key={d.id}>
                            <div className="member-img">
                                <img src={d.imgUrl} alt={d.name} />
                                <div className="img-cover">
                                    <span>
                                        <i class="ri-facebook-line"></i>
                                    </span>
                                    <span>
                                        <i class="ri-twitter-line"></i>
                                    </span>
                                    <span>
                                        <i class="ri-linkedin-line"></i>
                                    </span>
                                    <span>
                                        <i class="ri-instagram-line"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="member-data">
                                <h3>{d.name}</h3>
                                <p>{`${d.experience} years of experience`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OurMembers;
