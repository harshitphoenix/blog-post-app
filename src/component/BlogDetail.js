import React, { useContext, useState } from "react";
import { ContextProvider } from "../context";
import "./BlogDetail.css";
const BlogDetail = () => {
  const [like, setLike] = useState(0);
  const { blogs } = useContext(ContextProvider);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <>
      <div className='blog-container'>
        <div className='header'>
          <div className='left-content'>
            <a href='#'>Back to index</a>
          </div>
          <div className='right-content'>
            <button className='btn like' onClick={toggleLike}>
              {blogs[0].likes + like} Like
            </button>
            <button className='btn edit'>Edit</button>
            <button className='btn delete'>Delete</button>
          </div>
        </div>
        <div className='content'>
          <div className='post'>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
             {blogs[0].content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
