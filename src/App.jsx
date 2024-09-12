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
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";

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
          <Route path="/cap" element={<Cap />} />
          <Route path="/earring" element={<Earrings />} />
          <Route path="/goggles" element={<Goggles />} />
          <Route path="/keychain" element={<KeyChain />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
