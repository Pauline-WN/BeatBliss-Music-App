import React from 'react';

const SharePlaylist = ({ playlistId }) => {
  const handleShare = () => {
    const shareURL = `${window.location.origin}/playlist/${playlistId}`;
    navigator.clipboard.writeText(shareURL);
    alert('Playlist URL copied to clipboard!');
  };

  return (
    <div className="share-playlist">
      <button onClick={handleShare}>Share Playlist</button>
    </div>
  );
};

export default SharePlaylist;
