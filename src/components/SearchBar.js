import React from 'react';

const SearchBar = ({ onSearch }) => {

  const handleSearch = (e) => {
  
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Search Widgets..."
      className="w-full p-2 mb-4 border rounded-md dark:bg-gray-600 "
    />
  );
};

export default SearchBar;
