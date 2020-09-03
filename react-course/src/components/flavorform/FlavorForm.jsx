import React from "react";

export default class extends React.Component {
  state = {
    value: "coco",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Seu sabor favorito é: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Escolha seu sabor favorito:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="laranja">Laranja</option>
            <option value="limao">Laranja</option>
            <option value="coco">Laranja</option>
            <option value="manga">Laranja</option>
          </select>
        </label>
      </form>
    );
  }
}