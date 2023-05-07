import React,{useEffect} from 'react'
import { BsBagCheckFill } from 'react-icons/bs';
import { Link, useNavigate  } from 'react-router-dom';
import { runFireworks } from '../components/Fireworks';
import  delivery  from "../assets/images/delivery.png";
import { useSelector, useDispatch } from 'react-redux';
import {clear} from '../store/cartSlice';



const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const navigatefromsucsess = () => {
    navigate('/Shop')
  }
  const {cart} = useSelector(state => state.cart);

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear()); ///
    runFireworks();
  }, []);

  return (
    // <div>ThankYou</div>
<div class="success-wrapper bg-white min-h-screen w-[90%] mx-auto pt-[4rem]">
  <div class="success mx-auto mt-16 bg-[#F9FAFB] border p-8 rounded-lg flex justify-center items-center flex-col">
    {/* <p class="icon text-[#212121] text-4xl">
      <BsBagCheckFill />
    </p> */}
    <h2 class="text-4xl font-bold text-gray-700 mt-6">Thank you for your order!</h2>
    <p class="email-msg text-lg font-medium text-center my-4">your order will be there for less than 90 min</p>
    <div >
      <img className='w-48' src={delivery} alt="" />
    </div>
    {/* <p class="description text-lg font-medium text-center my-6">
      If you have any questions, please contact us
      <a class="email text-red-500 ml-1" href="http://localhost:3000/Contact">http://localhost:3000/Contact</a>
    </p> */}
    
    {/* <Link href="/"> */}
      <button onClick={()=> navigatefromsucsess()} type="button" class="btn bg-[#212121] text-white py-2 px-4 rounded-lg mt-8">
        Continue Shopping
      </button>
    {/* </Link> */}
  </div>
</div>

  )
}

export default ThankYou