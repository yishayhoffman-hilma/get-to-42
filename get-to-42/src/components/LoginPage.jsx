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
      <form
        action=""
        onSubmit={checkLoginInfo}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3>login</h3>
        <label>username:</label>
        <input
          type="text"
          name="username"
          onChange={(event) => {
            setUserNameField(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label>password:</label>
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setPasswordField(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input type="submit" />
        <button onClick={() => props.setIsSigningUp(true)}>sign up</button>
      </form>
    </>
  );
}

export default LoginPage;
