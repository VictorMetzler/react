import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { CssBaseline } from "@material-ui/core";
import coronaImage from './images/image.png';

export default class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }


  handleCountryChange = async (country) => {
    // fetch the data
    // set the state
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }

  render() {
    const { data, country } = this.state;
    
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={styles.container}>
          <img classname={styles.image} src={coronaImage} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country}/>
        </div>
      </React.Fragment>
    );
  }
}
