import { useState } from "react";
import {signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login}> Login</button>
      </div>

      <div>
        <p>
          Don't have an account? <Link to="/Signup">Register </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
































































































// import { useState } from "react";
// import {
//   signInWithEmailAndPassword,
//   // onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase-config";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';




// const Login = () => {

//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const [loginUser, setloginUser] = useState({});

//   // onAuthStateChanged(auth, (currentUser) => {
//   //   setUser(currentUser);
//   // });

//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       const loginUser = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(loginUser);
//     navigate('/');

//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return (
//     <div>
      

//       <div>
//         <h3> Login </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//         />

//         <button onClick={login}> Login</button>
//       </div>

//       {loginUser && (<h4>loginUser name: </h4> )}

      
//       {/* {loginUser?.email} */}

//       <div>
//         <p>dont have account <a><Link to="/Signup">register </Link></a></p>
//       </div>
//     </div>
//   )
// }



// export default Login



// import { useState } from "react";
// import {
//   signInWithEmailAndPassword,
  
// } from "firebase/auth";
// import { auth } from "../firebase-config";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

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

//   return (
//     <div>
//       <div>
//         <h3> Login </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//         />
//         <button onClick={login}> Login</button>
//       </div>

//       <div>
//         <p>
//           Don't have an account? <Link to="/Signup">Register </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
