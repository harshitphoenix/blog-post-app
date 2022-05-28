import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../context";
// import { useHistory } from "react-router-dom";
import "./Bloglist.css";

const BlogLists = () => {
  const { blogs, setBlogs } = useContext(ContextProvider);
  //   const navigate = useNavigate()
  useEffect(() => {
    console.log(blogs);
    console.log(blogs);
  }, [blogs]);
  const deletePost = (i) => {
    const tempArray = [...blogs];
    console.log(i,'$$$')
    tempArray.splice(i, 1)// remove required blog post from array
    setBlogs(tempArray); // assign the changed array as new state
  };
  return (
    <div className='main'>
      <div className='top'>
        <button type='button' className='newPost'>
          New Post
        </button>
      </div>
      <div className='bottom'>
        {blogs.map((list, index) => (
          // <Link to="/">
          <button className='list' onClick={() => deletePost(index)}>
            {list.title}
          </button>
          //   </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogLists;
