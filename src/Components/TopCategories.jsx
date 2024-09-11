import React from "react";
import HomeHeading from "./HomeHeading";

export default function TopCategories() {
  return (
    <div>
      <HomeHeading heading={"Top Category"} />
      <div className="flex flex-col items-center sm:ml-11 md:flex-row">
        <div className="bg-gray-200 w-48 h-64 rounded-lg m-[50px]">
          <div className="flex p-2 gap-1">
            <div className=""></div>
            <div className="circle"></div>
            <div className="circle">hi</div>
          </div>
          <div className="card__content"></div>
        </div>
        <div className="bg-gray-200 w-48 h-64 rounded-lg m-[50px]">
          <div className="flex p-2 gap-1">
            <div className=""></div>
            <div className="circle"></div>
            <div className="circle">hi</div>
          </div>
          <div className="card__content"></div>
        </div>
        <div className="bg-gray-200 w-48 h-64 rounded-lg m-[50px]">
          <div className="flex p-2 gap-1">
            <div className=""></div>
            <div className="circle"></div>
            <div className="circle">hi</div>
          </div>
          <div className="card__content"></div>
        </div>
        <div className="bg-gray-200 w-48 h-64 rounded-lg m-[50px]">
          <div className="flex p-2 gap-1">
            <div className=""></div>
            <div className="circle"></div>
            <div className="circle">hi</div>
          </div>
          <div className="card__content"></div>
        </div>
        <div className="bg-gray-200 w-48 h-64 rounded-lg m-[50px]">
          <div className="flex p-2 gap-1">
            <div className=""></div>
            <div className="circle"></div>
            <div className="circle">hi</div>
          </div>
          <div className="card__content"></div>
        </div>
      </div>
    </div>
  );
}
