import React, { useState } from "react";

function LoginPage({ setIsLoggedIn }) {
  const [userNameField, setUserNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  function checkLoginInfo(event) {
    event.preventDefault();
    if (localStorage.getItem(userNameField)) {
      console.log("entered first if");
      console.log(localStorage.getItem(userNameField));

      if (passwordField === localStorage.getItem(userNameField)) {
        console.log("second");
        setIsLoggedIn(true);
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
    </>
  );
}

export default LoginPage;
