import React from "react";

const CurrencySelector = ({ currencies, selectedCurrency, onChange }) => {
  return (
    <select
      className="border p-2 rounded-md w-full sm:w-32 md:w-48" // Add responsive width classes
      value={selectedCurrency}
      onChange={onChange}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;

