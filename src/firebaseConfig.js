// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0VwkJIS6aalOQ5mXj9aK4bDnU5A7_-08",
  authDomain: "nextmind-ebcc8.firebaseapp.com",
  projectId: "nextmind-ebcc8",
  storageBucket: "nextmind-ebcc8.appspot.com",
  messagingSenderId: "1025854768905",
  appId: "1:1025854768905:web:087fe54fedb1531c9b75d8",
  measurementId: "G-9VNT5BB2KG" // Optional, only needed if you’re using Firebase Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export default app;
