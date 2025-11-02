import { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";

function GameBoard() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      {/* // <LoginPage />; */}
      <ActionButtons number={number} setNumber={setNumber} />
      {/* // X button */}
    </>
  );
}

export default GameBoard;
