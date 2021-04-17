import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <form>
          <h1>Sign-In</h1>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit">
            Continue
          </button>
          <p>
            By continuing, you agree to this Amazon clone's Conditions of Use
            and Privacy Notice.
          </p>
        </form>
        <div className="login__divider">
          <p>New to Amazon clone?</p>
        </div>

        <button onClick={register} type="submit">
          Create your Amazon clone account
        </button>
      </div>
    </div>
  );
}

export default Login;
