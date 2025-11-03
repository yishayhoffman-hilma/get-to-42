import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";
import DisplayLost from "./DisplayLost";

function calcAverage(currentAverage, gamesWon, amountOfMoves) {
  if (currentAverage === null) return amountOfMoves;
  const newAverage =
    (currentAverage * gamesWon + amountOfMoves) / (gamesWon + 1);
  return newAverage;
}

function Display({ players, addPlayer, removePlayer }) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function setWinner(username, amountOfMoves) {
    const userData = JSON.parse(localStorage.getItem(username));

    userData.averageMoves = calcAverage(
      userData.averageMoves,
      userData.gamesWon,
      amountOfMoves
    );
    userData.gamesWon++;

    localStorage.setItem(username, JSON.stringify(userData));

    console.log(username, "has won with", amountOfMoves, "moves");
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
              key={"gameboard" + index}
              username={"Blompo"}
              isActivePlayer={currentTurn === index}
              passTurn={passTurn}
              setWinner={setWinner}
              gameOver={gameOver}
              removePlayer={removePlayer}
              playerIndex={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Display;
