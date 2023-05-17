// import { useState,useEffect } from "react";
// import { confirmPasswordReset, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase-config";
// import { useNavigate } from 'react-router-dom';
// import Pagebanner from "../components/Pagebanner";
// import account from "../assets/images/my-account.jpg";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const Signup = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const schema = yup.object().shape({
//     email: yup.string().email().required("enter email"),
//     password: yup.string().min(8).max(20).required(),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Passwords Don't Match")
//       .required(),
//   });

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const navigate = useNavigate();
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");

//   const registerUser = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword,
//         confirmPasswordReset,
//       );
//       // navigate("/Home");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     if (data) {
//       //private route
//       navigate("/Home");
//     }
//   }

























import { useState, useEffect, useCallback,useRef  } from "react";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import Pagebanner from "../components/Pagebanner";
import account from "../assets/images/my-account.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { storeUserEmail } from '../store/supportstaff/userSlice';



const Signup = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const schema = yup.object().shape({
    email: yup.string().email().required("Enter email"),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");



  //hooking registerEmail to the store
  // const [registerEmailstate, setRegisterEmailstate] = useState(registerEmail);

  //dispatch
const saveEmailToStore = () => {
  dispatch(storeUserEmail(registerEmail))
  console.log(registerEmail);
}




  const [emailcheckstate, setEmailcheckstate] = useState(false);


  
  const registerUser = async () => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, registerEmail);
      if (signInMethods.length > 0) {
        // Email is already in use, display an error message
        console.log('Email is already registered');

        // notify()
        setEmailcheckstate(true)






        return;
      }
  
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      // User account created successfully, proceed with navigation
      navigate("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Perform additional form validation if needed
  
      // Register the user
      await registerUser();
    } catch (error) {
      console.log(error.message);
    }
  };
  
  

  const notifyRef = useRef();

  const notify = useCallback(() => {
    if (notifyRef.current) {
      notifyRef.current();
    }
  }, []);
  
  notifyRef.current = () => {
    toast.warning('This email is already taken', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="mb-[70px]">
      <Pagebanner
        pagename='account'
        imgname={account}
      />

{emailcheckstate && (
          // <div class="text-red-500 text-sm mb-4">{errorMessage}</div>
<div className="flex justify-center">
<div class=" w-[40%]  flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Erorr!</span> this Email is already taken!
  </div>
</div>
</div>
        )}

      <div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto ">
        <h3 class="text-lg font-bold mb-4">Register User</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
            {...register("email")}
            type="email"
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
              saveEmailToStore()
            }}
          />
          <p className="text-red-500 mb-2 translate-y-[-3px]">{errors.email?.message}</p>
          <input
            class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
            {...register("password")}
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <p className="text-red-500 mb-2 translate-y-[-3px]">{errors.password?.message}</p>
          <input
            class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
            {...register("confirmPassword")}
            type="password"
            placeholder="confirm Password..."
            onChange={(event) => {
              setPasswordConfirmation(event.target.value);
            }}
          />
          <p className="text-red-500 mb-2 translate-y-[-3px]">{errors.confirmPassword?.message}</p>

          <div className="text-center w-[100%] ">
            <button
              type="submit"
              class="bg-[#212121] mx-auto mt-6 w-[100%] text-white font-bold py-2 px-4 rounded-lg"
              onClick={registerUser}
            >
              Create User
            </button>
          </div>
        </form>     
      </div>
    </div>
  )
}

export default Signup