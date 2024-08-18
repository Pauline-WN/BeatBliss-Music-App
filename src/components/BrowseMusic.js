import React, { useEffect, useState } from 'react';

const BrowseMusic = ({ songs = [], onSongSelect, isDarkMode }) => {
  const [defaultSongs, setDefaultSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (songs.length === 0) {
      fetch('https://itunes.apple.com/search?term=pop&limit=25')
        .then((response) => response.json())
        .then((data) => {
          setDefaultSongs(data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [songs]);

  const displayedSongs = songs.length > 0 ? songs : defaultSongs;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`grid ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {displayedSongs.map((song) => (
        <div
          key={song.trackId}
          className={`song-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
          onClick={() => onSongSelect(song)}
        >
          <img src={song.artworkUrl100} alt={song.trackName} />
          <h3>{song.trackName}</h3>
          <p>{song.artistName}</p>
        </div>
      ))}
    </div>
  );
};

export default BrowseMusic;
