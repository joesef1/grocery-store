import React from 'react'
import linkedin from '../assets/images/linkedin1.png'
import github from '../assets/images/github (1).png'
import myweb from '../assets/images/web-programming.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


const Footer = () => {
  const { user } = useSelector(state => state.user);

  return ( 
  <>

    { user && 
      <div class='  md:flex-row flex-col border-t-[1px]  bg-[#F9FAFB] flex w-full px-12 py-5 justify-between items-center left-0 right-0 absolute z-10 shadow-md mb-[100px]'>
  <div><h1 class='text-gray-500  text-center mb-6 md:mb-0'>All right reserved - Developed by yousef el-kholy</h1></div>
  <div className='flex'>
    <a href="https://www.linkedin.com/in/yousef-el-kholy-190126214/">
          <img className='w-7 cursor-pointer mr-6' src={linkedin} alt="linkedin" />
    </a>

    <a href="https://github.com/joesef1">
      <img className='w-7 cursor-pointer mr-6' src={github} alt="github" />
    </a>



    <a href="https://yousef-portfoli0.netlify.app/">
      <img className='w-7 cursor-pointer ' src={myweb} alt="myweb" />
    </a>
    
  </div>
</div>
     }
  
</>)


}

export default Footer
