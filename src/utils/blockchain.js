export const fetchTransactions = async (address) => {
  // Implement your API call to fetch transactions
  const response = await fetch(
    `https://api.example.com/transactions?wallet=${address}`
  );
  const data = await response.json();
  return data.transactions;
};
