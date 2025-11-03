import { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DisplayWon from "./DisplayWon";
import DisplayLost from "./DisplayLost";

function GameBoard({ isActivePlayer, passTurn, setWinner, gameOver }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 42));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
      </>
    );
  }

  const isWinning = number === 42;
  if (isWinning || gameOver) {
    if (isWinning) {
      setWinner(currentUser);
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
        />
        {/* // X button */}
      </div>
    </>
  );
}

export default GameBoard;
