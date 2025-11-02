import { useState } from "react";
import ActionButtons from "./ActionButtons";
import LoginPage from "./LoginPage";

function GameBoard() {
  const [number, setNumber] = useState(0);
  <LoginPage />;
  <ActionButtons number={number} setNumber={setNumber} />;
  // X button
}

export default GameBoard;
