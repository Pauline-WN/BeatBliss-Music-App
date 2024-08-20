import React from 'react';
import '../App.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>BeatBliss</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Browse</a>
        <a href="#">Playlist</a>
      </nav>
    </header>
  );
};

export default Header;
