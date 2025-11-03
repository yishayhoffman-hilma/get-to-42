import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [players, setPlayers] = useState([]);

  const [topPlayers, setTopPlayers] = useState(["p1", "p2", "p3"]);
  const [topScores, setTopScores] = useState([0, 0, 0]);

  function addPlayer() {
    if (players.length < 4) {
      setPlayers((prevPlayers) => {
        return [...prevPlayers, {}];
      });
    }
  }

  function removePlayer(userIndex) {
    setPlayers((prev) => {
      return prev.filter((item, index) => {
        return index !== userIndex;
      });
    });
  }

  return (
    <>
      <Display
        players={players}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
      <Leaderboard
        setTopPlayers={setTopPlayers}
        setTopScores={setTopScores}
        topPlayers={topPlayers}
        topScores={topScores}
        player={localStorage.getItem("last-winner")}
      />
    </>
  );
}

export default App;
