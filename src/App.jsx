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
import ProductView from "./Pages/ProductView";

export default function App() {

  const productApi = "https://fakestoreapi.com/products";

  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="mt-[220px] lg:mt-[130px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bracelets" element={<Bracelets api={productApi} />} />
          <Route path="/cap" element={<Cap api={productApi} />} />
          <Route path="/earring" element={<Earrings api={productApi} />} />
          <Route path="/goggles" element={<Goggles api={productApi} />} />
          <Route path="/keychain" element={<KeyChain api={productApi} />} />
          <Route path="/offers" element={<Offers api={productApi} />} />
          <Route path="/rings" element={<Rings api={productApi} />} />
          <Route path="/wallet" element={<Wallet api={productApi} />} />
          <Route path="/watch" element={<Watch api={productApi} />} />
          <Route path="/productview" element={<ProductView />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
