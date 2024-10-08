import React, { useState, useEffect } from "react";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";
import { fetchExchangeRates } from "./services/exchangeRateApi";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExchangeRates = async () => {
      try {
        const data = await fetchExchangeRates(fromCurrency); // Call the API service

        setCurrencies(Object.keys(data.conversion_rates));
        const rate = data.conversion_rates[toCurrency];
        setExchangeRate(rate);
        setConvertedAmount(amount * rate);
      } catch (error) {
        setError(error.message); // Set the error message if any
      }
    };

    getExchangeRates();
  }, [fromCurrency, toCurrency, amount]);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-6">
      <div className="bg-grey p-8 rounded-md shadow-md sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-lg max-w-md mx-auto border-2 border-indigo-600">
        {" "}
        <h1 className=" inline-block text-center w-full p-2 mb-8 text-teal-500 rounded-lg text-2xl font-bold bg-gray-500">
          Currency Converter
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4 text-teal-500">
          <AmountInput amount={amount} onAmountChange={handleAmountChange} />
        </div>
        <div className="flex justify-between mb-4">
          <div className=" text-teal-500">
            <CurrencySelector
              currencies={currencies}
              selectedCurrency={fromCurrency}
              onChange={handleFromCurrencyChange}
            />
          </div>
          <div className=" text-teal-500">
            <CurrencySelector
              currencies={currencies}
              selectedCurrency={toCurrency}
              onChange={handleToCurrencyChange}
            />
          </div>
        </div>
        <div className="text-teal-500 bg-white p-8 rounded-md shadow-md max-w-md mx-auto border-x-slate-500 border-slate-500">
          <ConversionResult
            convertedAmount={convertedAmount}
            exchangeRate={exchangeRate}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
