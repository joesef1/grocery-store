// import React ,{useState,useEffect} from 'react'
// import Banner from './Banner'
// import ItemSection from './ItemSection'
// import MobileSideCategory from '../components/MobileSideCategory'
//  import arrow from "../assets/icons/down-arrow.png";
//  import { useSelector, useDispatch } from 'react-redux';
//  import { opensidecategory ,closesidecategory } from '../store/sidecategorySlice';

// const MainSection = () => {


//   const dispatch = useDispatch();
//   const sidecategory = useSelector(state => state.sidecategory);
//   const [sidecategorystate, setSidecategorystate] = useState(sidecategory);

// // const handelcategory = () => {
// //   dispatch(opensidecategory())
// // }
// const handelcategory = () => {
//   dispatch(opensidecategory())
//   setSidecategorystate(!sidecategorystate); // toggle the state
//   console.log(sidecategory);
// }

//   return (
//   <>
//     <div 
//     onClick={()=> handelcategory()}
//     className=' cursor-pointer  md:hidden flex justify-between items-center p-6 mb-3 bg-white'>
//         <div><p className='text-lg font-semibold'>categories</p></div>
//         <div> <img className='w-5 ' src={arrow} alt="" /> </div>
//       </div>


//       {!sidecategorystate &&
//        <div  className='md:hidden'>
//       <MobileSideCategory
//         handelcategory={handelcategory}
//       />
//       </div>
//       }

//       <div className='w-[96%] m-auto '>
//       <Banner/>  
//       <ItemSection/>  
//       </div>
//   </>
//   )
// }

// export default MainSection


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { opensidecategory, closesidecategory } from '../store/sidecategorySlice';
import Banner from './Banner';
import ItemSection from './ItemSection';
import MobileSideCategory from './MobileSideCategory';
import arrow from '../assets/icons/down-arrow.png';

const MainSection = () => {

  const dispatch = useDispatch();
  const sidecategory = useSelector(state => state.sidecategory);
  const [sidecategorystate, setSidecategorystate] = useState(sidecategory);

  const handleClose = () => {
    setSidecategorystate(false);
  }

  const handleCategory = () => {
    setSidecategorystate(true);
  }
  useEffect(() => {
    handleClose()
  }, []);
  return (
    <>
      <div 
        onClick={handleCategory}
        className=' cursor-pointer  md:hidden flex justify-between items-center p-6 mb-3 bg-white'
      >
        <div><p className='text-lg font-semibold'>categories</p></div>
        <div><img className='w-5' src={arrow} alt="" /></div>
      </div>

      {sidecategorystate && 
        <div className='md:hidden  fixed bg-white z-50 top-0 right-0 bottom-0 left-0'>
          <MobileSideCategory handleClose={handleClose} />
        </div>
      }

      <div className='w-[96%] m-auto '>
        <Banner />
        <ItemSection />
      </div>
    </>
  )
}

export default MainSection;
