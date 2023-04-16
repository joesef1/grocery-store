import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <div className='flex justify-between w-[90%] mx-auto mt-24'>
      <div className='h-[90vh] w-[50%]'>
      <img className='w-[90%] h-[80%]' src={product.image} alt=''/>
      </div>

    <div className='w-[50%]'>
        <h1 className='text-3xl mb-5'>{product.name}</h1>
        <p className='text-xl text-bold mb-7'>${product.price}</p>
        <p>description{product.description}</p>

        <div className='my-12 flex  '>
          <div className='mr-3 '>
            






          <div className="flex flex-row  h-12  rounded-lg relative bg-transparent ">

                  <button
                    data-action="decrement"
                    className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-l cursor-pointer outline-none"
                    // onClick={()=> dispatch(decreaseQuantity(item))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">−</span>
                  </button>


                  <input
                    type="text"
                    className="border-[#212121] border appearance-none focus:outline-none text-center   font-semibold text-md text-black focus:text-black md:text-base cursor-default flex items-center  outline-none"
                    name="custom-input-number"
                    // value={item.quantity}
                    value='1'
                  />


                  <button
                    data-action="increment"
                    className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-r cursor-pointer outline-none"
                    // onClick={()=> dispatch(increaseQuantity(item))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">+</span>
                  </button>

                </div>











          </div>
          <div>
            <button className=' bg-[#212121] text-white rounded-md px-7 py-3 text-md'>add too cart</button>
          </div>
        </div>
      
        <span>category: <span className='text-bold text-lg'> <a href="">{product.category}</a> , <a href="">{product.subcategory}</a></span> </span>
        
    </div>
    </div>
  );
};

export default Details;
