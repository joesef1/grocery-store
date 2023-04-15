// import { useState } from "react";
// import {signInWithEmailAndPassword} from "firebase/auth";
// import { auth } from "../firebase-config";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import  Pagebanner  from "../components/Pagebanner";
// import  account  from "../assets/images/my-account.jpg";

// const Login = () => {
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

//       navigate("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };


//   return (
//     <div>
//       <Pagebanner
//       pagename='account'
//       imgname={account}
//       />
//     {/* <div>
//         <div>
//           <h3> Login </h3>
//           <input
//             placeholder="Email..."
//             onChange={(event) => {
//               setLoginEmail(event.target.value);
//             }}
//           />
//           <input
//             placeholder="Password..."
//             onChange={(event) => {
//               setLoginPassword(event.target.value);
//             }}
//           />
//           <button onClick={login}> Login</button>
//         </div>
      
//         <div>
//           <p>
//             Don't have an account? <Link to="/Signup">Register </Link>
//           </p>
//         </div>
//     </div> */}

// <div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto">
//   <h3 class="text-lg font-bold mb-4">Login</h3>
//   <input
//     class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
//     type="email"
//     placeholder="Email..."
//     onChange={(event) => {
//       setLoginEmail(event.target.value);
//     }}
//   />
//   <input
//     class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
//     type="password"
//     placeholder="Password..."
//     onChange={(event) => {
//       setLoginPassword(event.target.value);
//     }}
//   />
//   <div class="text-center w-[100%]">
//     <button
//       class="bg-[#212121] mx-auto mt-6 w-[100%] text-white font-bold py-2 px-4 rounded-lg"
//       onClick={login}
//     >
//       Login
//     </button>
//   </div>
//   <div class="text-center mt-4">
//     <p>
//       Don't have an account? <Link to="/Signup" class="text-blue-500">Register</Link>
//     </p>
//   </div>
// </div>




//     </div>
//   );
// };

// export default Login;
























































































import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagebanner from "../components/Pagebanner";
import account from "../assets/images/my-account.jpg";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Pagebanner pagename="account" imgname={account} />
      {errorMessage && (
          // <div class="text-red-500 text-sm mb-4">{errorMessage}</div>
<div className="flex justify-center">
<div class=" w-[40%]  flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Erorr!</span> incorrect Email or Password.
  </div>
</div>
</div>


































        )}
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
            Don't have an account?{" "}
            <Link to="/Signup" class="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

