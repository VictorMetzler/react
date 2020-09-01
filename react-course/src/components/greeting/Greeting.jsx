import React from "react";

export default class extends React.Component {

  UserGreeting = () => {
    return <h1>Welcome back!</h1>;
  };

  GhestGreeting = () => {
    return <h1>Please sing up.</h1>;
  };

  Greeting = () => {
    if (this.props.isLoggedIn) {
      return this.UserGreeting();
    }
    return this.GhestGreeting();
  };

  render() {
    return this.Greeting();
  }
}
