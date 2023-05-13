import React,{ useContext , useRef, useEffect,useState  } from 'react'
import { MyContext } from '../context/context-authstate';
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import Sidenav from '../components/Sidenav';
import { RxHamburgerMenu } from 'react-icons/rx';
import Cart from './Cart';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import useOpenNavStore from '../statestore/OpenNavStore';
import useopencartstore from '../statestore/opencartstore';
import SearchState from '../statestore/SearchState';
//
import { useSelector, useDispatch } from 'react-redux';
import { opensidenav  } from '../store/sidebarSlice';
import { opensidecart  } from '../store/sidecartSlice.js';
import {opensearchIcon , closesearchIcon} from '../store/searchIconSlice';
// import {currentSearchResult} from '../store/itemSlice';
// import {currentSearchResults} from '../store/itemSlice';
import { setSearchQuery, setFilteredItems , emptythesearch } from '../store/itemSlice';
import logo from "../assets/images/category-icons/grocery-store-low-resolution-color-logo.png";

//

const Navbar = () => {

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const {cart} = useSelector((state) => state.cart);

  const openNav = useOpenNavStore((state) => state.openNav)
  const opencart = useopencartstore((state) => state.opencart)
  // const currentSearchState = SearchState((state) => state.currentSearchState)
  const { showinput, hideinput } = SearchState();


  
  const inputRef = useRef();
    const searchRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);


    function handleClickOutside(e) {
      if (searchRef.current.contains(e.target)) {
        console.log(inputRef);
        inputRef.focus();

      } else {
        if (inputRef.current && inputRef.current.contains(e.target)) {
          // console.log("inputRe.........f");
        }else{
            hideinput()
            dispatch(closesearchIcon())
            dispatch(emptythesearch())
            setsearchword("");

            
        }
      
      }
      
      // dispatch(emptythesearch())

      
    }

  const navigate = useNavigate();

  //
  const sidebarHandeler = (status) => {
    dispatch(opensidenav())
    }

    const handleopencart = (status) => {
      dispatch(opensidecart())
      }

      const showsearchinput = (status) => {
        dispatch(opensearchIcon())
        // inputRef.focus();
        // console.log("inputRef");
        }
  //



  // const searchQuery = useSelector((state) => state.items.searchQuery);
  // const targetedsearchword = useSelector((state) => state.items.targetedsearchword);
  // const {cart} = useSelector((state) => state.cart);


  const [searchword, setsearchword] = useState("");

const handleSearchQueryChange = (e) => {
  e.preventDefault()
  const searchword = e.target.value
  setsearchword(searchword)
  dispatch(setSearchQuery(searchword));
};

const { user } = useSelector(state => state.user);



  //
  return (
    <>
    { user && 
    
    
    
  <>
      <div className='fixed w-[100%] z-50 bg-white'>
      <Sidenav/>
    
      <Cart />
    
      {/* {!currentSearchState&&( */}
      {globalState.searchIcon.sidenavstate&&(
      <div className=''>
    
        <input 
          
          value={searchword}
          ref={inputRef}
          className='w-[65%] absolute top-6 left-0 right-0 mx-auto py-4 z-0 p-3 bg-[#F3F3F3] rounded-lg' type="text" 
          placeholder='E.g: Meat,Egg'
          onChange={handleSearchQueryChange}
          />
          
      
    
      </div>
        )}
    
      <div className='flex items-center justify-between px-8 mx-auto shadow-md shadow-gray-200/40'>
        {/* left */}
        <div className='flex justify-start'>
      <div className="flex justify-between py-2">
        <div className="mr-5 flex items-center justify-center text-3xl cursor-pointer">
                  <RxHamburgerMenu 
                  // onClick={openNav} 
            onClick={() => sidebarHandeler(globalState.sidenavigation.sidenavstate)}
          
                  
                  />
                </div>
                {/* {currentSearchState&&(  )} */}
                  <img
                  className=' w-28  cursor-pointer'
                  // src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg"
                  src={logo}
                  alt=""
                onClick={()=>{navigate("/")}}
    
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
          
          // onClick={()=>{showinput()}}
          onClick={()=>{showsearchinput(globalState.searchIcon.sidenavstate)}}
          />
        </div>
        
    
        {/* search */}
        
        {/* cart */}
        <div className='text-2xl cursor-pointer ml-6 relative'>
        <HiOutlineShoppingCart
        //  onClick={opencart}
         onClick={()=> handleopencart(globalState.sidecart.sidecartstate)}
         />     
           <span className=' bg-[#212121] text-white px-[6px] w-[19px] text-sm rounded-full absolute top-[-8px] right-[-5px] '>{cart.length}</span>
    
        </div>
        {/* cart */}
        
      </div>
      {/* right */}
      
      </div>
    
        
        </div>
        <div className='w-[100%] z-0 py-[51px]'></div>
  </>}
    </>
  );
};
export default Navbar