import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import Blog1 from "../assets/images/blog-img/blog-1.jpg";
import Blog2 from "../assets/images/blog-img/blog-2.jpg";
import Blog3 from "../assets/images/blog-img/blog-3.jpg";
import blogData from "../assets/data/blogData";
import "../styles/BlogDetail.css";
import Helmet from "../Helmet";

const BlogDetail = () => {
    const { title } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        let [Data] = blogData.filter(blog => blog.title === title);
        setData({ ...Data });
    }, []);

    return (
        <Helmet title={title}>
            <div className="blog-detail">
                <div className="blog-detail-left">
                    <div className="blog-left-img">
                        <img src={data.imgUrl} alt="BlogImage" />
                    </div>
                    <div className="blog-body">
                        <h1>{data.title}</h1>
                        <div className="body-detail">
                            <span className="author">
                                <i class="ri-user-line"></i>
                                <span>{data.author}</span>
                            </span>
                            <span className="date">
                                <i class="ri-calendar-2-fill"></i>
                                <span>{data.date}</span>
                            </span>
                            <span className="time">
                                <i class="ri-time-line"></i>
                                <span>{data.time}</span>
                            </span>
                        </div>
                        <p className="description">{data.description}</p>
                        <h4 className="quote">{data.quote}</h4>
                        <p className="description">{data.description}</p>
                    </div>
                    {/* --------- CommentSection ----------- */}
                    <CommentSection />
                </div>
                <div className="blog-detail-right">
                    <h3>Recent Posts</h3>
                    <div className="blog-right-list">
                        <div className="blog">
                            <div className="blog-img">
                                <img src={Blog1} alt="BlogImg" />
                            </div>
                            <h3>{blogData[0].title}</h3>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src={Blog2} alt="BlogImg" />
                            </div>
                            <h3>{blogData[1].title}</h3>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src={Blog3} alt="BlogImg" />
                            </div>
                            <h3>{blogData[2].title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default BlogDetail;
