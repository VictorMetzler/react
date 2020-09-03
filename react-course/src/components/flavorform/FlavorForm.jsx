/*
Nota
Você pode passar um array para o atributo value,
permitindo que você selecione várias opções em
uma tag select:
<select multiple={true} value={['B', 'C']}>
*/

import React from "react";

export default class extends React.Component {
  state = {
    value: 3,
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
            <option value="0">laranja</option>
            <option value="1">limao</option>
            <option value="2">coco</option>
            <option value="3">manga</option>
          </select>
        </label>
      </form>
    );
  }
}
