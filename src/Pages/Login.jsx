import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import '../CSS/Login.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI7mmdYk7Wkv1RcoDy7gnhCkuAIcC-8Ss",
  authDomain: "uaohub.firebaseapp.com",
  projectId: "uaohub",
  storageBucket: "uaohub.appspot.com",
  messagingSenderId: "287422487472",
  appId: "1:287422487472:web:9e9c1c14b217b2e5c31475",
  measurementId: "G-F28SFNBETW"
};

firebase.initializeApp(firebaseConfig);

const Login = () => {
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
    <div className="login">
      <h1>Iniciar sesión</h1>
      <div className="form">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleEmailLogin}>Iniciar sesión con correo electrónico</button>
        <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
        <button onClick={handleFacebookLogin}>Iniciar sesión con Facebook</button>
      </div>
    </div>
  );
};

export default Login;