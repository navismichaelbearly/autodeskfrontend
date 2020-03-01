import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "../components/Home";
import Cards from "../components/Cards";
import Dev from "../components/Dev";
import Api from "../components/Api";
import Intro from "../components/Intro";
import { Redirect } from 'react-router';
import { DefaultRoute } from 'react-router';

export default (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/developer/documentation" />
      <Route path="/developer/documentation" exact component={Cards} />
      <Route path="/developer/en/api/:type?/intro" exact component={Intro} />
      <Route path="/developer/en/api/:type?/guide" exact component={Dev} /> 
      <Route path="/developer/en/api/:type?/reference" exact component={Api} />
    </Switch>
  </Router>
);
