import "./App.css";
import CurrentStats from "./Components/CurrentStats";
import LastRaceStats from "./Components/CurrentStats";
import TrackSelector from "./Components/TrackSelector";

function App() {
  return (
    <div className="App">
      <h1>Formula One Stats</h1>
      <div className=" home-grid">
        <div>
          <CurrentStats />
        </div>
        <div className="user-select-container center">
          <div className="track-grid">
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
            <TrackSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
