import React from 'react'
// import faq from '../assets/images/faq.jpg'
import Pagebanner from '../components/Pagebanner'
import AccordionSection from '../components/AccordionSection'
import faq from '../assets/images/faq.jpg'


const FAQ = () => {
  const mypagenameProp = "FAQs";

return (
  <div className=''>
<Pagebanner
pagename={mypagenameProp}
imgname={faq}
/>

<div className=' translate-y-[-100px] '>
  <AccordionSection />
</div>


  </div>

  )
}

export default FAQ

