import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle } from '../services/authService'; // Correctly import loginWithGoogle

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      setEmail('');
      setPassword('');
      navigate('/'); // Redirect to home after successful login
    } catch (err) {
      setError('Login failed. Please try again.'); // Handle errors
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Call the corrected Google sign-in method
      navigate('/'); // Redirect to home after successful Google login
    } catch (error) {
      setError('Google Sign-In failed. Please try again.'); // Handle errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleLogin}>Sign in with Google</button> {/* Button for Google Sign-In */}
    </div>
  );
};

export default Login;
