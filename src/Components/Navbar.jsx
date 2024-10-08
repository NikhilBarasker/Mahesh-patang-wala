import { useState } from "react";
import { FaStoreAlt, FaShoppingCart } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate, NavLink} from "react-router-dom";
import Logo from "../assets/Logo.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts
  );
  const cartProducts = useSelector(
    (state) => state.cart.cartProducts
  );

  const category = [
    { name: "Earrings", path: "/earring" },
    { name: "Rings", path: "/ring" },
    { name: "Key Chains", path: "/keychain" },
    { name: "Wallet", path: "/wallet" },
    { name: "Caps", path: "/cap" },
    { name: "Goggles", path: "/goggle" },
    { name: "Bracelets", path: "/bracelet" },
    { name: "Watch", path: "/watch" },
    { name: "Special offers", path: "/offer" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handelhomenavigation = () => {
    navigate("/");
  };

  const wishListNavigation = () => {
    navigate("/wishlist");
  };
  const cartNavigation = () => {
    navigate("/cart");
  };

    const totalCartQuantity = cartProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );

  return (
    <header className="fixed top-0 left-0 w-full shadow-md font-[sans-serif] tracking-wide z-50 bg-white">
      <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]">
        <div className="flex items-center justify-between max-lg:flex-col">
          <div
            onClick={handelhomenavigation}
            className="shrink-0 max-lg:mb-3 cursor-pointer"
          >
            <img src={Logo} alt="logo" className="w-[100px] ml-[60px]" />
          </div>

          <div className="flex items-center w-full max-lg:w-full max-lg:flex-row max-lg:space-x-2">
            <input
              type="text"
              placeholder="Search something..."
              className="xl:w-96 max-lg:w-full lg:ml-10 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
            />

            <li className="max-lg:py-2 max-lg:px-3 cursor-pointer list-none lg:hidden">
              <span className="relative">
                <IoMdHeartEmpty
                  onClick={wishListNavigation}
                  className="inline"
                  size={22}
                />
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {wishlistProducts.length}
                </span>
              </span>
            </li>

            <li onClick={cartNavigation} className="max-lg:py-2 max-lg:px-3 cursor-pointer list-none lg:hidden">
              <span className="relative">
                <FaShoppingCart className="inline" size={20} />
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                {totalCartQuantity}
                </span>
              </span>
            </li>

            <li id="toggleOpen" className="lg:hidden list-none">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu className="w-7 h-7" fill="#333" />
              </button>
            </li>
          </div>
        </div>

        <div className="flex items-center justify-between w-full max-lg:flex-col max-lg:mt-4">
          <div className="ml-auto flex items-center">
            <ul className="flex items-center justify-between w-full">
              <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] cursor-pointer">
                <FaStoreAlt className="mr-2" size={20} />
                Stores and Services
              </li>
              <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] cursor-pointer">
                <MdGroups className="mr-2" size={20} />
                Community
              </li>
              <Link to="/register">
                <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff] lg:flex hidden">
                  <button className="px-4 py-2 text-sm hover:bg-black hover:text-white rounded font-semibold text-[#333] border-2 border-[#333] bg-transparent">
                    Sign In
                  </button>
                </li>
              </Link>

              <li className="max-lg:hidden flex text-[15px] max-lg:py-2 px-3 cursor-pointer">
                <span className="relative">
                  <IoMdHeartEmpty
                    onClick={wishListNavigation}
                    className="inline"
                    size={22}
                  />
                  <span
                    onClick={cartNavigation}
                    className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white"
                  >
                    {wishlistProducts.length}
                  </span>
                </span>
              </li>
              <li onClick={cartNavigation} className="max-lg:hidden flex text-[15px] max-lg:py-2 px-3 cursor-pointer">
                <span className="relative">
                  <FaShoppingCart className="inline" size={20} />
                  <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {totalCartQuantity}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="hidden md:flex items-center justify-center py-3 bg-gray-100">
        <nav className="flex gap-5 space-x-4 mr-[400px]">
        {category.map((item) => (
  <NavLink
    key={item.name}
    to={item.path}
    className={`text-[#333] text-[15px] font-medium duration-200 
      ${item.path === window.location.pathname ? "text-blue-500" : "text-gray-700"} 
      hover:text-[#007bff] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`}
    onClick={() => handleNavigation(item.path)}
     >
    {item.name}
  </NavLink>
))}
        </nav>
      </div>

      <div
        id="collapseMenu"
        className={`fixed inset-0 z-50 bg-white transition-transform duration-500 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-between`}
      >
        <button
          id="toggleClose"
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-100 shadow-lg hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 ease-in-out"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose className="w-7 h-7 text-gray-800" />
        </button>

        <ul className="flex flex-col flex-grow mt-16 space-y-6 overflow-y-auto">
          {category.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="py-3 px-6 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
            >
              <Link
                to={item.path}
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black text-lg font-semibold block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 py-4">
          <Link to="/register" onClick={() => setMenuOpen(!menuOpen)}>
            <button className="w-full px-4 py-2 text-xs sm:text-sm hover:bg-black hover:text-white rounded font-semibold text-[#333] border-2 border-[#333] bg-transparent">
              Sign In
            </button>
          </Link>
        </div>

        <div className="pb-8 px-6">
          <p className="text-center text-gray-500 text-sm">
            Copyright 2024 © MAHESH PATANG WALA Designed & Developed By: Royals
            Webtech Pvt. Ltd.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
