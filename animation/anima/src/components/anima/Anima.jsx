import React from "react";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const Bounce = styled.h1`
  animation: 2s ${keyframes`${bounce}`} infinite;
  display: inline-block;
  position: relative;
  width: 150px;
  border: 1px dotted red;  
`;

export default class extends React.Component {
  render() {
    return <Bounce>Hello World!</Bounce>;
  }
}
