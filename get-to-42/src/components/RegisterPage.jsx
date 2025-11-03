import React, { useState } from "react";

function RegisterPage(props) {
  const [userNameField, setUserNameField] = useState();
  const [passwordField, setPasswordField] = useState();

  function checkUserAviabilty(event) {
    event.preventDefault();
    console.log(passwordField);

    if (!localStorage.getItem(userNameField)) {
      localStorage.setItem(
        userNameField,
        JSON.stringify({
          password: passwordField,
          averageMoves: NaN,
          gamesAmount: 0,
        })
      );
      alert("user registered succsesfully");
      props.setIsSigningUp(false);
    } else {
      alert("username unavailable");
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={checkUserAviabilty}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3>register</h3>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(event) => {
            setUserNameField(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(event) => {
            setPasswordField(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input type="submit" />
        <button onClick={() => props.setIsSigningUp(false)}>login</button>
      </form>
    </>
  );
}

export default RegisterPage;
