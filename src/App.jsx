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
import LoginRegister from "./Pages/LoginRegister";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WishlistProductPage from "./Pages/WishlistProductPage";
import CartProducts from "./Pages/CartProducts";
import Checkout from "./Pages/Checkout";
import TermsAndConditions from "./Pages/TermsAndConditions";

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
          <Route path="/bracelet" element={<Bracelets api={productApi} />} />
          <Route path="/cap" element={<Cap api={productApi} />} />
          <Route path="/earring" element={<Earrings api={productApi} />} />
          <Route path="/goggle" element={<Goggles api={productApi} />} />
          <Route path="/keychain" element={<KeyChain api={productApi} />} />
          <Route path="/offer" element={<Offers api={productApi} />} />
          <Route path="/ring" element={<Rings api={productApi} />} />
          <Route path="/wallet" element={<Wallet api={productApi} />} />
          <Route path="/watch" element={<Watch api={productApi} />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/register" element={<LoginRegister />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={ <TermsAndConditions />} />
          <Route path="/wishlist" element={<WishlistProductPage />} />
          <Route path="/cart" element={<CartProducts />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}