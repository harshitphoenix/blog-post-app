import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPost from "../component/AddPost";
import BlogLists from "../component/BlogList";
/**
 *  Return the Main application with all the routes and pages
 */
const Main = () => {
  <Router>
    <Routes>
      <Route exact path='/' element={<AddPost />} />
      <Route exact path='/edit' element={<AddPost />} />
      <Route exact path='/detail' element={<AddPost />} />
      <Route exact path='/new' element={<AddPost />} />
    </Routes>
  </Router>;
};

export default Main;
