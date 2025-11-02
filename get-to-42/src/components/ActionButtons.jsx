import React from "react";

const ActionButtons = ({ number, setNumber }) => {
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>+1</button>
    </>
  );
};

export default ActionButtons;
