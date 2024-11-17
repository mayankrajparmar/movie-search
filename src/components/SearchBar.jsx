import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="w-full max-w-4xl flex items-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none "
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-[#020c1f] text-white rounded-r-md hover:bg-[#020c1f]/90"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
