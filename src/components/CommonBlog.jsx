import React from "react";
import { Link, useLocation } from "react-router-dom";
import CommonHead from "../components/CommonHead";
import BlogData from "../assets/data/blogData";
import "../styles/CommonBlog.css";

const CommonBlog = () => {
    const location = useLocation();
    return (
        <div className="common-blog">
            {location.pathname === "/home" && (
                <CommonHead heading="Explore our blogs" title="Latest Blogs" />
            )}
            <div className="common-blog-row">
                {BlogData.map(d => {
                    return (
                        <div className="common-blog-card" key={d.id}>
                            <div className="common-blog-img">
                                <img src={d.imgUrl} alt="blog-img" />
                            </div>
                            <div className="common-blog-body">
                                <h4>
                                    <Link to={"/blog/" + d.title}>
                                        {d.title}
                                    </Link>
                                </h4>
                                <p>{d.description.substr(0, 100)}</p>
                                <Link to={"/blog/" + d.title}>Read More</Link>
                                <div className="common-blog-footer">
                                    <div className="footer-left">
                                        <i class="ri-user-line"></i>
                                        {d.author}
                                    </div>
                                    <div className="footer-right">
                                        <div className="date">
                                            <i class="ri-calendar-2-fill"></i>
                                            {d.date}
                                        </div>
                                        <div className="time">
                                            <i class="ri-time-line"></i>
                                            {d.time}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CommonBlog;
