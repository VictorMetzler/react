import React, { Component, useState } from "react";
import { render } from "@testing-library/react";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

export default class extends Component {
  state = {
    showWarning: true,
  };

  handleToggleClick = () => {
    this.setState({ showWarning: !this.state.showWarning });
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
