import React, { useState} from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const MyContext = React.createContext();

function ContexAuthState({children}) {
  

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <MyContext.Provider value={user}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, ContexAuthState };









// const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [loginUser, setLoginUser] = useState(null);

  // const updateLoginUser = (user) => {
  //   setLoginUser(user);
  // };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       updateLoginUser(user);
  //     } else {
  //       updateLoginUser(null);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);








// const Login = ({ updateLoginUser }) => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       updateLoginUser(user);
//       navigate("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     // Set up the listener
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, update the login user state
//         updateLoginUser(user);
//       } else {
//         // User is signed out, update the login user state to null
//         updateLoginUser(null);
//       }
//     });

//     // Return a cleanup function to unsubscribe the listener when the component unmounts
//     return () => unsubscribe();
//   }, [updateLoginUser]);

