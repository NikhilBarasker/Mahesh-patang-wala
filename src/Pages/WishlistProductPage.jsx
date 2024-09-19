import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { addToCart, removeFromWishlist } from "../Components/Redux/Slices/Slices";
import { Link } from "react-router-dom";

const WishlistProductPage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlistProducts);
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAddedToCart((prev) => ({ ...prev, [item.id]: true }));
  };

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
    setAddedToCart((prev) => ({ ...prev, [item.id]: false }));
  };

  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 hover:-translate-y-2 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">
                  <FaRupeeSign className="inline" /> {item.price}
                </p>
                <div className="flex justify-between mt-4">
                  {addedToCart[item.id] ? (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleRemoveFromWishlist(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 flex flex-col items-center justify-center p-10 text-center">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">
                Your Wishlist is Empty
              </h2>
              <p className="text-lg text-gray-500">
                Browse our products and add items to your wishlist
              </p>
             <Link to="/"> <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
                Start Shopping
              </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistProductPage;