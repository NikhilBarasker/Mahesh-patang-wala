import React from "react";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

const WishlistProductPage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlistProducts);
console.log('Wishlist ',wishlist)
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
              </div>
            ))
          ) : (
            <p>No items in wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistProductPage;
