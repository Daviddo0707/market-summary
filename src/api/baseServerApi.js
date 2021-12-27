import axios from "axios";
import {API_KEY} from './api';

export default axios.create({
    // baseURL: "https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US",
    baseURL: "http://localhost:3000/__mocks__/markets.json",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        'x-api-key': API_KEY
    },
})
