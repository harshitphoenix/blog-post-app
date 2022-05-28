import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context";
import "./AddPost.css";

function AddPost() {
  const [data, setData] = useState({});
  const { setBlogs, blogs } = useContext(ContextProvider);
  const onchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {
    console.log(blogs);
    console.log(blogs);
  }, [blogs]);

  const onSubmit = () => {
    setBlogs([...blogs, data]);
  };
  return (
    <div className='main-add-post'>
      <div className='navbar-back'>
        <p>back to Index</p>
      </div>

      <div className='inner-add-post-form'>
        <div className='child-add-post-form'>
          <form action=''>
            <div className='inputFields'>
              <label>Title</label>
              <input
                type='text'
                autoComplete='off'
                name='title'
                id='title'
                onChange={onchange}
              />
            </div>
            <div className='inputFields'>
              <label>Categories</label>
              <input
                type='text'
                autoComplete='off'
                name='categories'
                id='categories'
                onChange={onchange}
              />
            </div>
            <div className='inputFields'>
              <label>Content</label>
              <textarea
                type='text'
                autoComplete='off'
                name='content'
                id='content'
                onChange={onchange}
              />
            </div>
          </form>
          <div className='addPost-cancel-buttons'>
            <button className='submit-form' onClick={onSubmit}>
              Submit
            </button>
            <button className='cancel-form'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
