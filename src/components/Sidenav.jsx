import React,{ useContext} from 'react'
import { MyContext } from '../context/context-authstate';
import {signOut} from "firebase/auth";
import { auth } from "../firebase-config";
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate  } from 'react-router-dom';


//
import { useSelector, useDispatch } from 'react-redux';
import { opensidenav , closesidenav } from '../store/sidebarSlice';
//


const Sidenav = () => {

  //
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const handelsidenav = (status) => {
    if (status) {
      dispatch(closesidenav())
    }else{
      console.log('close');
    }
      }
  //



  //
  const  user  = useContext(MyContext);
  
  const logout = async () => {
    await signOut(auth);
    navigate("/Login");
    dispatch(closesidenav())
  };
  //


const navigate = useNavigate();
const logoevent = () => {
  navigate("/")
  dispatch(closesidenav())
}


  const variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    visible: {
      opacity: 0.4,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence>
          <motion.div
            className="px-8 z-20 bg-white border-b-4 border-black absolute h-screen w-[24.5rem]"
            initial="closed"
            animate={globalState.sidenavigation.sidenavstate ? 'open' : 'closed'}
            exit="closed"
            variants={variants}
          >
            <div className="flex justify-between py-9 cursor-pointer">
              <img
              onClick={()=>logoevent()}
                src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg"
                alt=""
              />
              <div className="flex items-center justify-center text-2xl cursor-pointer">
                {/* <IoMdClose onClick={closeNav} /> */}
                <IoMdClose onClick={() => handelsidenav(globalState.sidenavigation.sidenavstate)} />
                

              </div>
            </div>
            <hr className=" border-gray-100 w-full" />
            <nav className="py-5">
              <ul>
              
                <li class="py-3 text-lg cursor-pointer">
                  <Link onClick={()=>dispatch(closesidenav())} to="/Shop">Shop</Link>


                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <Link onClick={()=>dispatch(closesidenav())} to="/Blog">Blog</Link>
                  
                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <Link onClick={()=>dispatch(closesidenav())} to="/FAQ">FAQs</Link>

                  
                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <Link onClick={()=>dispatch(closesidenav())} to="/Terms">Terms & conditions</Link>

                </li>
                <li class="py-3 text-lg cursor-pointer">
                  {/* <a href="#">Contact</a> */}
                  <Link onClick={()=>dispatch(closesidenav())} to="/Contact">Contact</Link>

                </li>
                <li class="py-3 text-lg cursor-pointer">
                  
                    {/* <Link to="/Login">Login </Link> */}
                    {user ? (
        <button onClick={logout}> Sign Out </button>
      ) : (
        <Link onClick={()=>dispatch(closesidenav())} className='text-slate-500	' to="/Login">Login </Link>
      )}
                  

                </li>
              </ul>
            </nav>
          </motion.div>
        

        {globalState.sidenavigation.sidenavstate && (
        //  {currentstate && (
          <motion.div
            className="bg-black opacity-40 absolute h-[100vh] top-0 right-0 left-0 bottom-0"
            initial="hidden"
            animate={globalState.sidenavigation.sidenavstate  ? 'visible' : 'hidden'}
            variants={overlayVariants}
            onClick={() => handelsidenav(globalState.sidenavigation.sidenavstate)}
            
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidenav;
