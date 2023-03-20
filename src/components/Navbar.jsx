import React,{ useContext } from 'react'
import { MyContext } from '../context/context-authstate';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import Sidenav from '../components/Sidenav';
import { RxHamburgerMenu } from 'react-icons/rx';
import useOpenNavStore from '../statestore/OpenNavStore';







const Navbar = () => {
  const openNav = useOpenNavStore((state) => state.openNav)

  

  const navigate = useNavigate();
  const  user  = useContext(MyContext);
  
  const logout = async () => {
    await signOut(auth);
    navigate("/Login");
  };

  return (
    <>
    <div>
    <Sidenav/>
    <div className='cursor-pointer' onClick={openNav}>
    <RxHamburgerMenu/>
    </div>

      <Link to="/">Home </Link>
      {user ? (
        <button onClick={logout}> Sign Out </button>
      ) : (
        <Link className='text-slate-500	' to="/Login">Login </Link>
      )}
      
      </div>
    </>
  );
};

export default Navbar
