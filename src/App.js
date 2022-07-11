import { MusicProvider } from "./context";
import SongCard from "./components/songCard";
import Controls from "./components/controls";
import songs from "./songs";
import "./App.css";
import MusicPlayer from "./components/musicPlayer";

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
}

export default App;
