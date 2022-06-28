import React from "react";
import imgSmallReactLogo from "../images/reactjs-icon.png";

export default function NavBar() {
  return (
    <nav>
      <img src={imgSmallReactLogo} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacs</h3>
      <h4 className="nav--title">React Couse - Project 1</h4>
    </nav>
  );
}
