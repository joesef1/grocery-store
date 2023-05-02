import React from 'react'
import linkedin from '../assets/images/linkedin1.png'
import github from '../assets/images/github (1).png'
import myweb from '../assets/images/web-programming.png'


const Footer = () => {
  return (
    <div class='  md:flex-row flex-col border-t-[1px]  bg-[#F9FAFB] flex w-full px-12 py-5 justify-between items-center left-0 right-0 absolute z-10 shadow-md mb-[100px]'>
  <div><h1 class='text-gray-500  text-center mb-6 md:mb-0'>All right reserved - Developed by yousef el-kholy</h1></div>
  <div className='flex'>
    <img className='w-7 cursor-pointer mr-6' src={linkedin} alt="" />
    <img className='w-7 cursor-pointer mr-6' src={github} alt="" />
    <img className='w-7 cursor-pointer ' src={myweb} alt="" />
  </div>
</div>
  )
}

export default Footer
