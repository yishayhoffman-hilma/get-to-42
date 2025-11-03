import { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function GameBoard({ username, isActivePlayer, passTurn, setWinner }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 42));
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (isSigningUp) {
    return (
      <>
        <RegisterPage setIsSigningUp={setIsSigningUp} />
      </>
    );
  }

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      </>
    );
  }

  const isWinning = number === 42;
  if (isWinning) {
    console.log("turn passed");
    setWinner(username);
  }

  return (
    <>
      <div style={{ opacity: 0.35 + isActivePlayer * 0.65 }}>
        <h2>{username}</h2>
        <h1>{number}</h1>
        <ActionButtons
          number={number}
          setNumber={setNumber}
          passTurn={passTurn}
          isDisabled={!isActivePlayer}
        />
        {/* // X button */}
      </div>
    </>
  );
}

export default GameBoard;
