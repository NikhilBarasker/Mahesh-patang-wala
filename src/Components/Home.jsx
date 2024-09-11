import React from "react";
import MySwiper from "../Components/Swiper";
import Collection from "./Collection";
import TopCategories from "./TopCategories";

export default function Home() {
  return (
    <div>
      <MySwiper />
      <TopCategories />
      <Collection />
    </div>
  );
}
