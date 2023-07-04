import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
// import logo from "./logo.png";
function Login() {
  const histroy = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          histroy("/");
        }
      })
      .catch((err) => alert(err.message));
    //firebase login
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created the user
        console.log(auth);
        if (auth) {
          histroy("/");
        }
      })
      .catch((err) => alert(err.message));
    //firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.pngmart.com/files/Amazon-Logo-PNG-Free-Download.png"
          className="login_logo"
          alt="logo"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon-clone's Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create New Account
        </button>
      </div>
    </div>
  );
}

export default Login;
