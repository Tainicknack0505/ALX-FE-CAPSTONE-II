import React from "react";

const ConversionResult = ({
  convertedAmount,
  exchangeRate,
  fromCurrency,
  toCurrency,
}) => {
  return (
    <div className="mt-4 mb-4">
      <h3 className="text-xl font-bold pb-4">
        {convertedAmount} {toCurrency}
      </h3>
      <p>
        1 {fromCurrency} = {exchangeRate} {toCurrency}
      </p>
    </div>
  );
};

export default ConversionResult;
