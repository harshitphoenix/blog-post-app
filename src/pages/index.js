import { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";
import AddPost from "../component/AddPost";
import BlogDetail from "../component/BlogDetail";
import BlogLists from "../component/BlogList";
/**
 *  Return the Main application with all the routes and pages
 */
const Main = () => {
  <Router>
   <Switch>
       <Route exact path={'/'} component={BlogLists}/>
       <Route exact path={'/details/:id'} component={BlogDetail}/>
       <Route exact path={'/new-post'} component={AddPost}/>
       <Route exact path={'/edit/:id'} component={AddPost}/>
   </Switch>
  </Router>;
};

export default Main;
