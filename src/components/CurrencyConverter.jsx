import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [exchangeRate, setExchangeRate] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const apiUrl = `https://v6.exchangerate-api.com/v6/19992739f6b5af25700f4e79/latest/${fromCurrency}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setExchangeRate(response.data.conversion_rates);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fromCurrency]);

  useEffect(() => {
    const converted = exchangeRate[toCurrency];
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white shadow-lg p-8">
        <img
          src="/assets/exchange.png"
          alt="Currency exchange"
          className="w-10"
        />
        <h1 className="text-3xl font-bold text-left mb-7">
          Currency Converter
        </h1>
        <form className="flex gap-4">
          <div className="flex flex-col mb-4 w-1/3">
            <label
              className="block text-sm font-semibold mb-2 text-gray-600"
              htmlFor="amount"
            >
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              className="w-full border border-gray-200 p-2 rounded"
              value={amount}
              //   onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4 w-1/3">
            <label
              className="block text-sm font-semibold mb-2 text-gray-600"
              htmlFor="fromCurrency"
            >
              From Currency:
            </label>
            <select
              className="w-full border border-gray-200 p-2 rounded"
              name="fromCurrency"
              value={fromCurrency}
              //   onChange={handleChange}
            >
              {exchangeRate &&
                Object.keys(exchangeRate).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col mb-4 w-1/3">
            <label
              className="block text-sm font-semibold mb-2 text-gray-600"
              htmlFor="toCurrency"
            >
              To Currency:
            </label>
            <select
              className="w-full border border-gray-200 p-2 rounded"
              name="toCurrency"
              value={toCurrency}
              //   onChange={handleChange}
            >
              {exchangeRate &&
                Object.keys(exchangeRate).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
        </form>
        <div className="bg-blue-50 w-2/3 p-5 text-lg mt-4">
          Converted Amount:
          <span className="font-bold">
            {convertedAmount} {toCurrency}
          </span>
        </div>
        <div className="text-center mt-5 font-bold underline">
          All rights reserved to @nens
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
