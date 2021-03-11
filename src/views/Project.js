import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import Contents from '../components/Contents';

class Project extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contents />
      </Fragment>
    )
  };
}

export default Project;