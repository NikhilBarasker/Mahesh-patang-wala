import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaRupeeSign } from "react-icons/fa";

export default function Bracelets({ api }) {

  const[data,setData]=useState([])

  const fetchdata = async () => {
    const response = await axios.get(api);
    setData(response.data);
  }
  
  useEffect(() => {
    fetchdata();
  },[])
 
  console.log('Data ', data);

  return (
    <div>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full justify-center items-center flex flex-col ">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Braceletes
          </h2>
          <div>
            <div className="overflow-x-hidden justify-center items-center grid grid-cols-1 lg:grid-cols-4 max-xl:gap-1 gap-6">
              {data.map((item) => (
                <div className="bg-white w-[300px] my-3 p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                  <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>

                  <div className="w-full flex justify-center">
                    <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4 flex justify-center items-center">
                      <img
                        src={item.image}
                        alt="Product 1"
                        className="h-[150px] w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col text-center">
                    <h3 className="text-lg font-extrabold text-gray-800">
                      {item.category}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description.split(" ").slice(0, 10).join(" ") +
                        "..."}
                    </p>
                    <div className="flex justify-center items-center mt-[5px]">
                      <FaRupeeSign className="mt-[7px]" />
                      <h4 className="text-lg text-gray-800 font-bold ml-1">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
