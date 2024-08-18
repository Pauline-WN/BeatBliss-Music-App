import React, { useState } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  // Ensure onSearch is a function before debouncing it
  const debouncedSearch = React.useMemo(() => debounce(onSearch, 500), [onSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for songs or artists"
      />
    </div>
  );
};

export default SearchBar;
