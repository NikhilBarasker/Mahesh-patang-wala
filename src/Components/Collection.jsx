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

export default function Collection() {
  return (
    <div>
      <HomeHeading heading="Our Collection" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-[50px]">
        <div>
          <img src={Cap2} />
        </div>
        <div>
          <img src={Goggles} />
        </div>
        <div>
          <img src={Bresalate} />
        </div>
        <div>
          <img src={Earrings} />
        </div>
        <div>
          <img src={Keycgain} />
        </div>
        <div>
          <img src={Rings} />
        </div>

        <div>
          <img src={Wallet} />
        </div>
        <div>
          <img src={Watch} />
        </div>
        <div>
          <img src={Perfume} />
        </div>
        <div>
          <img src={Offers} />
        </div>
      </div>
    </div>
  );
}
