// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAGtbEThVsZxPbEg4u4IYXVO6gaueqB-rg",
  authDomain: "project-desainfrontend.firebaseapp.com",
  projectId: "project-desainfrontend",
  storageBucket: "project-desainfronteemail, passwordpspot.com",
  messagingSenderId: "391696473378",
  appId: "1:391696473378:web:0a57be59a4747205b2d97b",
  measurementId: "G-X78ZSKPS3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);
