import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";


//firestore
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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



//google
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};


// Create an instance of the Facebook provider object
export const provider = new FacebookAuthProvider();

export const twitterProvider = new TwitterAuthProvider();


//firestore
export const commentsdb = getFirestore(app);
export const storage = getStorage(app);
