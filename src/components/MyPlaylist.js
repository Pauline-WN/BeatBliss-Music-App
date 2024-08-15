import React, { useState } from 'react';

const MyPlaylist = ({ playlist, onRemoveSong }) => {
  const [playlistName, setPlaylistName] = useState('MyPlaylist');

  const handleRename = (e) => {
    setPlaylistName(e.target.innerText);
  };

  return (
    <div className="my-playlist">
      <h2 contentEditable onBlur={handleRename}>
        {playlistName}
      </h2>
      {playlist.map((song, index) => (
        <div key={index} className="playlist-item">
          <img src={song.artworkUrl100} alt={song.trackName} />
          <h3>{song.trackName}</h3>
          <button onClick={() => onRemoveSong(index)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default MyPlaylist;
