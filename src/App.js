// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Adjust the path as needed
import Login from './components/Login'; // Adjust the path as needed
import Navbar from './components/Navbar'; // Import Navbar
import { AuthProvider, useAuth } from './context/AuthContext'; // Adjust the path as needed

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Include the Navbar here */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute component={Home} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoute = ({ component: Component }) => {
  const { user } = useAuth();
  return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
