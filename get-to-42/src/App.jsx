import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayer() {
    if (players.length < 4) {
      setPlayers((prevPlayers) => {
        return [...prevPlayers, {}];
      });
    }
  }

  return (
    <>
      <Display players={players} addPlayer={addPlayer} />
      <Leaderboard />
    </>
  );
}

export default App;
