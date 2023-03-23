// function handleClickOutside(event) {
//   if ( searchRef.current && searchRef.current.contains(event.target)) {
//     // console.log("ok");
//     // showinput()
//     if (!currentSearchState) {
//       hideinput()
//     }else{
//       showinput()
//     }
//   } else{
//     hideinput()
//   }


import React,{ useContext , useRef, useEffect  } from 'react'
import { MyContext } from '../context/context-authstate';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import Sidenav from '../components/Sidenav';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import useOpenNavStore from '../statestore/OpenNavStore';
import SearchState from '../statestore/SearchState';

const Navbar = () => {
  const openNav = useOpenNavStore((state) => state.openNav)
  const currentSearchState = SearchState((state) => state.currentSearchState)
  const { showinput, hideinput } = SearchState();


  
  const inputRef = useRef();
    const searchRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);


    function handleClickOutside(e) {
      if (searchRef.current.contains(e.target)) {
        console.log("icon");
      } else {
        if (inputRef.current && inputRef.current.contains(e.target)) {
          console.log(inputRef);
        }else{
            hideinput()
        }
      
      }
      
    }


  const navigate = useNavigate();
  const  user  = useContext(MyContext);
  
  const logout = async () => {
    await signOut(auth);
    navigate("/Login");
  };

  return (
    <>
    
    <div className='fixed w-[100%] z-50'>
    <Sidenav/>

    {!currentSearchState&&(
    <div className=''>
      <input 
      ref={inputRef}
        className='w-[65%] absolute top-6 left-0 right-0 mx-auto py-4 z-0' type="text" placeholder='E.g: Meat,Egg'></input>
    </div>
      )}

    <div className='flex items-center justify-between px-8 mx-auto shadow-md shadow-gray-200/40'>
      {/* left */}
      <div className='flex justify-start'>
    <div className="flex justify-between py-9">
      <div className="mr-10 flex items-center justify-center text-3xl cursor-pointer">
                <RxHamburgerMenu  onClick={openNav} />
              </div>
              {/* {currentSearchState&&(  )} */}
                <img
                src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg"
                alt=""
              />  
            
              
            </div>
    </div>
      {/* left */}
    
    {/* right */}
    <div className=' flex'>
      {/* search */}
      {/* {currentSearchState&&()} */}
      <div ref={searchRef} className='text-2xl cursor-pointer'>
        <FiSearch
        
         onClick={()=>{showinput()}}
         />
      </div>
      

      {/* search */}
      
      {/* cart */}
      <div className='text-2xl cursor-pointer ml-6'>
      <HiOutlineShoppingCart/>
      </div>
      {/* cart */}
      
    </div>
    {/* right */}
    
    </div>
    
{/* 
      {user ? (
        <button onClick={logout}> Sign Out </button>
      ) : (
        <Link className='text-slate-500	' to="/Login">Login </Link>
      )} */}
      
      </div>
      <div className='w-[100%] z-0 py-[51px]'></div>
    </>
  );
};
export default Navbar