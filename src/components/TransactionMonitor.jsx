import React, { useEffect, useState } from "react";

const TransactionMonitor = ({ onSolanaPurchase, onHeroTokenPurchase }) => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = getExportedData();
      setWallets(data);
      monitorTransactions(data);
    }, 15000); // Check every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const monitorTransactions = (wallets) => {
    wallets.forEach((wallet) => {
      if (wallet.solanaBalance > 0) {
        console.log("Solana purchase detected for wallet:", wallet.address);
        if (typeof onSolanaPurchase === "function") {
          onSolanaPurchase(wallet);
        }
      }
      if (wallet.heroBalance > 0) {
        console.log("Hero Token purchase detected for wallet:", wallet.address);
        if (typeof onHeroTokenPurchase === "function") {
          onHeroTokenPurchase(wallet);
        }
      }
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Transaction Monitor</h2>
      <div className="space-y-2">
        {wallets.map((wallet, index) => (
          <div key={index} className="flex justify-between">
            <span>{wallet.address}</span>
            <span>{`Solana: ${wallet.solanaBalance.toFixed(
              2
            )} | Hero: ${wallet.heroBalance.toFixed(2)}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionMonitor;
