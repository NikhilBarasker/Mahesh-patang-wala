import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
} from "../Components/Redux/Slices/Slices";
import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";

export default function Googles({ api }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.wishlistProducts);
  const cart = useSelector((state) => state.cart.cartProducts);

  const [wishlistStatus, setWishlistStatus] = useState({});
  const [cartStatus, setCartStatus] = useState({});

  const fetchdata = async () => {
    const response = await axios.get(api);
    setData(response.data);

    const initialWishlistStatus = response.data.reduce((acc, item) => {
      acc[item.id] = wishlist.some(
        (wishlistItem) => wishlistItem.id === item.id
      );
      return acc;
    }, {});
    setWishlistStatus(initialWishlistStatus);

    const initialCartStatus = response.data.reduce((acc, item) => {
      acc[item.id] = cart.some((cartItem) => cartItem.id === item.id);
      return acc;
    }, {});
    setCartStatus(initialCartStatus);
  };

  const handleProductView = (product) => {
    navigate("/productview", { state: { product } });
  };

  const toggleWishlist = (item) => {
    const isWishlisted = wishlistStatus[item.id];
    if (isWishlisted) {
      dispatch(removeFromWishlist(item));
      toast.error(`Item removed from wishlist`);
    } else {
      dispatch(addToWishlist(item));
      toast.success(`Item added to wishlist`);
    }

    setWishlistStatus((prevState) => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
  };

  const toggleCart = (item) => {
    const isInCart = cartStatus[item.id];
    if (isInCart) {
      dispatch(removeFromCart(item));
      toast.error(`Item removed from Cart`);
    } else {
      dispatch(addToCart(item));
      toast.success(`Item added to Cart`);
    }

    setCartStatus((prevState) => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full justify-center items-center flex flex-col">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Goggles
          </h2>
          <div className="cursor-pointer">
            <div className="overflow-x-hidden justify-center items-center grid grid-cols-1 lg:grid-cols-4 max-xl:gap-1 gap-6">
              {data.map((item) => (
                <div
                  className="bg-white w-[300px] my-3 p-5 hover:-translate-y-2 transition-all relative"
                  key={item.id}
                >
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4"
                    onClick={() => toggleWishlist(item)}
                  >
                    {wishlistStatus[item.id] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF6F61"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                    ) : (
                      <CiHeart className="text-gray-800" size={25} />
                    )}
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4 flex justify-center items-center">
                      <img
                        src={item.image}
                        alt="Product"
                        onClick={() => handleProductView(item)}
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
                      <FaRupeeSign />
                      <h4 className="text-lg text-gray-800 font-bold ml-1">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                  {cartStatus[item.id] ? (
                    <div className="w-[150px] bg-gray-200 h-[50px] my-2 mx-14 rounded-xl flex items-center justify-center text-[#333] font-bold p-4">
                     Added to Cart
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleCart(item)}
                      className="w-[150px] bg-black h-[50px] my-2 mx-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
