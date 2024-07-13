import React from "react";

const TradingLogic = ({ transactions }) => {
  const totalSolanaBought = transactions
    .filter((transaction) => transaction.type === "buy")
    .reduce((acc, curr) => acc + curr.solanaAmount, 0);

  const totalSolanaSold = transactions
    .filter((transaction) => transaction.type === "sell")
    .reduce((acc, curr) => acc + curr.solanaAmount, 0);

  const totalHeroBought = transactions
    .filter((transaction) => transaction.type === "buy")
    .reduce((acc, curr) => acc + curr.heroAmount, 0);

  const totalHeroSold = transactions
    .filter((transaction) => transaction.type === "sell")
    .reduce((acc, curr) => acc + curr.heroAmount, 0);

  const totalProfit = transactions.reduce((acc, curr) => {
    if (curr.type === "buy") {
      return acc - curr.heroAmount;
    } else {
      return acc + curr.heroAmount;
    }
  }, 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Trading Logic</h2>
      <ul className="space-y-2">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg"
          >
            <span className="font-bold">{transaction.walletAddress}</span>
            <span
              className={`text-sm px-2 py-1 rounded ${
                transaction.type === "buy"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {transaction.type === "buy"
                ? `Bought ${transaction.heroAmount} Hero`
                : `Sold ${transaction.heroAmount} Hero`}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Total Transactions:</h3>
        <p>Total Solana Bought: {totalSolanaBought}</p>
        <p>Total Solana Sold: {totalSolanaSold}</p>
        <p>Total Hero Bought: {totalHeroBought}</p>
        <p>Total Hero Sold: {totalHeroSold}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Total Profit:</h3>
        <p>{totalProfit} USD</p>
      </div>
    </div>
  );
};

export default TradingLogic;
