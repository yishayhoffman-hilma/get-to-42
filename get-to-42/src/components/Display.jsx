import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";

function Display({ players, addPlayer }) {
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
  }

  return (
    <>
      <Navbar addPlayer={addPlayer} />
      {players.map((item, index) => {
        console.log(index);
        return (
          <GameBoard
            username={"Blompo"}
            isActivePlayer={currentTurn === index}
            passTurn={passTurn}
            key={index}
          />
        );
      })}
    </>
  );
}

export default Display;
