
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
  const { normalSearchState, activeSearchState } = SearchState();


  
  const inputRef = useRef();
  const searchIconRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if ( !currentSearchState && searchIconRef.current && searchIconRef.current.contains(event.target)) {
        console.log("ok");
        normalSearchState()
      } 
      //  else if (!currentSearchState) {
      //     normalSearchState()
      // }
      // else{
      //   activeSearchState()
      // }
    }
    document.addEventListener('click', handleClickOutside);
  }, []);
  



  const navigate = useNavigate();
  const  user  = useContext(MyContext);
  
  const logout = async () => {
    await signOut(auth);
    navigate("/Login");
  };

  return (
    <>
    
    <div className=''>
    <Sidenav/>

    {!currentSearchState&&(
    <div className=''>
      <input 
      ref={inputRef}
        className='w-[65%] absolute top-6 left-0 right-0 mx-auto py-4 z-0' type="text"></input>
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
      <div className='text-2xl cursor-pointer'>
        <FiSearch
        ref={searchIconRef}
         onClick={activeSearchState}
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
    
      {/* <Link to="/">Home </Link> */}

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