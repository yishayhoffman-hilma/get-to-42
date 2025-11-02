import { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";

function GameBoard({ username, isActivePlayer, passTurn }) {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div style={{ opacity: 0.5 + isActivePlayer * 0.5 }}>
        <h2>{username}</h2>
        <h1>{number}</h1>
        {/* // <LoginPage />; */}
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
