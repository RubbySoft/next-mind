// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed
import './Navbar.css'; // Ensure you have the necessary styles

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the sliding menu

  const handleLogout = () => {
    logOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">NextMind</div>
      <div className="navbar-menu">
        {user ? (
          <>
            <div className="profile-menu" onClick={toggleMenu}>
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className="profile-pic" 
              />
            </div>
            <div className={`sliding-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="menu-item">{user.displayName}</div>
              <div className="menu-item">{user.email}</div>
              <div className="menu-item logout-btn" onClick={handleLogout}>Logout</div>
            </div>
          </>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
