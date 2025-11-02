import React from "react";

const ActionButtons = ({ number, setNumber, passTurn }) => {
  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
          passTurn();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
          passTurn();
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setNumber(number * 2);
          passTurn();
        }}
      >
        *2
      </button>
      <button
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
