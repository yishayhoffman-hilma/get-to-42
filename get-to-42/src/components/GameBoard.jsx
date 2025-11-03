import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DisplayWon from "./DisplayWon";
import DisplayLost from "./DisplayLost";
import ExitButton from "./ExitButton";

function GameBoard({
  isActivePlayer,
  removePlayer,
  passTurn,
  setWinner,
  gameOver,
  playerIndex,
}) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 42));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moveCounter, setMoveCounter] = useState(0);
  // console.log(moveCounter, currentUser);

  if (isSigningUp) {
    return (
      <>
        <RegisterPage
          setIsSigningUp={setIsSigningUp}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ExitButton removePlayer={removePlayer} playerIndex={playerIndex} />
      </>
    );
  }

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setIsSigningUp={setIsSigningUp}
          setCurrentUser={setCurrentUser}
        />
        <ExitButton removePlayer={removePlayer} playerIndex={playerIndex} />
      </>
    );
  }

  if (number === 42) {
    setNumber("42");
    setWinner(currentUser, moveCounter);
  }

  if (number === "42") {
    localStorage.setItem("last-winner", localStorage.getItem(currentUser));
    return (
      <>
        <DisplayWon />
        <ExitButton removePlayer={removePlayer} playerIndex={playerIndex} />
      </>
    );
  }
  if (gameOver) {
    return (
      <>
        <DisplayLost />
        <ExitButton removePlayer={removePlayer} playerIndex={playerIndex} />
      </>
    );
  }

  return (
    <>
      <div style={{ opacity: 0.35 + isActivePlayer * 0.65 }}>
        <h2>{currentUser}</h2>
        <h1>{number}</h1>
        <ActionButtons
          number={number}
          setNumber={setNumber}
          passTurn={passTurn}
          isDisabled={!isActivePlayer}
          setMoveCounter={setMoveCounter}
        />
      </div>
    </>
  );
}

export default GameBoard;
