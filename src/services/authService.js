// src/services/authService.js
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

// Login with Google
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Return user information or do further processing
    return user;
  } catch (error) {
    console.error("Error logging in with Google: ", error);
    throw error;
  }
};

// Other authentication methods (if any)
