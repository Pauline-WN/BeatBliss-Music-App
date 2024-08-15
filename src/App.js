import React, { useState, useEffect } from "react";
import BrowseMusic from "./components/BrowseMusic";
import PlayingNow from "./components/PlayingNow";
import MyPlaylist from "./components/MyPlaylist";
import SearchBar from "./components/SearchBar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SharePlaylist from "./components/SharePlaylist";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [playingSong, setPlayingSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSongSelect = (song) => {
    setPlayingSong(song);
  };

  const handleAddToPlaylist = (song) => {
    setPlaylist((prev) => [...prev, song]);
  };

  const handleRemoveSong = (index) => {
    setPlaylist((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery) {
        try {
          const response = await fetch(
            `https://itunes.apple.com/search?term=${searchQuery}&media=music&limit=20`
          );
          if (response.ok) {
            const data = await response.json();
            setSearchResults(data.results || []);
          } else {
            setSearchResults([]);
            console.error("Error fetching data:", response.status);
          }
        } catch (error) {
          setSearchResults([]);
          console.error("Error fetching data:", error);
        }
      } else {
        setSearchResults([]);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Header />
      <SearchBar onSearch={handleSearch} />

      <ThemeSwitcher
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />
      {playingSong ? (
        <PlayingNow
          song={playingSong}
          onBackToList={() => setPlayingSong(null)}
          onAddToPlaylist={handleAddToPlaylist}
        />
      ) : searchQuery ? (
        <BrowseMusic songs={searchResults} onSongSelect={handleSongSelect} />
      ) : (
        <BrowseMusic onSongSelect={handleSongSelect} />
      )}
      <MyPlaylist playlist={playlist} onRemoveSong={handleRemoveSong} />
      <SharePlaylist playlistId="uniquePlaylistId" />
      <Footer />
    </div>
  );
}

export default App;