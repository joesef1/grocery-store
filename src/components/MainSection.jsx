import React from 'react'
import Banner from './Banner'
import ItemSection from './ItemSection'



const MainSection = () => {
  return (
    <div className='w-[96%] m-auto '>
    {/* <div className='lg:ml-[330px]  ml-[3%] mr-[3%] mx-auto w-[93%]  my-9 z-100'> */}
    <Banner/>  
    <ItemSection/>  
    </div>
  )
}

export default MainSection
