import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";

function Display({ players, addPlayer }) {
  const [currentTurn, setCurrentTurn] = useState(0);

  function passTurn() {
    const numberOfPlayers = players.length;

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
      <div style={{ display: "flex" }}>
        {players.map((item, index) => {
          console.log("INDEX", index);
          return (
            <GameBoard
              key={index}
              username={"Blompo"}
              isActivePlayer={currentTurn === index}
              passTurn={passTurn}
            />
          );
        })}
      </div>
    </>
  );
}

export default Display;
