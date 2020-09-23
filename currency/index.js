import axios from "axios"; //Roda no output tab com o Quokka
// const axios = require('axios'); //Rodar no terminal -> node index.js

// https:/]fixer.io/
const FIXER_API_KEY = "23ec409ab62dff2a7cdb5201805c9488";
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`;

// Async/Await

// Fetch data about currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const {
      data: { rates },
    } = await axios.get(FIXER_API);

    const euro = 1 / rates[fromCurrency];
    const exchangeRate = euro * rates[toCurrency];

    return exchangeRate;
  } catch (error) {
    throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
  }
};

// Fetch data about countries

const getCountries = async (currencyCode) => {
  try {
    const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);
    return data.map((data) => data.name);
  } catch (error) {
    throw new Error(`Unable to get coutries that use ${currencyCode}`);
  }
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  const [exchangeRate, countries] = await Promise.all([
    getExchangeRate(fromCurrency, toCurrency),
    getCountries(toCurrency),
  ]);

  const convertedAmout = (amount * exchangeRate).toFixed(2);

  return `${amount} ${fromCurrency} is worth ${convertedAmout} ${toCurrency}. You can spend these in the following countries: ${countries}`;
};

// Output data

convertCurrency("AUD", "BRL", 20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));