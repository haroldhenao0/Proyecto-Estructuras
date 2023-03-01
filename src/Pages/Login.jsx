import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {useAuth} from '../context/authContext';
import '../CSS/Contraseña.css';

export function Login() {
  const [username, setUser] = useState({
    Username: "",
    Password: "",
  });
  

  const {singup}= useAuth()

  const handleChange = ({target: {name, value}}) =>
    setUser({...username, [name]: value })

  const handleLogin = (event) => {
    event.preventDefault();
    singup(username.Username, username.Password)

  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="title-login">
        <h2 className="login-title">Log in with E-mail</h2>
        </div>
        <div className="form-group">
          <label htmlFor="username">E-mail</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='uaohub@uao.edu.co'
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='**********'
            onChange={handleChange}
          />
        </div>
        <button className="login-button" type="submit">Log in</button>
        <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
      </form>
    </div>
  );
}