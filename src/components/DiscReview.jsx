import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';


const DiscReview = () => {
  const location = useLocation();
  const product = location.state;

  //
  const [toggleState, setToggleState] = useState(1);
  const [selectedTab, setSelectedTab] = useState(true);
  const toggletab = (index) => {
    setToggleState(index);
  };
  //


  return (
    <div>
           {/*  */}
    <div className=' w-[90%] mx-auto mb-12'>
{/* tabs */}
<div className='flex mb-7 w-52 justify-between text-gray-400'>

  <div 
    onClick={() => toggletab(1)}
    className={`tab ${toggleState === 1 ?  ' text-gray-800 font-semibold  pb-3 border-b-2 border-black' : ''}`}
  >
    <span className=' cursor-pointer text-xl ' href="">Description</span>  
  </div>
  <div 
    onClick={() => toggletab(2)}
    className={ `tab ${toggleState === 2 ? 'text-gray-800  font-semibold  pb-3 border-b-2 border-black' : ''}`}
  >
    <span className=' cursor-pointer  text-bold text-xl ' href="">reviews</span>  
  </div>
  
  </div>
{/* tabs */}

<div  className='flex'>
{/* discription */}
{toggleState === 1 &&
 <div className=''>
          <p className='text-gray-500'>{product.description}</p>

</div>
}

{/* ./discription */}


{/* reviews */}
{toggleState === 2 &&
<div className=''> 
this feature will be in the next release, I am working on it now &#128521;
</div>
}
</div>

{/* ./reviews */}

    </div>
    {/*  */}



    </div>
  )
}

export default DiscReview