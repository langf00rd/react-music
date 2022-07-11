import { useContext, useState } from "react";
import { MusicContext } from "../context";
import more from "../assets/more.svg";

const SongCard = ({ song, index }) => {
  const { playSelected, currentSong } = useContext(MusicContext);

  return (
    <>
      <audio src={null} id="audio" />
      <div
        className={
          song.title === currentSong.title
            ? "song-card active-song-card"
            : "song-card"
        }
        onClick={() => playSelected(song, index)}
      >
        <div className="content">
          <div className="song-cover" />
          <div>
            <p className="song-title">{song.title}</p>
            <p className="song-length">{song.length} mins</p>
          </div>
        </div>
        <img className="more-icon" src={more} alt="more" />
      </div>
    </>
  );
};

export default SongCard;
