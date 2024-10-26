import { auth } from '../firebaseConfig'; // Adjust the import as per your project structure
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // You can add additional logic here, like saving user data in your database
    return user;
  } catch (error) {
    console.error("Google Sign-In Error", error);
    throw error; // Re-throw the error for handling in the component
  }
};

// Other existing exports...
export const loginWithEmail = async (email, password) => {
  // Your email login logic
};

export const signUpWithEmail = async (email, password) => {
  // Your signup logic
};

export const logOut = async () => {
  // Your logout logic
};
