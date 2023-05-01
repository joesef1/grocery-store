import React,{useState,useEffect} from 'react'

import {signInWithPopup, signInWithEmailAndPassword , FacebookAuthProvider  } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagebanner from "../components/Pagebanner";
import account from "../assets/images/my-account.jpg";
import { signInWithGoogle , provider ,googleProvider,twitterProvider} from "../firebase-config";


const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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


  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const name = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  // 
  const handleTwitterLogin = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider);
      const name = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  // 

  // const signInWithGooglefunc = () => {
  //   signInWithGoogle().then(() => {
  //     navigate("/");
  //   }).catch(error => {
  //     console.error("Error signing in with Google: ", error);
  //   });
  // }
  const signInWithGooglefunc = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const name = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setErrorMessage(error.message);
    }
  };
  
  

  return (
    <div className="mb-16 mt-18 ">
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

      <div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto border border-[#ececec]">
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




{/*  */}
<div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>

{/*  */}
<div className=" flex justify-center flex-col">  

<button type="button" class=" mx-auto px-7 my-3 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 "  onClick={()=>signInWithGooglefunc()}>
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
   <p className=" text-center sm:px-2  lg:px-11">Sign in with Google</p>
</button>

<button type="button" class=" mx-auto  text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 " onClick={handleFacebookLogin}>
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
   <p className=" text-center sm:px-2  lg:px-11">Sign in with Facebook</p>
</button>

{/* 
<button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2" onClick={handleTwitterLogin}>
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
  Sign in with Twitter
</button> */}



</div>

{/*  */}
{/* <div class="flex justify-center flex-col text-center">  

<button type="button" class="m-auto text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  Sign in with Google
</button>

<button type="button" class="m-auto text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#3b5998]/55 "> 
  Sign in with Facebook
</button>

</div> */}

{/*  */}

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

