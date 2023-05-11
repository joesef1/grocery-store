// import React,{useEffect,useState} from 'react'
// import { BsBagCheckFill } from 'react-icons/bs';
// import { Link, useNavigate  } from 'react-router-dom';
// import { runFireworks } from '../components/Fireworks';
// import  delivery  from "../assets/images/delivery.png";
// import { useSelector, useDispatch } from 'react-redux';
// import {clear} from '../store/cartSlice';
// //countdown
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { useCountdown } from 'react-countdown-circle-timer'

// const ThankYou = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const navigate = useNavigate();
//   const navigatefromsucsess = () => {
//     navigate('/Shop')
//   }
//   const {cart} = useSelector(state => state.cart);

  
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(clear()); ///
//     runFireworks();
//   }, []);

//   //countdow 
  
//   const initialDuration = 5400;
//   const [duration, setDuration] = useState(
//     Number(localStorage.getItem('initialDuration')) || initialDuration
//   );

//   useEffect(() => {
//     const storedDuration = Number(localStorage.getItem('initialDuration'));
//     if (storedDuration) {
//       setDuration(storedDuration);
//     } else {
//       localStorage.setItem('initialDuration', initialDuration);
//     }
//   }, []);
  


// const children = ({ remainingTime }) => {
//   const hours = Math.floor(remainingTime / 3600)
//   const minutes = Math.floor((remainingTime % 3600) / 60)
//   const seconds = remainingTime % 60

//   return `${hours} : ${minutes} : ${seconds}`
// }

//   return (
//     // <div>ThankYou</div>
// <div class="success-wrapper bg-white min-h-screen w-[90%] mx-auto pt-[4rem]">
//   <div class="success mx-auto mt-16 bg-[#F9FAFB] border p-8 rounded-lg flex justify-center items-center flex-col">
//     {/* <p class="icon text-[#212121] text-4xl">
//       <BsBagCheckFill />
//     </p> */}
//     <h2 class="text-4xl font-bold text-gray-700 mt-6">Thank you for your order!</h2>
//     <p class="email-msg text-lg font-medium text-center my-4">your order will be there for less than 90 min</p>
//     <div >
//       <img className='w-48' src={delivery} alt="" />
//     </div>
  










































import React, { useEffect, useState } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { runFireworks } from '../components/Fireworks';
import delivery from '../assets/images/delivery.png';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../store/cartSlice';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const navigatefromsucsess = () => {
    navigate('/Shop');
  };
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear()); ///
    runFireworks();
  }, []);

  const initialDuration = 5400;
  const storedDuration = Number(localStorage.getItem('duration'));
  const storedStartTime = Number(localStorage.getItem('startTime'));

  const getRemainingTime = () => {
    const startTime = storedStartTime || Date.now();
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = storedDuration - elapsedTime;
    return remainingTime < 0 ? 0 : remainingTime;
  };

  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    if (!storedDuration || remainingTime <= 0) {
      localStorage.setItem('duration', initialDuration);
      localStorage.setItem('startTime', Date.now());
      setRemainingTime(initialDuration);
    } else {
      localStorage.setItem('duration', storedDuration);
      localStorage.setItem('startTime', Date.now() - (storedDuration - remainingTime) * 1000);
    }
  }, [remainingTime]);

  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div class="success-wrapper bg-white min-h-screen lg:w-[70%] md:w-[90%] mx-auto pt-[4rem]">
      <div class="success mx-auto mt-16 bg-[#F9FAFB] border p-8 rounded-lg flex justify-center items-center flex-col">
        {/* <p class="icon text-[#212121] text-4xl">
      <BsBagCheckFill />
    </p> */}
        <h2 class="text-4xl font-bold text-gray-700 mt-6">Thank you for your order!</h2>
        <p class="email-msg text-lg font-medium text-center my-4">your order will be there for less than 90 min</p>
        <div>
          {/* <img className="w-48" src={delivery} alt="" /> */}
        </div>

{/*  */}
<CountdownCircleTimer
          isPlaying
          duration={remainingTime}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => setRemainingTime(initialDuration)}
    >
      {children}
    </CountdownCircleTimer>
{/*  */}

    
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