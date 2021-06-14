import React from 'react';
import './search-box.styles.css';

// use functional component if you don't need internal state nor lifecycle methods
// easier to read and test than class component
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  ></input>
);
