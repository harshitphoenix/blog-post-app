import React, { useState } from "react";
import "./AddPost.css";

function AddPost() {
  const [data, setData] = useState({});
  const onchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div className="main-add-post">
      <div className="navbar-back">
        <p>back to Index</p>
      </div>

      <div className="inner-add-post-form">
        <div className="child-add-post-form">
          <form action="">
            <div className="inputFields">
              <label>Title</label>
              <input
                type="text"
                autoComplete="off"
                name="Title"
                id="title"
                onChange={onchange}
              />
            </div>
            <div className="inputFields">
              <label>Categories</label>
              <input
                type="text"
                autoComplete="off"
                name="Categories"
                id="categories"
                onChange={onchange}
              />
            </div>
            <div className="inputFields">
              <label>Content</label>
              <textarea
                type="text"
                autoComplete="off"
                name="Content"
                id="content"
                onChange={onchange}
              />
            </div>
          </form>
          <div className="addPost-cancel-buttons">
            <button className="submit-form" onClick={onSubmit}>
              Submit
            </button>
            <button className="cancel-form">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;