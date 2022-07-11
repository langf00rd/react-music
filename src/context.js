import React, { createContext, useEffect, useState } from "react";
import songs from "./songs";

const MusicContext = createContext();
const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.querySelector("#audio").src = songs[0].url;
  }, []);

  const playSelected = (song, index) => {
    setCurrentSong(song);
    setIsPlaying(true);
    document.querySelector("#audio").src = songs[index].url;
    document.querySelector("#audio").play();
  };

  const play = () => {
    setIsPlaying(true);
    document.querySelector("#audio").play();
  };

  const pause = () => {
    setIsPlaying(false);
    document.querySelector("#audio").pause();
  };

  const next = () => {
    const id = songs.findIndex((value) => value === currentSong);

    if (songs.length === id + 1) {
      playSelected(songs[0], id);
      setCurrentSong(songs[0]);
      return;
    }

    const nextSong = songs[id + 1];
    setCurrentSong(nextSong);
    playSelected(nextSong, id + 1);
  };

  const previous = () => {
    const id = songs.findIndex((value) => value === currentSong);

    if (id === 0) {
      playSelected(songs[songs.length - 1]);
      setCurrentSong(songs[songs.length - 1]);
      return;
    }

    const nextSong = songs[id - 1];
    setCurrentSong(nextSong);
    playSelected(nextSong, id - 1);
  };

  // const previous = () => {
  // const id = songs.findIndex((value) => value.account === currentSong);
  // if (id === 0) {
  //   playOnSelect(songs[songs.length - 1].account);
  //   setCurrentSong(songs[songs.length - 1].account);
  //   return;
  // }
  // const previousSong = songs[id - 1];
  // playOnSelect(previousSong.account);
  // };
  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        play,
        next,
        previous,
        pause,
        playSelected,
        setIsPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
export { MusicProvider, MusicContext };
