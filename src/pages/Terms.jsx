import React,{useEffect} from 'react'
import Pagebanner from '../components/Pagebanner'
import terms from '../assets/images/terms.jpg'
import { Link } from 'react-scroll';
import '../index.css'



const Terms = () => {




  return (
    <div>
      <Pagebanner
      pagename='Terms & conditions'
      imgname={terms}
      />
      <div className='  w-[88%] mx-auto flex justify-between'>
      {/* term content */}

      {/* sidenav */}
      {/* <div  id="my-section"> */}
      <div className='w-[30%] bg-slate-700'>
        <ul>
        <li className=' cursor-pointer'>
          <Link
  activeClass="active"
  to="section1"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Scroll to Section 1
</Link>
          </li>

          <li className=' cursor-pointer'>
          <Link
  activeClass="active"
  to="section2"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  Scroll to Section 1
</Link>
          </li>


        </ul>
      </div>
    
{/* </div> */}

      {/* sidenav */}

      {/* main content */}
      <div className='w-[70%] bg-black'>
      <div className='h-[100vh] bg-slate-100' id="section1">Section 1</div>
      <div className='h-[100vh]' id="section2">Section 2</div>

      </div>
      {/* main content */}


      {/* term content */}
      </div>

    </div>
  )
}

export default Terms
