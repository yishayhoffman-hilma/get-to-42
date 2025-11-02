import React from "react";
import { useState } from "react";

function LoginPage() {
  const [userNameField, setUserNameField] = useState();
  const [passwordField, setPasswordField] = useState();

  return (
    <>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
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
          onChange={() => {}}
        />
        <input type="submit" onSubmit={checkLoginInfo} />
      </form>
    </>
  );
}

function checkLoginInfo(event) {
  event.preventDefault();
}

export default LoginPage;
