import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtUbNNxITMvDSCRs9ECdJEehA7WxqdcA",
  authDomain: "ecommerce-22354.firebaseapp.com",
  projectId: "ecommerce-22354",
  storageBucket: "ecommerce-22354.appspot.com",
  messagingSenderId: "225393935685",
  appId: "1:225393935685:web:bd7f343bd355c82d0f6a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
