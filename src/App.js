import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Ensure you have your Firebase config imported
import Home from './components/Home'; // Home component
import Login from './components/Login'; // Login component
import Signup from './components/Signup'; // Signup component
import GetStarted from './components/GetStarted'; // Get Started component

const App = () => {
  const [user, setUser] = useState(null);
  
  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user state directly, null if user is not authenticated
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/get-started" />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
