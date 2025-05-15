import React, { useState } from "react";
import { MapPin } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
      >
        <div className="flex items-center pl-4 pr-2">
          <MapPin className="h-6 w-6 text-gray-400" />
        </div>

        <input
          type="text"
          placeholder="Search By Name"
          className="flex-1 py-4 px-2 text-gray-700 focus:outline-none text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-medium py-4 px-10 transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
