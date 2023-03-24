import React from 'react'
import faq from '../assets/images/faq.jpg'
import '../index.css'




const Pagebanner = (props) => {

const faqStyle = {
  backgroundImage: `url(${faq})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '380px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: '#fff',
  textAlign: 'center',
};

  return (
    
  <div className=' mb-[100px]' style={faqStyle}>
    <h1 id='eplore' className='font-dancingScript text-2xl mb-4'>explore</h1>
    <h1 className='text-4xl bold font-bold mb-3 capitalize'>{props.pagename}</h1>
  </div>
    
  )
}

export default Pagebanner



