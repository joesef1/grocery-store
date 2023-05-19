import React,{useEffect} from 'react'

import CategorySection from '../components/CategorySection'
import MainSection from '../components/MainSection'
import  "../index.css";
import {useDispatch, useSelector } from "react-redux";


const Home = () => {
  const { isLoading} = useSelector(state => state.items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
    <div className=' bg-[#F9F9F9] flex pb-[70px] w-full'>

      <div  className='lg:block hidden bg-white'>
      <CategorySection/>
      </div>



      <div className='md:mt-7 w-full'>
          
            <MainSection/>
    
      </div>

      

    </div>
    </>
  )
}

export default Home

