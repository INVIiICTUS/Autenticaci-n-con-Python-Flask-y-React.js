import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  // const token = sessionStorage.getItem("token");
  const history = useHistory();

  const handleClick = () => {
    alert("User Created in DB");
    if (password == password2) {
      actions.signup(email, password);
      history.push("/");
      console.log("User created correctly");
    } else {
      alert("Password do not match");
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Sign up!</h1>

      {store.token && store.token != "" && store.token != undefined ? (
        "You are loggin in with this token" + store.token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {"  "}
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {"  "}
          <input
            type="password"
            placeholder="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
          {"  "}
          <button onClick={handleClick}>Sign up</button>
        </div>
      )}
    </div>
  );
};
