import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

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
const googleProvider = new GoogleAuthProvider();

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

// Authenticate with the provider using a popup window
// firebase.auth().signInWithPopup(facebookprovider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);
//     // ...
//   });
