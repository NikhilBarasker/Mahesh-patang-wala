import React from "react";
import HomeHeading from "./HomeHeading";
import Bresalate from "../assets/Bresalate.jpg";
import Cap2 from "../assets/Cap2.jpg";
import Earrings from "../assets/Earrings.jpg";
import Goggles from "../assets/Goggles.jpg";
import Keycgain from "../assets/Keycgain.jpg";
import Offers from "../assets/Offers.jpg";
import Rings from "../assets/Rings.jpg";
import Wallet from "../assets/Wallet.jpg";
import Watch from "../assets/Watch.jpg";
import Perfume from "../assets/Perfume.jpg";
import { useNavigate } from "react-router-dom";

export default function Collection() {

  const navigate = useNavigate();

const images = [
  { image: Cap2, name: "cap" },
  { image: Goggles, name: "goggle" },
  { image: Bresalate, name: "bresalate" },
  { image: Earrings, name: "earring" },
  { image: Rings, name: "ring" },
  { image: Keycgain, name: "keychain" },
  { image: Wallet, name: "wallet" },
  { image: Watch, name: "watch" },
  { image: Perfume, name: "perfume" },
  { image: Offers, name: "offer" },
];
  
  const handleClick = (name) => {
    navigate(`/${name}`)
  }

  return (
    <div>
      <HomeHeading heading="Our Collection" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-[50px]">
        {images.map((item) => (
          <div>
            <img onClick={()=>handleClick(item.name)} className="cursor-pointer" src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
