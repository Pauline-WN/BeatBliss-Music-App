import React from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ isDarkMode, onToggleTheme, onSearch }) => {
  return (
    <header>
      <h1>BeatBliss</h1>
      <div className="header-content">
        <SearchBar onSearch={onSearch} />
        <ThemeSwitcher isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      </div>
    </header>
  );
};

export default Header;
