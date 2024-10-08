import React from "react";

const AmountInput = ({ amount, onAmountChange }) => {
  return (
    <input
      type="number"
      className="border p-2 rounded-md w-full sm:w-32 md:w-48"
      value={amount}
      onChange={onAmountChange}
      placeholder="Enter amount"
    />
  );
};

export default AmountInput;

