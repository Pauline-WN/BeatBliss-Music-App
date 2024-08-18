import React from 'react';

const Sidebar = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "sidebar dark-mode" : "sidebar light-mode"}>
      <h2>Navigate</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/playlist">My Playlist</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
