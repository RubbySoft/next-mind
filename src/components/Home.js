import React from 'react';
import { auth } from '../firebaseConfig';

const Home = () => {
  const user = auth.currentUser; // Get the currently logged-in user

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      {user ? (
        <div>
          <h2>Hello, {user.displayName || user.email}</h2>
          {/* You can display other user info here */}
          <button onClick={() => auth.signOut()}>Logout</button>
        </div>
      ) : (
        <h2>Please log in to see your dashboard</h2>
      )}
    </div>
  );
};

export default Home;
