import React from "react";

export default class extends React.Component {

  state = {    
    isToggleOn: true
  }

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
