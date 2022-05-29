import React, { useContext, useEffect } from "react";
import { Link, useHistory, } from "react-router-dom";
import { ContextProvider } from "../context";
// import { useHistory } from "react-router-dom";
import "./Bloglist.css";

const BlogLists = () => {
  const { blogs, setBlogs } = useContext(ContextProvider);
  const history = useHistory()
  useEffect(() => {
    console.log(blogs);
    console.log(blogs);
  }, [blogs]);
 

  const redirectToDetails=(id)=>{
    history.push(`/details/${id}`);
    window.location.reload()
  }
  return (
    <div className='main'>
      <div className='top'>
        <button type='button' className='newPost'>
          New Post
        </button>
      </div>
      <div className='bottom'>
        {blogs.map((list, index) => (
          // <Link to={`/details/${index}`}>
          <button className='list' onClick={() => redirectToDetails(index)}>
            {list.title}
          </button>
        // </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogLists;
