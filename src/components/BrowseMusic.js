import React, { useEffect, useState } from 'react';

const BrowseMusic = ({ onSongSelect }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=pop&limit=25')
      .then((response) => response.json())
      .then((data) => setSongs(data.results));
  }, []);

  return (
    <div className="grid">
      {songs.map((song) => (
        <div key={song.trackId} className="song-card" onClick={() => onSongSelect(song)}>
          <img src={song.artworkUrl100} alt={song.trackName} />
          <h3>{song.trackName}</h3>
          <p>{song.artistName}</p>
        </div>
      ))}
    </div>
  );
};

export default BrowseMusic;
