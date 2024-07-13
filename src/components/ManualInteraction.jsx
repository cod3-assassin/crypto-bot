import React, { useState } from "react";
import { buySol, sellSol, wallets } from "./trading/BuySellLogic";

const ManualInteraction = () => {
  const [walletAddress, setWalletAddress] = useState(wallets[0].address); // Default to the first wallet address
  const [solanaAmount, setSolanaAmount] = useState(0);
  const [logs, setLogs] = useState([]);

  const handleBuySolana = () => {
    buySol(walletAddress, solanaAmount, logs, setLogs);
  };

  const handleSellSolana = () => {
    sellSol(walletAddress, solanaAmount, logs, setLogs);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manual Wallet Interaction</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <input
            type="number"
            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
            placeholder="Amount of Solana"
            value={solanaAmount}
            onChange={(e) => setSolanaAmount(Number(e.target.value))}
          />
          <div className="flex gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleBuySolana}
            >
              Buy Solana
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleSellSolana}
            >
              Sell Solana
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">Manual Logs</h3>
          <div className="bg-white shadow-md rounded-lg p-4 h-96 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="mb-2">
                <span className="font-bold">{log.timestamp}: </span>
                {log.type === "buy" ? (
                  <span className="text-green-600">{`Wallet ${log.walletAddress} bought ${log.solanaAmount} Solana`}</span>
                ) : (
                  <span className="text-red-600">{`Wallet ${log.walletAddress} sold ${log.solanaAmount} Solana`}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualInteraction;
