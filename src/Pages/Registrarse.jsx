import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import '../CSS/Login.css';

export const Registrarse = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Successfully logged in with email and password.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      console.log("Successfully logged in with Google.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      console.log("Successfully logged in with Facebook.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
    <div className="login">
    <div className="title-login">
      <h1>Log in</h1>
      </div>
        <button onClick={handleGoogleLogin}>Login with google</button>
        <button onClick={handleFacebookLogin}>Login with Facebook</button>
        <button onClick={handleEmailLogin}>Login with e-mail</button>
      </div>
    </div>
  );
};