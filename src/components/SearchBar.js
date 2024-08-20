import React, { useState } from 'react';
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);

    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search Widgets..."
      className="w-full p-2 mb-4 border rounded-md dark:bg-gray-600 "
    />
  );
};

export default SearchBar;
