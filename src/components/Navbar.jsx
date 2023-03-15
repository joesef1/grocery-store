import React,{ useContext } from 'react'
import { MyContext } from '../context/context-authstate';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";




const Navbar = () => {

  const navigate = useNavigate();
  const  user  = useContext(MyContext);
  
  const logout = async () => {
    await signOut(auth);
    navigate("/Login");
  };

  return (
    <>
  
      <Link to="/">Home </Link>

      {user ? (
        <button onClick={logout}> Sign Out </button>
      ) : (
        <Link to="/Login">Login </Link>
      )}
    </>
  );
};

export default Navbar
