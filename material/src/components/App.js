import React from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "../Store.js";

export default class extends React.Component {
  state = {
    exercises,
  };

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [[...exercises[muscles]], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <React.Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </React.Fragment>
    );
  }
}
