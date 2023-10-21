import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/sea/index.css';

interface VideoPlayerProps {
  options: {
    autoplay: boolean
    controls: boolean,
    responsive: boolean,
    fluid: boolean,
    sources: {
      src: string;
      type: string;
    }[],
    poster?: string
  },
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, options, () => {
        console.log('Player is ready');
      });

      return () => {
        player.dispose();
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-theme-sea' controls preload="auto">
        <source src={options.sources[0].src} type={options.sources[0].type} />
      </video>
    </div>
  );
};

export default VideoPlayer;