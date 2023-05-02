import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getitems } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";





const Sorteddata = ({items,totalPosts,lastPostIndex,firstPostIndex}) => {
  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    console.log(product);
  }
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);

  const [sortingOrder, setSortingOrder] = useState('Defult');

  const sortedData = [...items];

  if (sortingOrder === 'low-to-high') {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortingOrder === 'high-to-low') {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (sortingOrder === 'latest') {
    sortedData.sort((a, b) => b.id - a.id);
  }else if (sortingOrder === 'popularity') {
    sortedData.sort((a, b) => a.id - b.id);
  }

  return (
    <div className='w-[94%] mx-auto mb-6'>
      {/*  */}

          {/* sorting */}

          <div className='flex items-center justify-between mx-auto w-[94%] mb-10 flex-col  sm:flex-row'>
        <div><p className='md:text-md text-sm sm:mb-0 mb-5'>Showing {firstPostIndex}-{lastPostIndex} of {totalPosts} results</p> </div>
        {/*  */}      
<div>
  <select
    id="sort"
    className="appearance-none block w-32 bg-white border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-300 text-sm"
    value={sortingOrder}
  
    onChange={(e) => setSortingOrder(e.target.value)}
  >
    <option value="Defult">Defult sorting</option>
    <option value="low-to-high">Low to High</option>
    <option value="high-to-low">High to Low</option>
    <option value="latest">Latest</option>
  </select>
</div>

        {/*  */}
      </div>

    {/*  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4">
  {sortedData.map((product) =>{ 
    const item = cart.find(item => item.id === product.id);
    const quantityInitem = item ? item.quantity : 0;

    return(
    
      <div key={`${product.id}+${Date.now()}`} className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-150 ">
      <div onClick={() => routetodetails(product)}>
        <img src={product.image} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.image" />
      </div>
      <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
      <p className="text-gray-500 text-sm mb-5 h-[40px]">{product.name}</p>

      {/*  */}
      {quantityInitem === 0 ?
        <div className='mb-3  flex w-[100%] justify-center items-center m-0 p-0 h-[35px]  translate-y-[5px]'>
        <div className='w-[90%] '>
          <button
            onClick={() => dispatch(insertitem(product))}
            className="border-[#e7e7e7] border hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-150 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">ADD</button>
        </div>
      </div>
      
      :
      <>
      
      <div className="custom-number-input mb-3 ">
                <div className="flex flex-row translate-y-2 h-8 w-full rounded-lg relative bg-transparent ">
                  <button
                    data-action="decrement"
                    className="bg-[#212121] text-white hover:bg-[#3f3f3f] h-full w-20 rounded cursor-pointer outline-none"
                    onClick={()=> dispatch(decreaseQuantity(item))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">−</span>
                  </button>
                  <input
                    type="text"
                    // className="appearance-none outline-none focus:outline-none text-center w-full bg-[#212121] font-semibold text-md text-white focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                    className="appearance-none outline-none focus:outline-none text-center w-full bg-white font-semibold text-md text-[#212121]  focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                    name="custom-input-number"
                    value={item.quantity}
                  />
                  <button
                    data-action="increment"
                    className="bg-[#212121] text-white hover:bg-[#3f3f3f] h-full w-20 rounded cursor-pointer"
                    onClick={()=> dispatch(increaseQuantity(item))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">+</span>
                  </button>
                </div>
              </div>
      </>
    }

    </div>
    )
  })}
</div>
{/*  */}



</div>
  )
}

export default Sorteddata
