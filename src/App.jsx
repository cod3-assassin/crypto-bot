import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import WalletTracker from "./pages/WalletsPage";

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <nav className="bg-blue-500 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold">Crypto Bot</div>
            <div>
              <Link
                to="/"
                className="text-white mx-2 hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/wallet-tracker"
                className="text-white mx-2 hover:text-gray-200 transition-colors"
              >
                Wallet Tracker
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet-tracker" element={<WalletTracker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
