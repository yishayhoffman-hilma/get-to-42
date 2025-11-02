import React from "react";

const ActionButtons = ({ number, setNumber, passTurn, isEnabled }) => {
  return (
    <>
      <button
        disabled={isEnabled}
        onClick={() => {
          setNumber(number + 1);
          passTurn();
        }}
      >
        +1
      </button>
      <button
        disabled={isEnabled}
        onClick={() => {
          setNumber(number - 1);
          passTurn();
        }}
      >
        -1
      </button>
      <button
        disabled={isEnabled}
        onClick={() => {
          setNumber(number * 2);
          passTurn();
        }}
      >
        *2
      </button>
      <button
        disabled={isEnabled}
        onClick={() => {
          setNumber(Math.floor(number / 2));
          passTurn();
        }}
      >
        /2
      </button>
    </>
  );
};

export default ActionButtons;
