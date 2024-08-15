import React, { useState } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedSearch = debounce(onSearch, 500);

  const handleSearch = () => {
    debouncedSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs or artists"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;