// src/components/Login.tsx
import React, { useState, useEffect } from 'react';
import '../../css/loginform.css';  // ← adjust path if needed

const Login: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword]       = useState('');
  const [darkMode, setDarkMode]       = useState(false);

  // On darkMode change, toggle 'dark' class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ emailOrPhone, password });
  };

  return (
    <div className="login-container">
      {/* Dark/Light Mode toggle */}
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(dm => !dm)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>


      {/* Login Card */}
      <div className="login-card">
        {/* Logo & Title */}
        <div className="form-group" style={{ textAlign: 'center' }}>
          <img src="/rlogo.jpg" alt="Recover Logo" width={64} height={64} />
          <h1>RECOVER</h1>
          <p>by <strong>MEDLINE</strong></p>
        </div>

        {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-group">
            <label>Email ID / Phone</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter email or phone"
              value={emailOrPhone}
              onChange={e => setEmailOrPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <a className="reset-link" href="#">Reset Password</a>
          </div>
        </div>

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <button className="btn-secondary">
          Login with Code
        </button>
      </div>
    </div>
  );
};

export default Login;
