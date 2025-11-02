import React from "react";

const ActionButtons = ({ number, setNumber }) => {
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(number * 2)}>*2</button>
      <button onClick={() => setNumber(Math.floor(number / 2))}>/2</button>
    </>
  );
};

export default ActionButtons;
