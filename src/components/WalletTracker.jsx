import React, { useEffect } from "react";
import {
  wallets,
  buyHeroOnSolanaBuy,
  sellHeroOnHeroBuy,
} from "./trading/BuySellLogic"; // Importing wallets and functions

const WalletTracker = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      monitorWallets();
    }, 5000); // Monitor every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const monitorWallets = () => {
    const updatedWallets = [...wallets];

    updatedWallets.forEach((wallet) => {
      // Simulate a random action where a wallet might buy or sell SOL
      const actionType = Math.random() > 0.5 ? "buy" : "sell";
      const solanaAmount = Math.floor(Math.random() * 10) + 1;

      if (actionType === "buy") {
        // Simulate buying SOL
        wallet.solanaBalance += solanaAmount;

        // Simulate buying HERO if SOL is bought
        buyHeroOnSolanaBuy(wallet.address, solanaAmount);
        console.log(`Simulated buying HERO for wallet ${wallet.address}`);
      } else {
        // Simulate selling SOL
        if (wallet.solanaBalance >= solanaAmount) {
          wallet.solanaBalance -= solanaAmount;

          // Simulate selling HERO if previously bought
          sellHeroOnHeroBuy(wallet.address, wallet.heroBalance);
          console.log(`Simulated selling HERO for wallet ${wallet.address}`);
        }
      }
    });

    // You may update the state or trigger any necessary re-renders here if needed
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Wallet Tracker</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table to display wallet details */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Wallet Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Solana Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hero Balance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {wallets.map((wallet, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {wallet.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {wallet.solanaBalance}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {wallet.heroBalance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletTracker;
