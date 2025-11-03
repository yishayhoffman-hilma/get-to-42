import React from "react";
import Display from "./Display";

function ExitButton({ removePlayer, playerIndex }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{ height: 50 }}
          onClick={() => removePlayer(playerIndex)}
        >
          Exit
        </button>
      </div>
    </>
  );
}

export default ExitButton;
