import React,{useEffect, useState} from 'react'
import Pagebanner from '../components/Pagebanner'
import terms from '../assets/images/terms.jpg'
import { Link, Element } from 'react-scroll';
import '../index.css'



const Terms = () => {

  const [isVisible, setIsVisible] = useState(false);



  return (
    <div>
      <Pagebanner
      pagename='Terms & conditions'
      imgname={terms}
      />
      <div className='  w-[90%] mx-auto flex justify-between'>
      {/* term content */}











      {/* <Element name="mySection" className={`my-section ${isVisible ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`} onSetActive={() => setIsVisible(true)}> */}

      {/* sidenav */}
      {/* <div  id="my-section"> */}
      <div className='w-[30%] h-[100%] '>
        <ul>

        <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-2hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-1'>
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



          

          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-2'>
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



          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-2'>
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




          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-2'>
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




          <li className='  cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-2'>
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




          <li className=' cursor-pointer mb-4 text-sm hover:bg-gradient-to-r from-[#F3F3F3] to-slate-50" transition duration-200 ease-in p-2 '>
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
    
{/* </div> */}

      {/* sidenav */}

      {/* </Element> */}

















      {/* main content */}
      <div className='w-[70%] mb-20 pl-6'>

      <div className='mb-24' id="section1">
        <h2 className='text-2xl font-medium mb-8'>Purpose</h2>
        <p>Pulvinar proin gravida hendrerit lectus a. Placerat vestibulum lectus mauris ultrices eros in. Faucibus interdum posuere lorem ipsum. Malesuada proin libero nunc consequat interdum varius. Ullamcorper morbi tincidunt ornare massa. Magna etiam tempor orci eu lobortis elementum. Quam viverra orci sagittis eu volutpat odio. Hendrerit gravida rutrum quisque non tellus. Euismod lacinia at quis risus. Cursus in hac habitasse platea. Id porta nibh venenatis cras sed felis eget. Turpis cursus in hac habitasse. Velit scelerisque in dictum non consectetur a. Porta nibh venenatis cras sed felis. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Est velit egestas dui id ornare arcu. Venenatis a condimentum vitae sapien pellentesque habitant. Lectus sit amet est placerat. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.</p>
      </div>


      <div className='mb-24' id="section2">
        <h2 className='text-2xl font-medium mb-8'>General Disclaimer</h2>
        <p>Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Morbi non arcu risus quis varius. Odio morbi quis commodo odio. Consectetur a erat nam at lectus urna duis convallis convallis. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Egestas congue quisque egestas diam in arcu. Arcu odio ut sem nulla pharetra diam sit amet. Cras pulvinar mattis nunc sed blandit libero volutpat. Dui sapien eget mi proin. Donec massa sapien faucibus et molestie. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Ultricies mi eget mauris pharetra. Augue lacus viverra vitae congue eu consequat ac.</p>
      </div>

      <div className='mb-24' id="section3">
        <h2 className='text-2xl font-medium mb-8'>Protecting Your Personal Information</h2>
        <p>Interdum varius sit amet mattis vulputate enim nulla. Vulputate eu scelerisque felis imperdiet. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Amet nisl purus in mollis nunc sed id semper. Bibendum arcu vitae elementum curabitur vitae nunc. Tristique senectus et netus et malesuada fames ac. Urna et pharetra pharetra massa massa. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Enim ut sem viverra aliquet eget sit. Tristique senectus et netus et malesuada fames ac turpis. Porta nibh venenatis cras sed.</p>
      </div>

      <div className='mb-24' id="section4">
        <h2 className='text-2xl font-medium mb-8'>Trade Mark & Business Names</h2>
        <p>Nullam non nisi est sit amet. Eget nulla facilisi etiam dignissim diam quis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Turpis tincidunt id aliquet risus feugiat. Vitae turpis massa sed elementum tempus egestas sed sed. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Diam donec adipiscing tristique risus nec feugiat. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In massa tempor nec feugiat nisl. <br />Et sollicitudin ac orci phasellus egestas tellus. Tempor nec feugiat nisl pretium fusce. Vulputate sapien nec sagittis aliquam malesuada bibendum. At lectus urna duis convallis convallis tellus id interdum. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Enim tortor at auctor urna nunc. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Lacus vestibulum sed arcu non odio euismod lacinia. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Vel orci porta non pulvinar neque laoreet suspendisse. Quis risus sed vulputate odio ut.</p>
      </div>

      <div className='mb-24' id="section5">
        <h2 className='text-2xl font-medium mb-8'>Your Visit To Our Website</h2>
        <p>Orci ac auctor augue mauris augue neque. Dolor magna eget est lorem. Fames ac turpis egestas maecenas. Mattis aliquam faucibus purus in massa. Eu facilisis sed odio morbi quis commodo odio aenean sed. Nunc mattis enim ut tellus. Nec feugiat nisl pretium fusce. Turpis cursus in hac habitasse platea dictumst quisque. Ac felis donec et odio. Turpis egestas integer eget aliquet nibh praesent tristique. Tortor consequat id porta nibh venenatis cras. Nunc mi ipsum faucibus vitae. Ornare quam viverra orci sagittis. In egestas erat imperdiet sed euismod nisi. Id aliquet risus feugiat in ante metus.</p>
      </div>

      <div className='mb-24' id="section6">
        <h2 className='text-2xl font-medium mb-8'>Social Media</h2>
        <p>Sed odio morbi quis commodo odio aenean. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Eleifend quam adipiscing vitae proin sagittis. Nulla malesuada pellentesque elit eget gravida cum. Sit amet aliquam id diam maecenas ultricies mi eget. Dignissim diam quis enim lobortis scelerisque fermentum dui. Eget sit amet tellus cras. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Interdum posuere lorem ipsum dolor sit amet consectetur. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Mauris cursus mattis molestie a. Morbi non arcu risus quis. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Tincidunt arcu non sodales neque sodales ut etiam.</p>
      </div>



      {/* <div className='h-[100vh]' id="section2">Section 2</div> */}

      </div>

      
      {/* main content */}


      {/* term content */}
      </div>

    </div>
  )
}

export default Terms
