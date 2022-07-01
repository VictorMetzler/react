import React, { useState } from "react";
import Label from "./components/Label";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementaNumero = () => {
    setCount(count + 1);
  };

  const decrementaNumero = () => {
    setCount(count - 1);
  };

  return (
    <div>
      Valor de count:
      <Label contagem={count} />
      <button onClick={incrementaNumero}>Incrementar</button>
      <button onClick={decrementaNumero}>Incrementar</button>
    </div>
  );
};

export default App;
