// src/components/Signup.js
import React, { useState } from "react";
import { signUpWithEmail } from "../services/authService";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      alert("Signup successful!");
    } catch (error) {
      alert("Signup error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
