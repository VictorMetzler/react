import React from "react";

function Fancyborder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Fancyborder color="blue">
      <h1 className="Dialog-title">Bem-vindo</h1>
      <p className="Dialog-message">Obrigado por visitar a nossa espaçonave</p>
    </Fancyborder>
  );
}

export default class extends React.Component {
  render() {
    return <WelcomeDialog />;
  }
}
