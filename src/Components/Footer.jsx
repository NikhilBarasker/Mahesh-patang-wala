import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Show the button when the user scrolls down 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleHomeNavigation = () => {
    navigate('/');
  };

  return (
    <div>
      <footer className="py-14 px-16 font-sans bg-white tracking-wide relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/returns-exchanges"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://facebook.com"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm transition-all text-gray-500 hover:text-black"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="flex items-center lg:justify-center cursor-pointer"
            onClick={handleHomeNavigation}
          >
            <img src={Logo} alt="logo" className="w-60" />
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex sm:justify-between flex-wrap gap-6">
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              className="text-sm transition-all"
            >
              {/* Facebook Icon */}
            </a>
            <a
              href="https://instagram.com"
              className="text-sm transition-all"
            >
              {/* Instagram Icon */}
            </a>
            <a
              href="https://twitter.com"
              className="text-sm transition-all"
            >
              {/* Twitter Icon */}
            </a>
            <a
              href="https://linkedin.com"
              className="text-sm transition-all"
            >
              {/* LinkedIn Icon */}
            </a>
          </div>

          <p className="text-sm">
            Copyright 2024 © MAHESH PATANG WALA Designed & Developed By: Royals Webtech Pvt. Ltd.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-500 rounded-full p-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <FaArrowUp className="text-black w-6 h-6" />
        </div>
      )}
    </div>
  );
}
