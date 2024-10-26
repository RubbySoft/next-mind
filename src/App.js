// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Adjust the path as needed
import Login from './components/Login'; // Adjust the path as needed
import GetStarted from './components/GetStarted'; // Import your GetStarted component
import { AuthProvider, useAuth } from './context/AuthContext'; // Adjust the path as needed

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute component={Home} />} />
          <Route path="*" element={<Navigate to="/get-started" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoute = ({ component: Component }) => {
  const { user } = useAuth();
  return user ? <Component /> : <Navigate to="/get-started" />;
};

export default App;
