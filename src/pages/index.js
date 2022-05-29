import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import AddPost from "../component/AddPost";
import EditPost from "../component/EditPost";
import BlogDetail from "../component/BlogDetail";
import BlogLists from "../component/BlogList";
/**
 *  Return the Main application with all the routes and pages
 */
const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={BlogLists} />
        <Route  path={"/details/:id"} component={BlogDetail} />
        <Route exact path={"/new-post"} component={AddPost} />
        <Route path={"/edit/:id"} component={EditPost} />
      </Switch>
    </Router>
  );
};

export default Main;
