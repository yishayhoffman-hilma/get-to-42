import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";
import DisplayLost from "./DisplayLost";

function Display({ players, addPlayer }) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function setWinner(username) {
    console.log(username, "has won");
    setGameOver(true);
  }

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
          return (
            <GameBoard
              key={index}
              username={"Blompo"}
              isActivePlayer={currentTurn === index}
              passTurn={passTurn}
              setWinner={setWinner}
              gameOver={gameOver}
            />
          );
        })}
      </div>
    </>
  );
}

export default Display;
