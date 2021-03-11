import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from './view/Home'
import Contents from './view/Project'
class App extends Component {

  render() {
      return (
        <>
          <Header/>
          <Contents/>
        </>
      )
  }

}

export default App;
