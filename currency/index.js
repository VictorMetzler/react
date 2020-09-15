import axios from 'axios';

// https:/]fixer.io/
const FIXER_API_KEY = '23ec409ab62dff2a7cdb5201805c9488';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`;

// Async/Await

// Fetch data about currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const { data: { rates } } = await axios.get(FIXER_API);
    
    const euro = 1 / rates[fromCurrency];
    const exchangeRate = euro * rates[toCurrency];

    return exchangeRate;
}

getExchangeRate('USB', 'EUR');

// Fetch data about countries

// Output data