import React from "react";
import Greeting from "../../components/greeting/Greeting";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
};

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
};

export default class extends React.Component {
  state = {
    isLoggedIn: false,
  };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
