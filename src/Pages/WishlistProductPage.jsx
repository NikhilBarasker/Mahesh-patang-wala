import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaRupeeSign,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
export default function WishlistProductPage() {
    const location = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(location.state.product.price);
    const data = Array.isArray(location.state.product)
      ? location.state.product
      : [location.state.product || {}];

    const quantitydecrement = (q) => {
      if (q - 1 > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
    const quantityIncrement = (q) => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };

    useEffect(() => {
      console.log(`Quantity ${quantity} & Price ${price}`);
      setPrice(location.state.product.price * quantity);
    }, [quantity, location.state.product.price]);

    return (
      <div className="font-sans tracking-wide max-w-7xl mx-auto m-[40px]">
        <div className="font-sans tracking-wide max-md:mx-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className=" md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2"
            >
              <div className="lg:col-span-3 h-full p-8">
                <div className="relative h-full flex items-center justify-center lg:min-h-[580px]">
                  <img
                    src={item.image}
                    alt="Product"
                    className="lg:w-[350px] w-3/4 h-full object-contain max-lg:p-8"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 lg:col-span-2 bg-gray-100 py-6 px-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {item.title}
                  </h2>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-white">Rating</h3>
                    <p className="text-white text-3xl font-bold mt-2">
                      {item.rating.rate}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white">Price</h3>
                  <div className="flex text-white text-3xl font-bold mt-4">
                    <FaRupeeSign />
                    <p className="mt-[-5px]">{price}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white">
                    Choose a Size
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-black border-2 border-white text-white hover:border-white rounded-full shrink-0"
                    >
                      L
                    </button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-gray-400 border-2 border-white hover:border-white rounded-full shrink-0"
                    >
                      M
                    </button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border-2 border-white hover:border-white rounded-full shrink-0"
                    >
                      S
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white">Quantity</h3>
                  <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                    <button
                      type="button"
                      onClick={() => quantitydecrement(quantity)}
                      className="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
                    >
                      <IoMdRemove className="w-4 h-4 fill-current inline" />
                    </button>
                    <button
                      type="button"
                      className="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-white text-lg"
                    >
                      {quantity}
                    </button>
                    <button
                      type="button"
                      onClick={() => quantityIncrement()}
                      className="bg-white text-white w-10 h-9 font-semibold flex items-center justify-center"
                    >
                      <IoMdAdd className="text-black w-4 h-4 fill-current inline" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-2.5 border border-white bg-transparent hover:bg-gray-50 text-white hover:text-black text-sm font-semibold rounded"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
