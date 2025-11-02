import React from "react";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";

function Display(props) {
  return (
    <>
      <Navbar addPlayer={props.addPlayer} />
      {props.players.map((value, index) => {
        return <GameBoard key={index} />;
      })}
    </>
  );
}

export default Display;
