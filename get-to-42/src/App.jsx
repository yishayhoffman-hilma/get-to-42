import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Leaderboard from "./components/Leaderboard";

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayer() {
    const id = generateUUID();
    if (players.length < 4) {
      setPlayers((prevPlayers) => {
        return [...prevPlayers, { id }];
      });
    }
  }

  function removePlayer(userIndex) {
    setPlayers((prev) => {
      const t = prev.filter((item, index) => {
        return index !== userIndex;
      });
      return t;
    });
  }

  return (
    <>
      <Display
        players={players}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
      <Leaderboard />
    </>
  );
}

export default App;
