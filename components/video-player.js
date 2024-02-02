import styles from "../styles/video-player.module.css";
import { useRef } from "react";

const VideoPlayer = ({src}) => {

	const videoRef = useRef(null);
  const handleMouseEnter = () => {
		videoRef.current.playbackRate = 1.5;

    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
		videoRef.current.currentTime = 0;
  };

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={src}
        loop
        muted
      ></video>
      <div className={styles.videoOverlay}></div>
    </div>
  );
};

export default VideoPlayer 
