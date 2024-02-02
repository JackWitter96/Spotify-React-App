import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

// If song is playing show PAUSE icon else show PLAY icon
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  (isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle 
      size={35}
      className='text-gray-300'
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle 
      size={35}
      className='text-gray-300'
      onClick={handlePlay}
    />
  ));

export default PlayPause;
