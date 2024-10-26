import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust based on your context setup

const Home = () => {
  const { user, logOut } = useAuth(); // Assuming you're getting user info from context

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <p>Email: {user.email}</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Home;
