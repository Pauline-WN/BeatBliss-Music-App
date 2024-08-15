import React from 'react';

const PlayingNow = ({ song, onBackToList, onAddToPlaylist }) => {
  if (!song) return null;

  return (
    <div className="playing-now">
      <img src={song.artworkUrl100} alt={song.trackName} />
      <h2>{song.trackName}</h2>
      <p>{song.artistName}</p>
      <audio controls src={song.previewUrl} />
      <button onClick={onBackToList}>Back to List</button>
      <button onClick={() => onAddToPlaylist(song)}>Add to Playlist</button>
    </div>
  );
};

export default PlayingNow;