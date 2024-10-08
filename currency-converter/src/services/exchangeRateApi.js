
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await fetch(`${BASE_URL}/latest/${baseCurrency}`);

    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }

    const data = await response.json();

    if (data.result !== "success") {
      throw new Error('Invalid API response');
    }

    return data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw new Error('Unable to fetch exchange rates. Please try again later.');
  }
};

export const fetchHistoricalRates = async (baseCurrency, date) => {
  try {
    const response = await fetch(`${BASE_URL}/history/${baseCurrency}/${date}`);

    if (!response.ok) {
      throw new Error('Failed to fetch historical exchange rates');
    }

    const data = await response.json();

    if (data.result !== "success") {
      throw new Error('Invalid API response');
    }

    return data;
  } catch (error) {
    console.error("Error fetching historical rates:", error);
    throw new Error('Unable to fetch historical exchange rates. Please try again later.');
  }
};
