import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import '../CSS/Login.css';

const firebaseConfig = {
  // Aquí debes poner la configuración de Firebase que obtienes al crear una nueva aplicación en la consola de Firebase.
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