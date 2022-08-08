import React, { useState } from "react";

const Title = () => {
  return <h1>give feedback</h1>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ width: "30%" }}>{text}</td>
      <td style={{ width: "70%" }}> {value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, sum, all }) => {
  if (all.length === 0) {
    return <p>No feedback givin</p>;
  } else {
    return (
      <table border="1" style={{ width: "300px" }}>
        <thead>
          <tr>
            <th colSpan={2}>statistics</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={sum} />
          <StatisticsLine
            text="Avarage"
            value={
              all.reduce(
                (valorPrevio, proxValor) => valorPrevio + proxValor,
                0
              ) / all.length
            }
          />
          <StatisticsLine text="All" value={good / (all.length / 100) + "%"} />
        </tbody>
      </table>
    );
  }
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [sum, setSum] = useState(0);
  const [all, setAll] = useState([]);

  const handleClick = (who) => {
    const click = () => {
      setSum(sum + 1);

      switch (who) {
        case "good":
          setGood(good + 1);
          setAll(all.concat(1));
          break;
        case "neutral":
          setNeutral(neutral + 1);
          setAll(all.concat(0));
          break;
        case "bad":
          setBad(bad + 1);
          setAll(all.concat(-1));
          break;
      }
    };

    return click;
  };

  return (
    <>
      <Title />
      <p>
        <Button text="Good" onClick={handleClick("good")} />
        <Button text="Neutral" onClick={handleClick("neutral")} />
        <Button text="Bad" onClick={handleClick("bad")} />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} all={all} />
    </>
  );
};

export default App;
