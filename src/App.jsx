import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Bracelets from "./Pages/Bracelets";
import Cap from "./Pages/Cap";
import Earrings from "./Pages/Earrings";
import Goggles from "./Pages/Goggles";
import KeyChain from "./Pages/KeyChain";
import Offers from "./Pages/Offers";
import Rings from "./Pages/Rings";
import Wallet from "./Pages/Wallet";
import Watch from "./Pages/Watch";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="pt-[60px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/cap" element={<Cap />} />
          <Route path="/earring" element={<Earrings />} />
          <Route path="/goggles" element={<Goggles />} />
          <Route path="/keychain" element={<KeyChain />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
