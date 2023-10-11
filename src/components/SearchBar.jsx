import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search in the todos..."
      className="input_search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
