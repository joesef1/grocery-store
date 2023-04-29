import { useState,useEffect } from "react";
import { confirmPasswordReset, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import Pagebanner from "../components/Pagebanner";
import account from "../assets/images/my-account.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const schema = yup.object().shape({
    email: yup.string().email().required("enter email"),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        confirmPasswordReset,
      );
      // navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      //private route
      navigate('/');
    }
  }

  return (
    <div>
      <Pagebanner
        pagename='account'
        imgname={account}
      />
      <div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto">
        <h3 class="text-lg font-bold mb-4">Register User</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
            {...register("email")}
            type="email"
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
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