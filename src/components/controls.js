import { useContext } from "react";
import { MusicContext } from "../context";
import playIcon from "../assets/play.svg";
import nextIcon from "../assets/next.svg";
import pauseIcon from "../assets/pause.svg";
import previousIcon from "../assets/previous.svg";

const Controls = () => {
  const { isPlaying, pause, play, next, previous } = useContext(MusicContext);

  return (
    <>
      <audio src={null} id="audio" />
      <div className="controls">
        <img
          src={previousIcon}
          onClick={previous}
          alt="previous"
          className="next-prev-icon"
        />
        {isPlaying ? (
          <div className="control-icon" onClick={pause}>
            <img src={pauseIcon} alt="pause" />
          </div>
        ) : (
          <div className="control-icon" onClick={play}>
            <img src={playIcon} alt="pause" />
          </div>
        )}
        <img
          src={nextIcon}
          onClick={next}
          alt="next"
          className="next-prev-icon"
        />
      </div>
    </>
  );
};

export default Controls;
