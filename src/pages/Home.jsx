import React,{useEffect} from 'react'

import CategorySection from '../components/CategorySection'
import MainSection from '../components/MainSection'
import  "../index.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className=' bg-[#F9F9F9] flex pb-[70px]'>

      <div  className='lg:block hidden bg-white'>
      <CategorySection/>
      </div>

      <div className='md:mt-7 '>
      <MainSection/>
      </div>

    </div>
    </>
  )
}

export default Home

