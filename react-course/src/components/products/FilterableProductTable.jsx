import React from "react";
import "./FilterableProductTable.css";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInLeft } from "react-animations";

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const FadeInTD = styled.td`
      animation: 2s ${keyframes`${fadeIn}`};
    `;

    const FadeInLeftTR = styled.tr`
      animation: 2s ${keyframes`${fadeInLeft}`};
    `;

    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <FadeInLeftTR>
        <FadeInTD>{name}</FadeInTD>
        <FadeInTD>{product.price}</FadeInTD>
      </FadeInLeftTR>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleFilterTextChange}
          value={this.props.filterText}
          type="text"
          placeholder="Search..."
        />
        <p>
          <input
            onChange={this.handleInStockChange}
            checked={this.props.inStockOnly}
            type="checkbox"
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default class extends React.Component {
  state = {
    filterText: "",
    inStockOnly: false,
  };

  handleFilterTextChange = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleInStockChange = (inStockOnly) => {
    this.setState({ inStockOnly: inStockOnly });
  };

  render() {
    return (
      <div>
        <SearchBar
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        />
      </div>
    );
  }
}
