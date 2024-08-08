// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Ensure this file name matches exactly

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // Example validation (replace with actual logic)
    if (email === 'user@example.com' && password === 'password') {
      setShowMsg(false);
      // Redirect to another page after successful login
      navigate('/dashboard');
    } else {
      setShowMsg(true);
    }
  };

  return (
    <div className="login-container">
      {!showMsg ? (
        <div className="login">
          <img src="/assets/images/logo.png" alt="Logo" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="button">
              <button type="submit">Login</button>
            </div>
            <div className="forgot">
              <h4>Not a user? Click <a href="/signon">here</a></h4>
            </div>
          </form>
        </div>
      ) : (
        <div className="login">
          <img src="/assets/images/logo.png" alt="Logo" />
          <form onSubmit={handleSubmit}>
            <h3 style={{ color: '#ff4d4d' }}>You have entered wrong credentials..!</h3>
            <div className="forgot">
              <h4 style={{ margin: '20px' }}>
                Want to try again? <a href="#!" onClick={() => setShowMsg(false)}>Click here!</a>
              </h4>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
