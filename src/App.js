import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrowseMusic from "./components/BrowseMusic";
import PlayingNow from "./components/PlayingNow";
import MyPlaylist from "./components/MyPlaylist";
import SharePlaylist from "./components/SharePlaylist";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  const [playingSong, setPlayingSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [volume, setVolume] = useState(() => parseFloat(localStorage.getItem("volume")) || 1);
  const [popupMessage, setPopupMessage] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);

  // Handle song selection
  const handleSongSelect = (song) => {
    setPlayingSong(song);
  };

  // Add song to playlist
  const handleAddToPlaylist = (song) => {
    setPlaylist((prev) => {
      const updatedPlaylist = [...prev, song];
      localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
      setPopupMessage("Added to Playlist Successfully!");
      setTimeout(() => setPopupMessage(""), 3000);
      return updatedPlaylist;
    });
  };

  // Remove song from playlist
  const handleRemoveSong = (index) => {
    setPlaylist((prev) => {
      const updatedPlaylist = prev.filter((_, i) => i !== index);
      localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
      return updatedPlaylist;
    });
  };

  // Play the next song based on current settings
  const handlePlayNext = () => {
    if (playlist.length > 0) {
      const currentIndex = playlist.findIndex(song => song === playingSong);
      const nextIndex = (currentIndex + 1) % playlist.length;
      if (isShuffling) {
        const randomIndex = Math.floor(Math.random() * playlist.length);
        setPlayingSong(playlist[randomIndex]);
      } else if (isLooping || nextIndex !== 0 || (playlist.length > 1)) {
        setPlayingSong(playlist[nextIndex]);
      } else {
        setPlayingSong(null);
      }
    }
  };

  // Toggle shuffle
  const handleShuffleToggle = () => {
    setIsShuffling(prev => !prev);
  };

  // Toggle loop
  const handleLoopToggle = () => {
    setIsLooping(prev => !prev);
  };

  // Toggle replay
  const handleReplayToggle = () => {
    setIsReplaying(prev => !prev);
  };

  // Toggle theme
  const handleToggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Fetch search results
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery) {
        try {
          const response = await fetch(`https://itunes.apple.com/search?term=${searchQuery}&media=music&limit=20`);
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

  // Load saved playlist from localStorage
  useEffect(() => {
    const savedPlaylist = localStorage.getItem("playlist");
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, []);

  // Save volume setting to localStorage
  useEffect(() => {
    localStorage.setItem("volume", volume);
  }, [volume]);

  return (
    <Router>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header 
          isDarkMode={isDarkMode} 
          onToggleTheme={handleToggleTheme} 
          onSearch={handleSearch} 
        />
        <div className="layout">
          <Sidebar isDarkMode={isDarkMode} />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="content-wrapper">
                    <div className="playing-now">
                      <PlayingNow
                        song={playingSong}
                        onAddToPlaylist={handleAddToPlaylist}
                        popupMessage={popupMessage}
                        onPlayNext={handlePlayNext}
                        onShuffle={handleShuffleToggle}
                        onLoop={handleLoopToggle}
                        onReplay={handleReplayToggle}
                        isShuffling={isShuffling}
                        isLooping={isLooping}
                        isReplaying={isReplaying}
                        isDarkMode={isDarkMode}
                      />
                    </div>
                    <div className="browse-music">
                      <BrowseMusic
                        songs={searchQuery ? searchResults : []}
                        onSongSelect={handleSongSelect}
                        isDarkMode={isDarkMode}
                      />
                    </div>
                  </div>
                }
              />
              <Route
                path="/playlist"
                element={
                  <div className="playlist-page">
                    <div className="playing-now">
                      <PlayingNow
                        song={playingSong}
                        onAddToPlaylist={handleAddToPlaylist}
                        popupMessage={popupMessage}
                        onPlayNext={handlePlayNext}
                        onShuffle={handleShuffleToggle}
                        onLoop={handleLoopToggle}
                        onReplay={handleReplayToggle}
                        isShuffling={isShuffling}
                        isLooping={isLooping}
                        isReplaying={isReplaying}
                        isDarkMode={isDarkMode}
                      />
                    </div>
                    <MyPlaylist
                      playlist={playlist}
                      onRemoveSong={handleRemoveSong}
                      onSongSelect={handleSongSelect}
                      isDarkMode={isDarkMode}
                    />
                    <SharePlaylist playlistId="uniquePlaylistId" />
                  </div>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
