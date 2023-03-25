import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import useOpenNavStore from '../statestore/OpenNavStore';
import { Link, useNavigate  } from 'react-router-dom';



const Sidenav = () => {

const currentstate = useOpenNavStore((state) => state.currentstate)
const closeNav = useOpenNavStore((state) => state.closeNav)
const navigate = useNavigate();


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
            animate={currentstate ? 'open' : 'closed'}
            exit="closed"
            variants={variants}
          >
            <div className="flex justify-between py-9 cursor-pointer">
              <img
              onClick={()=>{navigate("/")}}
                src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg"
                alt=""
              />
              <div className="flex items-center justify-center text-2xl cursor-pointer">
                <IoMdClose onClick={closeNav} />
              </div>
            </div>
            <hr className=" border-gray-100 w-full" />
            <nav className="py-5">
              <ul>
                <li class="py-3 text-lg cursor-pointer">
                  <a href="#">Extented Search</a>
                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <a href="#">Shop</a>
                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <a href="#">Blog</a>
                  
                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <Link to="/FAQ">FAQs</Link>
                  {/* <Link to="/Login">Login </Link> */}

                  
                </li>
                <li class="py-3 text-lg cursor-pointer">
                  {/* <a href="#">Term & Conditions</a> */}
                  <Link to="/Terms">Terms & conditions</Link>

                </li>
                <li class="py-3 text-lg cursor-pointer">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </motion.div>
        

        {currentstate && (
          <motion.div
            className="bg-black opacity-40 absolute h-[100vh] top-0 right-0 left-0 bottom-0"
            initial="hidden"
            animate={currentstate ? 'visible' : 'hidden'}
            variants={overlayVariants}
            onClick={closeNav}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidenav;
