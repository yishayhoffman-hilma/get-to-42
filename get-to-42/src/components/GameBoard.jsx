import { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";

function GameBoard({ username, isActivePlayer, passTurn }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 42));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isWinning = number === 42;
  // const isLoggedIn = false; // temp value

  return (
    <>
      {isLoggedIn && (
        <div style={{ opacity: 0.5 + isActivePlayer * 0.5 }}>
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
      )}

      {!isLoggedIn && <LoginPage setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
}

export default GameBoard;
