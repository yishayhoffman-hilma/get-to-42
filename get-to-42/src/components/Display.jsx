import React from "react";
import GameBoard from "./GameBoard";

function Display() {
  return (
    <>
      <GameBoard username={"Blompo"} isActivePlayer={false} />
    </>
  );
}

export default Display;
