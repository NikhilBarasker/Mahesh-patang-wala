import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeFromCart as removeItem } from "../Components/Redux/Slices/Slices"; 
import { updateCartQuantity } from "../Components/Redux/Slices/Slices";

export default function CartProducts() {
  const cart = useSelector((state) => state.cart.cartProducts);
  console.log("Cart ", cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      dispatch(updateCartQuantity({ ...item, quantity: newQuantity }));
    }
  };

  const discount = 0;
  const shipping = 2;
  const tax = 4;

  const cartPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  const finalAmount = () => {
    return cartPrice + shipping + tax - discount;
  };

  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                className="grid grid-cols-3 items-center gap-4"
                key={item.id}
              >
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src={item.image}
                      className="w-full h-full object-contain"
                      alt={item.category}
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {item.category}
                    </h3>
                    <h6
                      onClick={() => handleRemoveFromCart(item)}
                      className="text-xs text-red-500 cursor-pointer mt-0.5"
                    >
                      Remove
                    </h6>

                    <div className="flex gap-4 mt-4">
                      <div>
                        {/* Quantity Selector with React Icons */}
                        <button
                          type="button"
                          className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                          onClick={() => handleQuantityChange(item, -1)}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="mx-2.5">{item.quantity}</span>
                        <button
                          type="button"
                          className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                          onClick={() => handleQuantityChange(item, 1)}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex ml-auto">
                  <div>
                    <FaRupeeSign />
                  </div>
                  <h4 className="mt-[-5px] ml-[5px] text-base font-bold text-gray-800">
                    {item.price * item.quantity}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <div className="flex border border-blue-600 overflow-hidden rounded-md">
            <input
              type="email"
              placeholder="Promo code"
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              type="button"
              className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white"
            >
              Apply
            </button>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Discount
              <span className=" flex ml-auto font-bold">
                <div className="mt-[5px] mr-[5px]">
                  <FaRupeeSign />
                </div>
                <div> {discount}</div>
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Shipping
              <span className=" flex ml-auto font-bold">
                <div className="mt-[5px] mr-[5px]">
                  <FaRupeeSign />
                </div>
                <div> {shipping}</div>
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Tax
              <span className=" flex ml-auto font-bold">
                <div className="mt-[5px] mr-[5px]">
                  <FaRupeeSign />
                </div>
                <div> {tax}</div>
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total 
              <span className=" flex ml-auto font-bold">
                <div className="mt-[5px] mr-[5px]">
                  <FaRupeeSign />
                </div>
                <div> {finalAmount()}</div>
              </span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Checkout
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-md"
            >
              Checkout with Multiple Addresses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
