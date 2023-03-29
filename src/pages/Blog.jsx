import React from 'react'
import  blog  from "../assets/images/blog.jpg";
import  salon  from "../assets/images/salon.png";
import Pagebanner from '../components/Pagebanner'
import { Link } from 'react-scroll';



const Blog = () => {
  return (
    <div>
      <Pagebanner
      pagename='Blog'
      imgname={blog}
      />
       {/* blog */}
       <div className=' mx-auto w-[90%] flex justify-between'>
        
       {/* mainsection  */}
<div className='w-[70%] bg-slate-500 mr-9'>.</div>
       {/* mainsection  */}
       {/* sidsection  */}
<div className='w-[30%]'>
  <div className='  shadow-md '>
    <div className='flex justify-center '>
      <img className=' p-6'  src={salon} alt="salon" />
      </div>
  </div>
  
  
  <div className='shadow-md mt-12 p-5'>
  
        <p className=' text-xl font-bold mb-6'>Recent Comments</p>
        <ul>

        <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-2hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-1'>
          <Link
  activeClass="active"
  to="section1"
  spy={true}
  smooth={true}
  offset={-170}
    duration={1000}
>
Purpose
</Link>
          </li>



          

          <li className=' text cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-2'>
          <Link
  activeClass="active"
  to="section2"
  spy={true}
  smooth={true}
  offset={-170}
    duration={1000}
>
General Disclaimer

</Link>
          </li>



          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-2'>
          <Link
  activeClass="active"
  to="section3"
  spy={true}
  smooth={true}
  offset={-170}
    duration={1000}
>
Protecting Your Personal Information
</Link>
          </li>




          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-2'>
          <Link
  activeClass="active"
  to="section4"
  spy={true}
  smooth={true}
  offset={-170}
    duration={1000}
>
Trade Mark & Business Names
</Link>
          </li>




          <li className='  cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-2'>
          <Link
  activeClass="active"
  to="section5"
  spy={true}
  smooth={true}
  offset={-170}
    duration={1000}
>
Your Visit To Our Website
</Link>
          </li>




          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-slate-200 to-slate-50" transition duration-200 ease-in p-2 '>
          <Link
  activeClass="active"
  to="section6"
  spy={true}
  smooth={true}
  offset={-170}
  duration={1000}
>
Social Media
</Link>
          </li>


        </ul>
      </div>
</div>
       {/* sidsection  */}
       
       </div>
       {/* blog */}

    
    </div>

    
  )
}

export default Blog
