import { useState } from "react";

export default function SidebarFilter({ onFilterChange }) {
  const [price, setPrice] = useState(500);
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({ price, category: categories });
  };

  return (
    <div className="w-fit p-4 bg-gray-100 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block">Max Price: ₹{price}</label>
        <input
          type="range"
          min="10"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-black"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block">Category</label>
        <div className="space-y-2">
          {[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ].map((cat) => (
            <div key={cat} className="flex items-center">
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="mr-2"
              />
              <label>{cat}</label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-[150px] bg-black h-[50px] my-2 mx-auto rounded-xl cursor-pointer text-white hover:bg-green-600 transition-all"
      >
        Apply Filters
      </button>
    </div>
  );
}
