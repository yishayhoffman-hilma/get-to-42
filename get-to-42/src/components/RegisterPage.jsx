import React, { useState } from "react";

function RegisterPage() {
  const [userNameField, setUserNameField] = useState();
  const [passwordField, setPasswordField] = useState();

  function checkUserAviabilty() {
    if (!localStorage.getItem(userNameField)) {
      localStorage.setItem(userNameField, { password: passwordField });
      alert("user registered succsesfully");
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

export default RegisterPage;
