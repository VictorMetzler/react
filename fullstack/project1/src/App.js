import React, { useState } from "react";

/*
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      {right}
      <Button handleClick={handleRightClick} text="right" />
      <History allClicks={allClicks} />
    </div>
  );
};
*/

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [allSelected, setAllSelected] = useState([]);
  const [selected, setSelected] = useState(0);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getNextNumber = () => {
    let number = randomIntFromInterval(0, anecdotes.length - 1);

    const anecdoteAppered = () => {
      for (let i = 0; i < allSelected.length; i++) {
        if (allSelected[i] === number) {
          return true;
        }
      }

      return false;
    };

    while (anecdoteAppered() === true) {
      number = randomIntFromInterval(0, anecdotes.length - 1);
    }

    setSelected(number);
    setAllSelected(allSelected.concat(number));

    return number;
  };

  const showNextAnecdote = () => {
    getNextNumber();

    if (allSelected.length === anecdotes.length) {
      document.getElementById("btnNextAnecdote").setAttribute("disabled", true);
    }

    let div = document.createElement("p");
    div.textContent = anecdotes[selected];

    document.getElementById("anecdotes").appendChild(div);
  };

  return (
    <>
      <div id="anecdotes"></div>
      <button
        id="btnNextAnecdote"
        onClick={() => {
          showNextAnecdote();
        }}
      >
        next anecdote
      </button>
    </>
  );
};

export default App;
