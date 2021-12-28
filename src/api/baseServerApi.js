import axios from "axios";

export default axios.create({
    baseURL: "https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US",
    // baseURL: "http://localhost:3000/__mocks__/markets.json",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        'x-api-key': process.env.REACT_APP_API_KEY
    },
})
