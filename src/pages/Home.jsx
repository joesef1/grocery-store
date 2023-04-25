import React from 'react'
import CategorySection from '../components/CategorySection'
import MainSection from '../components/MainSection'
import  "../index.css";

const Home = () => {
  return (
    <>
    <div className=' bg-[rgb(249,249,249)] flex '>

      <div  className='lg:block hidden bg-white'>
      <CategorySection/>
      </div>

      <div className='mt-7 '>
      <MainSection/>
      </div>

    </div>
    </>
  )
}

export default Home

