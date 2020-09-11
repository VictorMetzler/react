import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { CssBaseline } from "@material-ui/core";

export default class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker />
          <Chart />
        </div>
      </React.Fragment>
    );
  }
}
