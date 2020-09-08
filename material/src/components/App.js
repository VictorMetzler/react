import React from "react";
import { Header, Footer } from './layouts';
import Exercises from './exercises';

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
          <Exercises />
        <Footer />
      </React.Fragment>
    );
  }
}
