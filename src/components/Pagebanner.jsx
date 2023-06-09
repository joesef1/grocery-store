import React from 'react'
import faq from '../assets/images/faq.jpg'
import '../index.css'




const Pagebanner = (props) => {

const faqStyle = {
  backgroundImage: `url(${props.imgname})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '330px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: '#fff',
  textAlign: 'center',
};

  return (
    
  <div  className=' mb-[50px] relative' style={faqStyle}>
    <div id='bannerimg' className='z-0'>
      <h1 id='eplore' className='font-dancingScript text-2xl mb-4 z-10'>explore</h1>
    <h1 className='md:text-4xl text-2xl w-[90%] bold font-bold mb-3 capitalize z-10'>{props.pagename}</h1>
    </div>
    
  </div>
    
  )
}

export default Pagebanner



