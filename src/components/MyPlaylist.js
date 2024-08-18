import React from 'react';

const MyPlaylist = ({ playlist, onRemoveSong, onSongSelect }) => {
  const handleRename = (e) => {
    // Handle playlist renaming here if needed
  };

  if (!playlist) {
    return <div className="my-playlist">No playlist available</div>;
  }

  return (
    <div className="my-playlist">
      <h2
        contentEditable
        onBlur={handleRename}
        suppressContentEditableWarning
      >
        My Playlist
      </h2>
      {playlist.map((song, index) => (
        <div key={index} className="playlist-item">
          <img src={song.artworkUrl100} alt={song.trackName} />
          <div className="song-info">
            <h3 onClick={() => onSongSelect(song)}>{song.trackName}</h3>
          </div>
          <button className="remove-button" onClick={() => onRemoveSong(index)}>
            &times; {/* Unicode character for "×" */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyPlaylist;
