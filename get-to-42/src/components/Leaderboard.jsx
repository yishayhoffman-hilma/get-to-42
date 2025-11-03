function Leaderboard(props) {
  if (localStorage.getItem(!"top-scores")) {
    localStorage.setItem("top-scores", props.topScores);
  }

  function updateLeaderBoard(player) {
    if (player.score > props.topScores[2]) {
      if (player.score > props.topScores[1]) {
        if (player.score > props.topScores[0]) {
          props.topScores[0] = player.score;
          props.topPlayers[0] = player;
        } else {
          props.topScores[1] = player.score;
          props.topPlayers[1] = player;
        }
      } else {
        props.topScores[2] = player.score;
        props.topPlayers[2] = player;
      }
    }
  }

  updateLeaderBoard(props.player);

  return (
    <>
      <ol>
        <li>{props.topPlayers[0] + ":" + props.topScores[0]}</li>
        <li>{props.topPlayers[1] + ":" + props.topScores[1]}</li>
        <li>{props.topPlayers[2] + ":" + props.topScores[2]}</li>
      </ol>
    </>
  );
}

export default Leaderboard;
