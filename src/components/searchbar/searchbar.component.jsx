import React from "react";
import "./searchbar.style.scss";

const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <div className="container">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
