// trading/BuySellLogic.js

export const wallets = [
  {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    solanaBalance: 100,
  },
  {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    solanaBalance: 100,
  },
  {
    address: "0x1234567890abcdefabcdefabcdefabcdefabcd12",
    solanaBalance: 100,
  },
  {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdef1234",
    solanaBalance: 100,
  },
  {
    address: "0x1234567890abcdefabcdefabcdefabcdef5678",
    solanaBalance: 100,
  },
  {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd56",
    solanaBalance: 100,
  },
  {
    address: "0x1234567890abcdefabcdefabcdefabcdefabcd34",
    solanaBalance: 100,
  },
  {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdef7890",
    solanaBalance: 100,
  },
  {
    address: "0x1234567890abcdefabcdefabcdefabcdefabcd78",
    solanaBalance: 100,
  },
  {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd90",
    solanaBalance: 100,
  },
];

// Function to buy Solana
export const buySol = (
  walletAddress,
  solanaAmount,
  transactions,
  setTransactions
) => {
  const wallet = wallets.find((wallet) => wallet.address === walletAddress);
  if (!wallet) return;

  wallet.solanaBalance += solanaAmount;

  logTransaction(
    "buy",
    walletAddress,
    solanaAmount,
    transactions,
    setTransactions
  );
};

// Function to sell Solana
export const sellSol = (
  walletAddress,
  solanaAmount,
  transactions,
  setTransactions
) => {
  const wallet = wallets.find((wallet) => wallet.address === walletAddress);
  if (!wallet) return;

  wallet.solanaBalance -= solanaAmount;

  logTransaction(
    "sell",
    walletAddress,
    solanaAmount,
    transactions,
    setTransactions
  );
};

// Function to log transactions
const logTransaction = (
  type,
  walletAddress,
  solanaAmount,
  transactions,
  setTransactions
) => {
  const transaction = { type, walletAddress, solanaAmount };
  setTransactions((prevTransactions) => [...prevTransactions, transaction]);
};

// Example implementation in BuySellLogic.js or a relevant module

// Function to handle buying HERO token when SOL is bought
export const buyHeroOnSolanaBuy = (walletAddress, solanaAmount) => {
  // Implement your logic here to buy HERO tokens
  console.log(
    `Buying HERO tokens for wallet ${walletAddress} when buying ${solanaAmount} Solana.`
  );
};

// Function to handle selling HERO token when SOL is sold
export const sellHeroOnHeroBuy = (walletAddress, heroBalance) => {
  // Implement your logic here to sell HERO tokens
  console.log(
    `Selling HERO tokens for wallet ${walletAddress} when selling ${heroBalance} HERO.`
  );
};
