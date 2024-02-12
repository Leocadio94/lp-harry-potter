import { useRef, useState } from "react";
import { MdOutlinePlayArrow, MdOutlinePlayDisabled } from "react-icons/md";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player">
      <button
        className={`audio-player__button ${
          isPlaying
            ? "audio-player__button--playing"
            : "audio-player__button--stopped"
        }`}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <MdOutlinePlayArrow size={"30px"} />
        ) : (
          <MdOutlinePlayDisabled size={"30px"} />
        )}
      </button>
      <audio ref={audioRef} src={"/audio/harry-potter-theme.ogg"} />
    </div>
  );
  1;
  0;
};

export default AudioPlayer;
