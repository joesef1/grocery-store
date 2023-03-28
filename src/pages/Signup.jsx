import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import  Pagebanner  from "../components/Pagebanner";
import  account  from "../assets/images/my-account.jpg";





const Signup = () => {
  const navigate = useNavigate();

  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate('/');

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
      <div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto">
  <h3 class="text-lg font-bold mb-4">Register User</h3>
  <input
    class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
    type="email"
    placeholder="Email..."
    onChange={(event) => {
      setRegisterEmail(event.target.value);
    }}
  />
  <input
    class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
    type="password"
    placeholder="Password..."
    onChange={(event) => {
      setRegisterPassword(event.target.value);
    }}
  />
  <div className="text-center w-[100%] ">
    <button
      class="bg-[#212121] mx-auto mt-6 w-[100%] text-white font-bold py-2 px-4 rounded-lg"
      onClick={register}
    >
      Create User
    </button>
  </div>
</div>
    </div>
  )
}

export default Signup
