import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeFromCart, updateCartQuantity } from "../Components/Redux/Slices/Slices";
import { Link } from "react-router-dom";

export default function CartProducts() {
  const cart = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
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
    return (cartPrice + shipping + tax - discount).toFixed(2);
  };
  

  return (
    <div className=" mx-auto bg-white py-8 md:px-8">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-md">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-20 h-20 object-contain md:ml-10 md:mb-2"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.category}</h3>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      disabled={item.quantity === 1}
                      onClick={() => handleQuantityChange(item, -1)}
                      className="px-2 py-1 text-gray-600"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="px-2 py-1">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="px-2 py-1 text-gray-600"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="flex text-lg font-bold text-center md:mt-4 mt-2">
                    <FaRupeeSign className="mt-1" />
                    {(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center p-10 text-center">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-lg text-gray-500">
                Browse our products and add items to your cart
              </p>
             <Link to="/"> <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
                Start Shopping
              </button></Link>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="bg-gray-50 p-8 rounded-md">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>

            <ul>
              <li className="flex justify-between mb-2">
                <span>Discount</span>
                <span className="flex gap-1">
                  {discount}
                  <FaRupeeSign className="mt-[3px]"/>
                </span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Shipping</span>
                <span className="flex gap-1">
                {shipping}
                  <FaRupeeSign className="mt-[3px]"/>
                  
                </span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Tax</span>
                <span className="flex gap-1">
                  {tax}
                  <FaRupeeSign className="mt-[3px]"/>
                </span>
              </li>
              <li className="flex justify-between font-bold">
                <span>Total</span>
                <span className="flex gap-1">
                  {finalAmount()}
                  <FaRupeeSign className="mt-[3px]"/>
                </span>
              </li>
            </ul>
  <Link to="/checkout">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-4 w-full">
              Checkout
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}