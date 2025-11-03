import { useState } from "react";

function Leaderboard(props) {
  const [topPlayers, setTopPlayers] = useState(
    localStorage.getItem("top-players")
  );

  const [topScores, setTopScores] = useState(
    localStorage.getItem("top-scores")
  );

  if (localStorage.getItem(!"top-scores")) {
    localStorage.setItem("top-scores", props.topScores);
    localStorage.setItem("top-players", props.topPlayers);
  }

  function updateLeaderBoard(player) {
    if (player.averageMoves < topScores[2]) {
      if (player.averageMoves < topScores[1]) {
        if (player.averageMoves < topScores[0]) {
          setTopScores((prevScores) => {
            let temp = [...prevScores];
            temp[0] = player.averageMoves;
            return temp;
          });
          setTopPlayers((prevTops) => {
            let temp = [...prevTops];
            temp[0] = player.name;
            return temp;
          });
        } else {
          setTopScores((prevScores) => {
            let temp = [...prevScores];
            temp[1] = player.averageMoves;
            return temp;
          });
          setTopPlayers((prevTops) => {
            let temp = [...prevTops];
            temp[1] = player.name;
            return temp;
          });
        }
      } else {
        setTopScores((prevScores) => {
          let temp = [...prevScores];
          temp[2] = player.averageMoves;
          return temp;
        });
      }
    }
  }

  updateLeaderBoard(props.player);

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
