import { useState } from "react";

function Leaderboard() {
  const [topPlayers, setTopPlayers] = useState(["p1", "p2", "p3"]);
  const [topScores, setTopScores] = useState([0, 0, 0]);
  localStorage.setItem("top-scores", topScores);

  function updateLeaderBoard(player) {
    if (player.score > topScores[2]) {
      if (player.score > topScores[1]) {
        if (player.score > topScores[0]) {
          topScores[0] = player.score;
          topPlayers[0] = player;
        } else {
          topScores[1] = player.score;
          topPlayers[1] = player;
        }
      } else {
        topScores[2] = player.score;
        topPlayers[2] = player;
      }
    }
  }

  return (
    <>
      <ol>
        <li>{topPlayers[0] + ":" + topScores[0]}</li>
        <li>{topPlayers[1] + ":" + topScores[1]}</li>
        <li>{topPlayers[2] + ":" + topScores[2]}</li>
      </ol>
    </>
  );
}

export default Leaderboard;
