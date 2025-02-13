import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Activation from "./pages/auth/Activation";
import Payment from "./pages/auth/Payment";
import Transaction from "./pages/auth/Transaction";
import Dashboard from "./pages/Dashboard/Dashboard";
import Deposit from "./pages/Account Recharge/Deposit";
import Layout from "./components/Layout"; // Import Layout Component
import PaymentTransaction from "./pages/Account Recharge/PaymentTransaction";
import DeductionHistory from "./pages/Account Recharge/DeductionHistory";
import WithdrawBalance from "./pages/Withdrawals/WithdrawBalance";
import WithdrawHistory from "./pages/Withdrawals/WithdrawHistory";
import WithdrawYoutube from "./pages/Withdrawals/WithdrawYoutube";
import WithdrawTiktok from "./pages/Withdrawals/WithdrawTiktok";
import WithdrawInsta from "./pages/Withdrawals/WithdrawInsta";
import WithdrawNetflix from "./pages/Withdrawals/WithdrawNetflix";
import LevelOne from "./pages/Downlines/LevelOne";
import LevelTwo from "./pages/Downlines/LevelTwo";
import LevelThree from "./pages/Downlines/LevelThree";
import ClaimBonus from "./pages/Claim Bonus/ClaimBonus";
import InstaReels from "./pages/Instagram Reels/InstaReels";
import PartakeTrivia from "./pages/Trivia Questions/PartakeTrivia";
import TriviaHistory from "./pages/Trivia Questions/TriviaHistory";
import YoutubeVideos from "./pages/YouTube Videos/YoutubeVideos";
import YtHistory from "./pages/YouTube Videos/YtHistory";
import WatchTiktok from "./pages/Tiktok Videos/WatchTiktok";
import TiktokHistory from "./pages/Tiktok Videos/TiktokHistory";
import SpinAndWin from "./pages/Spin And Win/SpinAndWin";
import ForexTrading from "./pages/Forex Trading/ForexTrading";
import ViewAd from "./pages/Netflix Ads/ViewAd";
import AdHistory from "./pages/Netflix Ads/AdHistory";
import Ebooks from "./pages/E-books/Ebooks";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (No Sidebar, Navbar, or Footer) */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activation" element={<Activation />} />

        {/* Private Routes (Wrapped inside Layout) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transaction" element={<Transaction />} />

          {/* Account Recharge Routes */}
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/payment-transaction" element={<PaymentTransaction />} />
          <Route path="/deduction-history" element={<DeductionHistory />} />

          {/* Withdrawals Routes */}
          <Route path="/withdraw-balance" element={<WithdrawBalance />} />
          <Route path="/withdraw-netflix" element={<WithdrawNetflix />} />
          <Route path="/withdraw-history" element={<WithdrawHistory />} />
          <Route path="/withdraw-insta" element={<WithdrawInsta />} />
          <Route path="/withdraw-tiktok" element={<WithdrawTiktok />} />
          <Route path="/withdraw-youtube" element={<WithdrawYoutube />} />

          {/* Downline Routes */}
          <Route path="/level-one" element={<LevelOne />} />
          <Route path="/level-two" element={<LevelTwo />} />
          <Route path="/level-three" element={<LevelThree />} />

          {/* Claim Bonus Route */}
          <Route path="/claim-bonus" element={<ClaimBonus />} />

          {/* Insta Reels Route */}
          <Route path="/instagram-reels" element={<InstaReels />} />

          {/* Trivia Questions Routes */}
          <Route path="/partake-trivia" element={<PartakeTrivia />} />
          <Route path="/trivia-history" element={<TriviaHistory />} />

          {/* Youtube Routes */}
          <Route path="/youtube-videos" element={<YoutubeVideos />} />
          <Route path="/youtube-history" element={<YtHistory />} />

          {/* Tiktok Routes */}
          <Route path="/tiktok-history" element={<TiktokHistory />} />
          <Route path="/tiktok-videos" element={<WatchTiktok />} />

          {/* Spin And Win Routs */}
          <Route path="/spin-and-win" element={<SpinAndWin />} />

          {/*Forex Trading Route */}
          <Route path="/forex-trading" element={<ForexTrading />} />

          {/* Netflix Ads Routes */}
          <Route path="/view-ads" element={<ViewAd />} />
          <Route path="/ad-history" element={<AdHistory />} />

          {/* E-books Route */}
          <Route path="/e-books" element={<Ebooks />} />

          {/* Profile Route */}
          <Route path="/profile" element={<Profile />} />

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
