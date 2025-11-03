import React from "react";

function ExitButton({ removePlayer, playerIndex }) {
  return (
    <>
      <button onClick={() => removePlayer(playerIndex)}>Exit</button>
    </>
  );
}

export default ExitButton;
