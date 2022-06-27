import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const token = sessionStorage.getItem("token");
  const history = useHistory();
  console.log("this is your token: " + store.token);

  const handleClick = () => {
    actions.login(email, password);
    history.push("/");
  };

  if (store.token && store.token != "" && store.token != undefined) {
    console.log("deberia hacer refresh");
    history.push("/");
  }

  return (
    <div className="text-center mt-5">
      <h1>Log in!</h1>

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
          <button onClick={handleClick}>LOG IN</button>
        </div>
      )}
    </div>
  );
};
