import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../context";
// import { useHistory } from "react-router-dom";
import "./Bloglist.css";

const BlogLists = () => {
  const {blogs} = useContext(ContextProvider)
//   const navigate = useNavigate()
  return(
    <div className="main" >
      <div className="top" >
        <button type="button" className="newPost">New Post</button> 
      </div>
      <div className="bottom">
        {blogs.map((list) => (
            // <Link to="/">
          <button className="list" 
        
          >{list.title}</button>
        //   </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogLists;