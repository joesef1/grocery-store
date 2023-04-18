import React,{ useContext ,useState} from 'react'
import { MyContext } from '../context/context-authstate';
import { IoMdClose } from 'react-icons/io';
import  itemsIge  from '../assets/images/vegetables1-4.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import useopencartstore from '../statestore/opencartstore';

import { Link, useNavigate  } from 'react-router-dom';
import AddToCart from '../statestore/AddToCart'
import Data from '../Data'
import cart from '../assets/images/empty-cart.svg'
//
import { useSelector, useDispatch } from 'react-redux';
import { closesidecart  } from '../store/sidecartSlice.js';
import {clear, deleteitems ,increaseQuantity,decreaseQuantity} from '../store/cartSlice';





//

const Cart = () => {
const navigate = useNavigate();

  

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
const {cart} = useSelector(state => state.cart);

  //
//
const AddItems = AddToCart((state) => state.AddItems)
const deleteitem = AddToCart((state) => state.deleteitem)
//
const handleDelete = (index) => {
  // deleteitem(index);
  // console.log(index);
};


//
const totalprice = cart.reduce((acc,item) => {
  acc += item.price*item.quantity;
  return acc;
},0)
//

const checkoutprocess = totalprice.toFixed(2);
const navigatetocheckout = () => {
  navigate('/Checkout', { state: checkoutprocess });
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
        x: '100%',
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
  

    // 
    
      const [value, setValue] = useState(0);
    
      // function decrement() {
      //   setValue((prevValue) => prevValue - 1);
      // }
    
      // function increment(item) {
      //   // setValue((prevValue) => prevValue + 1);
        
      // }
    // 
const [onhover, setOnhover] = useState(false);
const hoveritem = (i) => {
  setOnhover(true)
  // console.log(i);
}
const unhoveritem = () => {
  setOnhover(false)
}
    
//
const handleopencart = (status) => {
  dispatch(closesidecart())
  }
//




const exploreShop = () => {
  console.log("asd");
  dispatch(closesidecart())
  navigate('/')
}



  return (

    <>
    <AnimatePresence>
        <motion.div
          className="px-8 z-20 bg-white border-b-4 fixed top-0 bottom-0 right-0  w-[27rem] "
          initial="closed"
          animate={globalState.sidecart.sidecartstate ? 'open' : 'closed'}
          exit="closed"
          variants={variants}
        >
        {/* header  */}
        <div className='flex justify-between align-center py-7'> 
        <div><h2 className='text-xl font-bold'>Shopping Cart</h2></div>
            <div className="flex items-center justify-center text-2xl cursor-pointer">
              <IoMdClose 
              onClick={()=> handleopencart(globalState.sidecart.sidecartstate)}
              />
            </div>
        </div>
        {/* header  */}

      
    
        {/* added items */}

        
        {/* added items */}

{/*  */}



{cart.length !== 0 ?
  cart.map((item,index) => (

    <div className='relative' key={item.id*index}>
<button onClick={()=> dispatch(clear())}>clear</button>

      <div className='flex flex-col'> 
        <hr className=" border-gray-100 w-full" />
        <div className='flex justify-between align-center py-4 my-5 '>
          <div className='w-[25%] relative rounded-md cursor-pointer'>
            <div className='relative '>
              <img  className='' src={itemsIge} alt="" />
              <div className=' absolute  bg-slate-400 '>
                <div className=' p-1  translate-x-[-10px] cursor-pointer absolute bg-[#212121] text-[#fff]  rounded-[100%] left-0 top-[50%] translate-y-[-50%]'>
                  <IoMdClose onClick={()=>dispatch(deleteitems(item))} />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[70%] flex justify-start flex-col	'>
            <p className='text-[#212121] font-xl text-sm mb-1'>{item.name}</p>
            <p className='text-gray-400 font-xl text-sm mb-2'>Unit Price {item.price}</p>
            <div className='flex justify-between'>
              <div className="custom-number-input h-10 w-32">
                <div className="flex flex-row translate-y-2 h-8 w-full rounded-lg relative bg-transparent ">
                  <button
                    data-action="decrement"
                    className="bg-[#212121] text-white hover:bg-[#3f3f3f] h-full w-20 rounded-l cursor-pointer outline-none"
                    onClick={()=> dispatch(decreaseQuantity(item))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">−</span>
                  </button>
                  <input
                    type="text"
                    className="appearance-none outline-none focus:outline-none text-center w-full bg-[#212121] font-semibold text-md text-white focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                    name="custom-input-number"
                    value={item.quantity}
                  />
                  <button
                    data-action="increment"
                    className="bg-[#212121] text-white hover:bg-[#3f3f3f] h-full w-20 rounded-r cursor-pointer"
                    onClick={()=> dispatch(increaseQuantity(item))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">+</span>
                  </button>
                </div>
              </div>
              <p className='font-bold translate-y-5 text-md'>{item.price*item.quantity}</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className=' cursor-pointer hover:bg-[#353535] px-10 text-lg py-3 flex justify-between text-white items-center left-0 right-0 bottom-0 bg-[#212121]  fixed m-6 rounded-lg'>
<div><p onClick={()=> navigatetocheckout()}>Proceed To Checkout</p></div>
<div className='flex justify-around items-center'><span className='w-[1px] h-5 bg-white mr-5'></span> <p> {checkoutprocess}  </p></div>
</div>





    </div>
  ))
  :
  <>
  <div className='w-[100%] mt-[10vh]  m-auto flex justify-center flex-col items-center'>
<img src="https://cartsy.redq.io/wp-content/themes/cartsy/assets/images/not-found-alt.svg" alt="" />
<h1 className='text-black mt-7 font-bold text-xl'>No products in the cart.</h1>

    </div>

<div onClick={()=> exploreShop()} className=' cursor-pointer hover:bg-[#353535] px-10 text-lg py-3 flex justify-center text-white items-center left-0 right-0 bottom-0 bg-[#212121]  fixed m-6 rounded-lg'>
<div className='flex justify-center ><p '> <p> Continue shoping</p></div>
{/* <div className='flex justify-around items-center'><span className='w-[1px] h-5 bg-white mr-5'></span> <p>{totalprice.toFixed(2)}</p></div> */}
</div>
</>
}










{/*  */}


{/* {cart.length !== 0 ? } */}





        </motion.div>
      

      {globalState.sidecart.sidecartstate && (
        <motion.div
          className="bg-black opacity-40 absolute h-[100vh] top-0 right-0 left-0 bottom-0"
          initial="hidden"
          animate={globalState.sidecart.sidecartstate ? 'visible' : 'hidden'}
          variants={overlayVariants}
          onClick={()=> handleopencart(globalState.sidecart.sidecartstate)}
        ></motion.div>
      )}
    </AnimatePresence>
  </>
  )
}

export default Cart
