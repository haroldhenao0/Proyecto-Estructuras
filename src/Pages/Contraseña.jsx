import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../CSS/Contraseña.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="login-button" type="submit">Log in</button>
        <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
      </form>
    </div>
  );
}

export default Login;