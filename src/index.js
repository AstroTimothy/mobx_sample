import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./views/Home.js";
import Project from "./views/Project.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="localhost:3000/" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route 
        path="localhost:3000/home" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route
        path="localhost:3000/project"
        exact
        render={props => <Project {...props} />}
      />
      <Redirect to="localhost:3000/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);