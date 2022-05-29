import React, { useContext, useState } from "react";
import { ContextProvider } from "../context";
import {useParams, useHistory} from 'react-router-dom'
import "./BlogDetail.css";
/**
 * takes id from params 
 * @returns 
 */
const BlogDetail = () => {
  const {id }= useParams();
  const [like, setLike] = useState(0);
  const { blogs, setBlogs } = useContext(ContextProvider);
  const [blog, setBlog]= useState(blogs[id])
  const history = useHistory()
   /**
    * toggle the like added by the user
    */
  const toggleLike = () => {
    setLike(!like);
  };
  /**
   * 
   * @param {*} i - id of the post
   */
  const deletePost = () => {
    const tempArray = [...blogs];
    tempArray.splice(id, 1)// remove required blog post from array
    setBlogs(tempArray); // assign the changed array as new state
    history.push("/");
    window.location.reload()
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
              {blog.likes + like} Like
            </button>
            <button className='btn edit' onClick={()=>{
              history.push(`/edit/${id}`);
              window.location.reload()
            }}>Edit</button>
            <button className='btn delete' onClick={()=>deletePost()}>Delete</button>
          </div>
        </div>
        <div className='content'>
          <div className='post'>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
