import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  console.log(store.token);

  return (
    <div>
      {store.token && store.token != "" && store.token != undefined ? (
        <div>Welcome Mr Admin, enjoy your day</div>
      ) : (
        <div>
          {" "}
          <p>You are not allowed to enter this page</p>
          <Link to="Login">
            <button> Go and Log in first!</button>
          </Link>
        </div>
      )}
    </div>
  );
};
