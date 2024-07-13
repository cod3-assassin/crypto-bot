import React from "react";
import ManualInteraction from "../components/ManualInteraction";
import Simulation from "../components/Simulation";
import { wallets, buySol, sellSol } from "../components/trading/BuySellLogic";

const WalletsPage = () => {
  const handleBuySolana = (walletAddress, solanaAmount) => {
    buyHeroOnSolanaBuy(walletAddress, solanaAmount);
    // Additional logic or UI updates after buying Solana
  };

  const handleSellHero = (walletAddress, heroAmount) => {
    sellHeroOnHeroBuy(walletAddress, heroAmount);
    // Additional logic or UI updates after selling Hero tokens
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <ManualInteraction />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Transaction History
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {/* Example transaction logs */}
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <span className="text-gray-600">{wallet.address}</span>
                <span className="text-green-600">Last transaction: Buy 10</span>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">
          Wallets Overview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wallets.map((wallet, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Wallet {index + 1}</h2>
              <p className="text-gray-700 mb-2">
                Solana Balance: {wallet.solanaBalance} SOL
              </p>
              <p className="text-gray-700 mb-4">
                Hero Balance: {wallet.heroBalance} HERO
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-full hover:bg-blue-600"
                onClick={() => handleBuySolana(wallet.address, 10)}
              >
                Buy 10 SOL
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 w-full hover:bg-red-600"
                onClick={() => handleSellHero(wallet.address, 5)}
              >
                Sell 5 HERO
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <Simulation />
        </div>
      </div>
    </div>
  );
};

export default WalletsPage;
