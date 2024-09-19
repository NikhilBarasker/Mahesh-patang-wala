import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.cartProducts);

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.address) validationErrors.address = "Address is required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = 'tel:9021763610';
    }
  };

  return (
    <div className="mx-auto bg-white py-8 md:px-8">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>

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
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-600">Quantity: </span>
                      <span className="ml-2 text-lg font-bold">{item.quantity}</span>
                    </div>
                  </div>
                </div>

                <div className="flex text-lg font-bold text-center">
                  <FaRupeeSign className="mt-1" />
                  {(item.price * item.quantity).toFixed(0)}
                </div>
              </div>
            ))
          ) : (
            <h3>Your Cart is Empty</h3>
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

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
              >
                Place Order
              </button>

              <p className="text-gray-600 text-sm mt-4 text-center">
                For placing orders, call us at: <a href="tel:9021763610" className="text-blue-600 hover:underline">9021763610</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
