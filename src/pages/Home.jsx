import React, { useState } from "react";
import WalletTracker from "../components/WalletTracker";
import TradingLogic from "../components/TradingLogic";
import Simulation from "../components/Simulation";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [wallets, setWallets] = useState([]);

  const handleTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const handleWalletsUpdate = (updatedWallets) => {
    setWallets(updatedWallets);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen">
      <h1 className="text-3xl font-bold mb-4">Crypto Trading Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
        <Simulation
          onTransaction={handleTransaction}
          onWalletsUpdate={handleWalletsUpdate}
        />
        <WalletTracker wallets={wallets} />
        <TradingLogic transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
