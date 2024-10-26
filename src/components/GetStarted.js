import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Get Started</h1>
      <p>Welcome! Please log in or sign up to continue.</p>
      <Link to="/login">
        <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Login</button>
      </Link>
      <Link to="/signup">
        <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Sign Up</button>
      </Link>
    </div>
  );
};

export default GetStarted;
