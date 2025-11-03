import React, { useState } from "react";

function LoginPage(props) {
  const [userNameField, setUserNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  function checkLoginInfo(event) {
    event.preventDefault();
    if (localStorage.getItem(userNameField)) {
      if (
        passwordField ===
        JSON.parse(localStorage.getItem(userNameField)).password
      ) {
        props.setCurrentUser(userNameField);
        props.setIsLoggedIn(true);
      }
    }
  }

  return (
    <>
      <h3>login</h3>
      <form
        action=""
        onSubmit={checkLoginInfo}
        style={{ display: "flex", flexDirection: "column" }}
      >
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
      </form>
      <button onClick={() => props.setIsSigningUp(true)}>sign up</button>
    </>
  );
}

export default LoginPage;
