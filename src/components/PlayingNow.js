import React, { useRef, useEffect } from 'react';

const PlayingNow = ({
  song,
  onAddToPlaylist,
  popupMessage,
  onPlayNext,
  onShuffle,
  onLoop,
  onReplay,
  isShuffling,
  isLooping,
  isReplaying,
  isDarkMode // Add isDarkMode prop
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [song]);

  const handleSongEnd = () => {
    if (isReplaying) {
      audioRef.current.play();
    } else if (onPlayNext) {
      onPlayNext();
    }
  };

  if (!song || !song.trackName) {
    return (
      <div className={`playing-now ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h2>No song is currently playing</h2>
        <p>Select a song to start playing.</p>
      </div>
    );
  }

  return (
    <div className={`playing-now ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <img src={song.artworkUrl100} alt={song.trackName} />
      <h2>{song.trackName}</h2>
      <p>{song.artistName}</p>
      <audio
        ref={audioRef}
        controls
        src={song.previewUrl}
        autoPlay
        onEnded={handleSongEnd}
      />
      {popupMessage && <div className="popup">{popupMessage}</div>}
      <div className="controls-container">
        <button
          onClick={onShuffle}
          className={`control-button ${isDarkMode ? 'dark-mode-button' : 'light-mode-button'}`}
          style={{ backgroundColor: isShuffling ? (isDarkMode ? '#555' : 'darkblue') : (isDarkMode ? '#333' : '#007bff') }}
        >
          {isShuffling ? 'Unshuffle' : 'Shuffle'}
        </button>
        <button
          onClick={onLoop}
          className={`control-button ${isDarkMode ? 'dark-mode-button' : 'light-mode-button'}`}
          style={{ backgroundColor: isLooping ? (isDarkMode ? '#555' : 'darkblue') : (isDarkMode ? '#333' : '#007bff') }}
        >
          {isLooping ? 'Unloop' : 'Loop'}
        </button>
        <button
          onClick={onReplay}
          className={`control-button ${isDarkMode ? 'dark-mode-button' : 'light-mode-button'}`}
          style={{ backgroundColor: isReplaying ? (isDarkMode ? '#555' : 'darkblue') : (isDarkMode ? '#333' : '#007bff') }}
        >
          {isReplaying ? 'Stop Replay' : 'Replay'}
        </button>
        <button onClick={() => onAddToPlaylist(song)} className={`control-button ${isDarkMode ? 'dark-mode-button' : 'light-mode-button'}`}>
          Add to Playlist
        </button>
      </div>
    </div>
  );
};

export default PlayingNow;
