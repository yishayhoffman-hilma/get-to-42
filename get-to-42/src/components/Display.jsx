import React from "react";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";

function Display(props) {
  return (
    <>
      <Navbar addPlayer={props.addPlayer} />
      {props.players.map(() => {
        return <GameBoard />;
      })}
    </>
  );
}

export default Display;
