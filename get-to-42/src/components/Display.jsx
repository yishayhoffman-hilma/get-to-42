import React, { useState } from "react";
import GameBoard from "./GameBoard";

function Display() {
  const [currentTurn, setCurrentTurn] = useState(0);

  function passTurn() {
    const numberOfPlayers = 2;

    if (currentTurn + 1 === numberOfPlayers) {
      setCurrentTurn(0);
    } else {
      setCurrentTurn((prev) => {
        return prev + 1;
      });
    }
    console.log(currentTurn);
  }

  return (
    <>
      <GameBoard
        username={"Blompo"}
        isActivePlayer={currentTurn === 0}
        passTurn={passTurn}
      />
    </>
  );
}

export default Display;
