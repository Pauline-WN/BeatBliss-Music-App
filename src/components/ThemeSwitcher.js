import React from 'react';

const ThemeSwitcher = ({ isDarkMode, onToggleTheme }) => {
  return (
    <div className="theme-switcher">
      <button onClick={onToggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
