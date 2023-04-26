import React from "react";
import Ava1 from "../assets/images/ava-1.jpg";
import "../styles/CommentSection.css";

const CommentSection = () => {
    return (
        <div className="comment-section">
            <h3>3 Comments</h3>
            <div className="comment">
                <img className="avatar" src={Ava1} alt="Ava1" />
                <div className="comment-data">
                    <h4 className="name">David Visa</h4>
                    <h4 className="date">14 July, 2022</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos nobis totam eius laborum molestias itaque minima
                        distinctio, quae velit tempore!
                    </p>
                    <div className="rply">
                        <i class="ri-reply-line"></i>
                        Reply
                    </div>
                </div>
            </div>
            <div className="comment-body">
                <h3>Leave a Comment</h3>
                <p>You must sign-in to make or comment a post</p>
                <form>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                    />
                    <textarea
                        className="form-control"
                        placeholder="Comment..."
                    ></textarea>
                    <button>Post a Comment</button>
                </form>
            </div>
        </div>
    );
};

export default CommentSection;
