import { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  Pagebanner  from "../components/Pagebanner";
import  account  from "../assets/images/my-account.jpg";

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
      <Pagebanner
      pagename='account'
      imgname={account}
      />
    {/* <div>
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
    </div> */}

<div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto">
  <h3 class="text-lg font-bold mb-4">Login</h3>
  <input
    class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
    type="email"
    placeholder="Email..."
    onChange={(event) => {
      setLoginEmail(event.target.value);
    }}
  />
  <input
    class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
    type="password"
    placeholder="Password..."
    onChange={(event) => {
      setLoginPassword(event.target.value);
    }}
  />
  <div class="text-center w-[100%]">
    <button
      class="bg-[#212121] mx-auto mt-6 w-[100%] text-white font-bold py-2 px-4 rounded-lg"
      onClick={login}
    >
      Login
    </button>
  </div>
  <div class="text-center mt-4">
    <p>
      Don't have an account? <Link to="/Signup" class="text-blue-500">Register</Link>
    </p>
  </div>
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
