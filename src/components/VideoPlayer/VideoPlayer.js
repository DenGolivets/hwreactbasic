import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { styled } from '@mui/system';

const PlayerContainer = styled('div')({
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1,
});

const VideoPlayer = ({ url, handleVideoEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  function getVideoIdFromUrl(url) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  }

  return (
          <PlayerContainer>
            <ReactPlayer
              url={`https://www.youtube.com/embed/${getVideoIdFromUrl(url)}`}
              width="1000px"
              height="500px"
              playing={false}
              controls
              onEnded={handleVideoEnd}
            />
          </PlayerContainer>
  );
};

export default VideoPlayer;