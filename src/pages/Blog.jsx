import React from "react";
import CommonSection from "../components/CommonSection";
import CommonBlog from "../components/CommonBlog";
import Helmet from "../Helmet";
const Blog = () => {
    return (
        <Helmet title="Blog">
            <div>
                <CommonSection title="Blogs" />
                <CommonBlog />
                <div style={{ marginBottom: "-30px" }}></div>
                <CommonBlog />
            </div>
        </Helmet>
    );
};

export default Blog;
