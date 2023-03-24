import React from 'react'
// import faq from '../assets/images/faq.jpg'
import Pagebanner from '../components/Pagebanner'
import AccordionSection from '../components/AccordionSection'

const FAQ = () => {
  const mypagenameProp = "FAQs";

return (
  <div className=''>
<Pagebanner pagename={mypagenameProp}/>
<AccordionSection />

  </div>

  )
}

export default FAQ

