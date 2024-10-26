// src/components/Login.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { loginWithGoogle } from '../services/authService'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/home'); // Redirect to Home after successful login
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  // Redirect to home if user is already logged in
  if (user) {
    navigate('/home');
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
