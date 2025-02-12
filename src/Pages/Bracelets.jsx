import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist, addToCart, removeFromCart } from "../Components/Redux/Slices/Slices";
import { FaRupeeSign } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import SidebarFilter from "../Components/SidebarFilter";

export default function Bracelets({ api }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: [], price: 10000 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.wishlistProducts);
  const cart = useSelector((state) => state.cart.cartProducts);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        applyFilters(data, filters);
      });
  }, [api]);

  useEffect(() => {
    applyFilters(products, filters);
  }, [filters]);

  const applyFilters = (data, filters) => {
    if (!data || !Array.isArray(data)) return;
    let updatedProducts = [...data];

    if (filters.category.length > 0) {
      updatedProducts = updatedProducts.filter((product) => filters.category.includes(product.category));
    }

    if (filters.price !== undefined) {
      updatedProducts = updatedProducts.filter((product) => product.price <= filters.price);
    }

    setFilteredProducts(updatedProducts);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleProductView = (product) => {
    navigate("/productview", { state: { product } });
  };

  const toggleWishlist = (item) => {
    const isWishlisted = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
    if (isWishlisted) {
      dispatch(removeFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const toggleCart = (item) => {
    const isInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (isInCart) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <div className="flex">

      {/* Sidebar (with Close Button) */}
      <div
        className={`w-64 bg-gray-100 p-4 fixed md:static top-0 left-0 h-full md:h-screen z-50 md:z-0 transition-transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 shadow-lg`}
        style={{ height: "100vh" }}
      >
        {/* Close Button for Mobile */}
        {isFilterOpen && (
          <button
            className="absolute top-2 right-4 text-xl text-gray-700 font-bold"
            onClick={() => setIsFilterOpen(false)}
          >
            ✖
          </button>
        )}

        <SidebarFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Products Section */}
      <div className="w-full md:w-3/4 p-2">
      <div className="relative mb-4 px-4 flex items-center justify-center">
  {/* Filters Button (Left Side) */}
  <button
    className="absolute left-0 bg-gray-900 text-white px-4 py-2 rounded-md flex items-center gap-2 md:hidden"
    onClick={() => setIsFilterOpen(true)}
  >
    <CiFilter size={20} /> Filters
  </button>

  {/* Page Title (Centered) */}
  <h1 className="text-2xl font-bold">Bracelets</h1>
</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded relative shadow-lg hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 cursor-pointer" onClick={() => toggleWishlist(product)}>
                {wishlist.some((wishlistItem) => wishlistItem.id === product.id) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FF6F61" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <CiHeart className="text-gray-800" size={25} />
                )}
              </div>
              <img src={product.image} alt={product.title} className="h-40 mx-auto cursor-pointer" onClick={() => handleProductView(product)} />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600 py-2 flex items-center justify-between">
                <span className="flex items-center">
                  <FaRupeeSign /> {product.price}
                </span>
                <span className="flex items-center text-yellow-500">
                  ⭐ {product.rating?.rate || "No Ratings"} 
                  <span className="text-gray-500 text-sm ml-1">({product.rating?.count || 0} reviews)</span>
                </span>
              </p>
              {cart.some((cartItem) => cartItem.id === product.id) ? (
                <div className="w-[150px] bg-gray-200 h-[50px] my-2 mx-auto rounded-xl flex items-center justify-center text-[#333] font-bold">
                  Added to Cart
                </div>
              ) : (
                <button
                  onClick={() => toggleCart(product)}
                  className="w-[150px] bg-black h-[50px] my-2 mx-auto rounded-xl flex items-center justify-center cursor-pointer text-white hover:bg-green-600 transition-all"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
