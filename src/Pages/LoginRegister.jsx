import React from 'react';
import { Link } from 'react-router-dom';

function LoginRegister() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-10 bg-white shadow-2xl rounded-lg">
        <div className="flex flex-wrap justify-center items-center">
          {/* Login Box */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <div className="login-box">
              <h2 className="text-3xl font-extrabold mb-5 text-gray-700">Login</h2>
              <form>
                <label htmlFor="username-login" className="block mb-2 font-medium text-gray-700">
                  Username or email address *
                </label>
                <input
                  type="text"
                  id="username-login"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                />

                <label htmlFor="password-login" className="block mb-2 font-medium text-gray-700">
                  Password *
                </label>
                <input
                  type="password"
                  id="password-login"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                />

                <div className="flex items-center mb-4">
                  <input type="checkbox" id="remember-me" className="mr-2" />
                  <label htmlFor="remember-me" className="text-gray-700">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                  Log In
                </button>

                <a href="#" className="block mt-4 text-sm text-blue-700 hover:text-blue-900 transition duration-200 hover:underline">
                  Lost your password?
                </a>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full md:w-1/12 hidden md:flex justify-center items-center">
            <span className="block h-full w-px bg-gray-300"></span>
          </div>

          {/* Register Box */}
          <div className="w-full md:w-5/12">
            <div className="register-box">
              <h2 className="text-3xl font-extrabold mb-5 text-gray-700">Register</h2>
              <form>
                <label htmlFor="username-register" className="block mb-2 font-medium text-gray-700">
                  Username *
                </label>
                <input
                  type="text"
                  id="username-register"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                />

                <label htmlFor="email-register" className="block mb-2 font-medium text-gray-700">
                  Email address *
                </label>
                <input
                  type="email"
                  id="email-register"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                />

                <label htmlFor="password-register" className="block mb-2 font-medium text-gray-700">
                  Password *
                </label>
                <input
                  type="password"
                  id="password-register"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                />

                <div className="flex items-center mb-4">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter" className="text-gray-700">
                    Subscribe to our newsletter
                  </label>
                </div>

                <p className="text-sm text-gray-600 mb-4 text-justify">
                  Your personal data will be used to support your experience throughout this website, to manage access to
                  your account, and for other purposes described in our privacy policy.
                </p>

                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
