import React from 'react';

export default class extends React.Components {
  state = {
    value:
      "Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Uma dissertação foi enviada: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dissertação:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Evnair" />
      </form>
    );
  }
}
