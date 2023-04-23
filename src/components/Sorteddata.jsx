import React, {useState,useEffect} from 'react'
// import AddToCart from '../statestore/AddToCart'
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
          <div className='flex justify-between mx-auto w-[94%] mb-10'>
        <div>Showing {firstPostIndex}-{lastPostIndex} of {totalPosts} results</div>
        {/*  */}      
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

        {/*  */}
      </div>
      {/* sorting
  {/*  */}
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedData.map((product) =>{ 
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;

        return(

          {quantityInitem === 0 ?
            <div key={`${product.id}-${Date.now()}`} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.image" />
          <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
          <p className="text-gray-500 text-sm mb-5">{product.name}</p>
  
          <div className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
            <div className='w-[80%]'>
            <button
          onClick={()=>dispatch(insertitem(product))}
            className="bg-gray-100 w-[100%] h-[35px] flex rounded-l-md items-center justify-center flex text-md  px-4 relative">Add</button>
            </div>
          
          </div>
          
        </div>
        :"zero"
        }
    
      )})}
    </div> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {sortedData.map((product) =>{ 
    const item = cart.find(item => item.id === product.id);
    const quantityInitem = item ? item.quantity : 0;

    return(
      // <>
      // {quantityInitem === 0 ?
      //   <div key={`${product.id}-${Date.now()}`} className="bg-white rounded-lg shadow-md p-4">
      //     <img src={product.image} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.image" />
      //     <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
      //     <p className="text-gray-500 text-sm mb-5">{product.name}</p>

      //     <div className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
      //       <div className='w-[80%]'>
      //         <button
      //           onClick={()=>dispatch(insertitem(product))}
      //           className="bg-gray-100 w-[100%] h-[35px] flex rounded-l-md items-center justify-center flex text-md  px-4 relative">Add</button>
      //       </div>
      //     </div>

      //   </div>
        
      // :
      // <>
            
      //       <div className="flex flex-row  h-12  rounded-lg relative bg-transparent ">
      //         <button
      //           data-action="decrement"
      //           className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-l cursor-pointer outline-none"
      //           onClick={() => dispatch(decreaseQuantity(product))}
      //         >
      //           <span className="m-auto text-xl leading-6 font-thin">−</span>
      //         </button>
      //         <input
      //           type="text"
      //           className="border-[#212121] border appearance-none focus:outline-none text-center   font-semibold text-md text-black focus:text-black md:text-base cursor-default flex items-center  outline-none"
      //           name="custom-input-number"
      //           value={quantityInitem}
      //         />
      //         <button
      //           data-action="increment"
      //           className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-r cursor-pointer outline-none"
      //           onClick={() => dispatch(increaseQuantity(product))}
      //         >
      //           <span className="m-auto text-xl leading-6 font-thin">+</span>
      //         </button>
      //       </div>
      //       </>
      //       }
      //       </>
      <div key={`${product.id}+${Date.now()}`} className="bg-white rounded-lg shadow-md p-4">
      <div onClick={() => routetodetails(product)}>
        <img src={product.image} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.image" />
      </div>
      <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
      <p className="text-gray-500 text-sm mb-5">{product.name}</p>

      {/*  */}
      {quantityInitem === 0 ?
      <div className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
        <div className='w-[80%]'>
          <button
            onClick={() => dispatch(insertitem(product))}
            className="bg-gray-100 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">Add</button>
        </div>
      </div>
      
      :
      <>
      
      <div className="flex flex-row  h-12  rounded-lg relative bg-transparent ">
        <button
          data-action="decrement"
          className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={() => dispatch(decreaseQuantity(product))}
        >
          <span className="m-auto text-xl leading-6 font-thin">−</span>
        </button>
        <input
          type="text"
          className="border-[#212121] border appearance-none focus:outline-none text-center   font-semibold text-md text-black focus:text-black md:text-base cursor-default flex items-center  outline-none"
          name="custom-input-number"
          value={quantityInitem}
        />
        <button
          data-action="increment"
          className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-r cursor-pointer outline-none"
          onClick={() => dispatch(increaseQuantity(product))}
        >
          <span className="m-auto text-xl leading-6 font-thin">+</span>
        </button>
      </div>
      </>
    }
      
      {/*  */}

      {/*  */}
    </div>
    )
  })}
</div>



</div>
  )
}

export default Sorteddata
