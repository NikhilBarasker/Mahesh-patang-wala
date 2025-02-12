import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import HomeHeading from "./HomeHeading";
import { Link } from "react-router-dom";

export default function TopCategories() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set the animation duration
  }, []);
  return (
    <div>
      <HomeHeading heading={"Top Category"} />
      <div className="flex flex-col items-center md:flex-row mt-[20px]">
        <div className=" w-[300px] h-[320px] shadow-md  mx-[30px]">
          <div className="flex p-2 gap-1">
            <div className="circle">
              <h2 className="font-bold text-xl mb-2 text-center pt-[10px]">Ear-ring</h2>
              <div className="cart-container  rounded overflow-hidden p-6 place-items-center">
                <div className="w-[180px] h-[150px]">
                  <img className=" hover:scale-115 w-full h-full rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbhh8TZNa22HdMl2qEcEiX715QW05NRHBxA&s" alt="img" data-aos="zoom-out" />
                </div>
                <div className="px-6 py-2 content-center">
                  <button
                    className="w-[100px] bg-indigo-600 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-indigo-700 hover:scale-105 transition-colors  my-[5px]"
                  ><span><Link to="/earring">Explore</Link></span></button>
                </div>
              </div>
            </div>
          </div>
          <div className="card__content"></div>
        </div>

        <div className=" w-[300px] h-[320px] shadow-xl mx-[20px]">
          <div className="flex p-1 gap-1">
            <div className="circle ">
              <h2 className="font-bold text-xl mb-2 text-center pt-[10px]">Watch </h2>
              <div className="cart-container  rounded overflow-hidden p-6 place-items-center">
                <div className="w-[180px] h-[150px]">
                  <img className="w-full h-full  hover:scale-105 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmy0SlKWWbES3CUHZbhRGSunkWHvbrvnc1Q&s" alt="img" data-aos="zoom-out" />
                </div>
                <div className="px-6 py-2 content-center">
                  <button
                    className="w-[100px] bg-indigo-600 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-indigo-700 hover:scale-105 transition-colors  my-[5px]"
                  ><span><Link to="/watch">Explore</Link></span></button>
                </div>
              </div>
            </div>
          </div>
          <div className="card__content"></div>
        </div>

        <div className=" w-[300px] h-[320px] shadow-xl mx-[30px]">
          <div className="flex p-1 gap-1">
            <div className="circle ">
              <h2 className="font-bold text-xl mb-2 text-center pt-[10px]"> Rings </h2>
              <div className="cart-container max-w-sm rounded overflow-hidden p-6 ">
                <div className="w-[180px] h-[150px]">
                  <img className="w-full h-full hover:scale-105 rounded-md" src="https://cdn.caratlane.com/media/catalog/product/J/R/JR05976-1YP600_1_lar.jpg" alt="img" data-aos="zoom-out" />
                </div>
                <div className="px-6 py-2 content-center">
                  <button
                    className="w-[100px] bg-indigo-600 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-indigo-700 hover:scale-105 transition-colors  my-[5px]"
                  ><span><Link to="/ring">Explore</Link></span></button>
                </div>
              </div>
            </div>
          </div>
          <div className="card__content"></div>
        </div>

        <div className="w-[300px] h-[320px] shadow-xl mx-[20px]">
          <div className="flex p-1 gap-1">
            <div className="circle ">
              <h2 className="font-bold text-xl mb-2 text-center pt-[10px]"> Perfumes </h2>
              <div className="cart-container max-w-sm rounded overflow-hidden p-6 ">
                <div className="w-[180px] h-[150px]">
                  <img className="w-full h-full hover:scale-115 rounded-md" src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="px-6 py-2 content-center">
                  <button
                    className="w-[100px] bg-indigo-600 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-indigo-700 hover:scale-105 transition-colors  my-[5px]"
                  ><span><Link to="/offer">Explore</Link></span></button>
                </div>
              </div>
            </div>
          </div>
          <div className="card__content"></div>
        </div>
        <div className=" w-[300px] h-[320px] shadow-md mx-[30px]">
          <div className="flex p-1 gap-1">
            <div className="circle ">
              <h2 className="font-bold text-xl mb-2 text-center pt-[10px]"> Wallet </h2>
              <div className="cart-container max-w-sm rounded overflow-hidden p-6 ">
                <div className="w-[180px] h-[150px]">
                  <img className=" hover:scale-115 w-full h-full rounded-md" src="https://images.pexels.com/photos/55781/pexels-photo-55781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="px-6 py-2 content-center">
                  <button
                    className="w-[100px] bg-indigo-600 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-indigo-700 hover:scale-105 transition-colors  my-[5px]"
                  ><span><Link to="/wallet">Explore</Link></span></button>
                </div>
              </div>
            </div>
          </div>
          <div className="card__content"></div>
        </div>
      </div>
    </div>
  );
}
