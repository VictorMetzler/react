import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state, when initialize
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState !!!!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says, we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>this.state.errorMessage</div>
    }

    if (!this.state.errorMessage)
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
