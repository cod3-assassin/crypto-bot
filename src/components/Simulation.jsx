import React, { useState, useEffect } from "react";
import { wallets, buySol, sellSol } from "./trading/BuySellLogic";

const Simulation = ({ onTransaction }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      simulateTransactions();
    }, 5000); // Simulate transactions every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const simulateTransactions = () => {
    const walletIndex = Math.floor(Math.random() * wallets.length);
    const selectedWallet = wallets[walletIndex].address;
    const solanaAmount = Math.floor(Math.random() * 10) + 1;

    if (Math.random() > 0.5) {
      // Simulate buying Solana
      buySol(selectedWallet, solanaAmount, transactions, setTransactions);
    } else {
      // Simulate selling Solana
      sellSol(selectedWallet, solanaAmount, transactions, setTransactions);
    }

    if (typeof onTransaction === "function") {
      onTransaction(transactions);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Simulation</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Wallet Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Transaction Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction, index) => (
              <tr
                key={`${transaction.walletAddress}-${index}`}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.walletAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.type === "buy" ? "Buy" : "Sell"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.solanaAmount} Solana
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Simulation;
