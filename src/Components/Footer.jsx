import Logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {

  const navigate = useNavigate()

  const handlehomenavigation = () => {
    navigate('/')
  }

  return (
    <div>
      <footer className="py-14 px-16 font-sans bg-white tracking-wide relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className=" text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Feedback
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h2 className=" text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-4">
              <li>
               <Link to ="/contact">
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Contact
                </a>
                </Link>
              </li>
              <li>
               <Link to="/about">
                <a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  About
                </a>
                </Link>
              </li>
              <li>
                <Link to="/terms"><a
                  href="javascript:void(0)"
                  className=" text-sm transition-all text-gray-500 hover:text-black"
                >
                  Terms &amp; Conditions
                </a>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="flex items-center lg:justify-center cursor-pointer"
            onClick={handlehomenavigation}
          >
            <img src={Logo} alt="logo" className="w-60" />
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex sm:justify-between flex-wrap gap-6">
          <div className="flex space-x-5">
            <a href="javascript:void(0)" className=" text-sm transition-all">
              <svg
                className="w-5 h-5 fill-gray-400 hover:fill-black"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"
                ></path>
              </svg>
            </a>
            <a href="javascript:void(0)" className=" text-sm transition-all">
              <svg
                className="w-5 h-5 fill-gray-400 hover:fill-black"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"
                ></path>
              </svg>
            </a>
            <a href="javascript:void(0)" className=" text-sm transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-gray-400 hover:fill-black w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-gray-400 hover:fill-black w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.2c3.2 0 3.584.013 4.85.07 1.174.054 1.91.24 2.36.4a4.891 4.891 0 011.77 1.16 4.892 4.892 0 011.16 1.77c.16.45.346 1.186.4 2.36.057 1.266.07 1.65.07 4.85s-.013 3.584-.07 4.85c-.054 1.174-.24 1.91-.4 2.36a4.892 4.892 0 01-1.16 1.77 4.891 4.891 0 01-1.77 1.16c-.45.16-1.186.346-2.36.4-1.266.057-1.65.07-4.85.07s-3.584-.013-4.85-.07c-1.174-.054-1.91-.24-2.36-.4a4.891 4.891 0 01-1.77-1.16 4.891 4.891 0 01-1.16-1.77c-.16-.45-.346-1.186-.4-2.36C2.213 15.584 2.2 15.2 2.2 12s.013-3.584.07-4.85c.054-1.174.24-1.91.4-2.36a4.891 4.891 0 011.16-1.77A4.891 4.891 0 015.6 2.6c.45-.16 1.186-.346 2.36-.4C9.416 2.213 9.8 2.2 12 2.2zm0-2.2C9.735 0 9.332.014 8.052.073 6.756.13 5.553.362 4.512.8 3.467 1.241 2.59 1.92 1.92 2.59 1.241 3.467.8 4.344.36 5.39c-.437 1.041-.67 2.244-.727 3.54C-.014 9.332 0 9.735 0 12c0 2.265.014 2.668.073 3.948.057 1.296.29 2.499.727 3.54.437 1.046 1.121 1.92 1.56 2.56a5.941 5.941 0 002.56 1.56c1.041.437 2.244.67 3.54.727C9.332 23.986 9.735 24 12 24c2.265 0 2.668-.014 3.948-.073 1.296-.057 2.499-.29 3.54-.727a5.941 5.941 0 002.56-1.56 5.941 5.941 0 001.56-2.56c.437-1.041.67-2.244.727-3.54C23.986 14.668 24 14.265 24 12c0-2.265-.014-2.668-.073-3.948-.057-1.296-.29-2.499-.727-3.54a5.941 5.941 0 00-1.56-2.56 5.941 5.941 0 00-2.56-1.56c-1.041-.437-2.244-.67-3.54-.727C14.668.014 14.265 0 12 0zm0 5.82a6.18 6.18 0 100 12.36 6.18 6.18 0 000-12.36zm0 10.18a4 4 0 110-8 4 4 0 010 8zm6.406-11.645a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <p className=" text-sm">Copyright 2024 © MAHESH PATANG WALA Designed & Developed By: Royals Webtech Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
