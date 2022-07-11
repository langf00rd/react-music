import Controls from "../components/controls";
import SongCard from "../components/songCard";
import songs from "../songs";

function MusicPlayer() {
  return (
    <div>
      <h1>🎵 React Music 🎵</h1>
      <main>
        {songs.map((song, i) => {
          return <SongCard key={i} index={i} song={song} />;
        })}
      </main>
      <Controls />
      <p>Made with 💛</p>
    </div>
  );
}

export default MusicPlayer;
