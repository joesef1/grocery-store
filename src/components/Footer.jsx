import React from 'react'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import myweb from '../assets/images/myweb.png'


const Footer = () => {
  return (
    <div class=' border-t-[1px] bg-white flex w-full px-12 py-10 justify-between items-center left-0 right-0 h-12 absolute z-10 py-6 shadow-md'>
  <div><h1 class='text-gray-500'>All right reserved - Developed by yousef</h1></div>
  <div className='flex'>
    <img className='w-7 cursor-pointer mr-3' src={linkedin} alt="" />
    <img className='w-7 cursor-pointer mr-3' src={github} alt="" />
    <img className='w-7 cursor-pointer ' src={myweb} alt="" />
  </div>
</div>



  )
}

export default Footer
