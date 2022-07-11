import { MusicProvider } from "./context";
import MusicPlayer from "./components/musicPlayer";
import "./App.css";

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
