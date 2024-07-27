import Search from "../../DAL/icons/search.svg";

import { useState, useCallback } from "react";

import "./styles.css";

export const SearchBar = ({ searchByKeyWord }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      searchByKeyWord(value);
    }, 500),
    []
  );

  const searchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-text-and-btn">
        <p className="search-text">Search quotes by key word or phrases</p>
        <img src={Search} alt="search" className="search-btn"></img>
      </div>

      <input
        type="text"
        placeholder="Write here"
        className="search-input"
        name="search"
        value={searchTerm}
        onChange={searchInput}
      />
    </div>
  );
};
