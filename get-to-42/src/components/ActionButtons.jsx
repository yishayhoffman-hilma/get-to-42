import React from "react";

const ActionButtons = ({ number, setNumber, passTurn, isDisabled }) => {
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={() => {
          setNumber(number + 1);
          passTurn();
        }}
      >
        +1
      </button>
      <button
        disabled={isDisabled}
        onClick={() => {
          setNumber(number - 1);
          passTurn();
        }}
      >
        -1
      </button>
      <button
        disabled={isDisabled}
        onClick={() => {
          setNumber(number * 2);
          passTurn();
        }}
      >
        *2
      </button>
      <button
        disabled={isDisabled}
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
