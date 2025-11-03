import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DisplayWon from "./DisplayWon";
import DisplayLost from "./DisplayLost";

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
        <button onClick={() => removePlayer(playerIndex)}>Exit</button>
      </>
    );
  }

  if (number === 42 || gameOver) {
    if (number === 42) {
      setWinner(currentUser, moveCounter);
      return <DisplayWon />;
    } else {
      return <DisplayLost />;
    }
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
