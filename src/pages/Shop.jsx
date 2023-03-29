import React, {useState} from 'react'
import shop from '../assets/images/Grocery-1-1.jpg'
import Pagebanner from '../components/Pagebanner'
import Data from '../Data'
import { Select, Option } from "@material-tailwind/react";




const Shop = () => {
  // const [sortedData, setSortedData] = useState(Data);
  
  // const sortLowToHigh = () => {
  //   const sorted = [...sortedData].sort((a, b) => a.price - b.price);
  //   setSortedData(sorted);
  //   console.log("iglo");
  // }
  
  // const sortHighToLow = () => {
  //   const sorted = [...sortedData].sort((a, b) => b.price - a.price);
  //   setSortedData(sorted);
  // }
  const [sortingOrder, setSortingOrder] = useState('low-to-high');

  const sortedData = [...Data];

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
    <div>
      <Pagebanner
      imgname={shop}
      pagename='shop'
      />

      {/* sorting */}
      <div className='flex justify-between mx-auto w-[94%] mb-10'>
        <div>Showing 25–48 of 146 results</div>
        {/*  */}
        <select
        
            className="border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-300"
            value={sortingOrder}
            onChange={(e) => setSortingOrder(e.target.value)}
          >
            <option value="low-to-high">Sort by Low to High</option>
            <option value="high-to-low">Sort by High to Low</option>
            <option value="latest">Sort by latest</option>
            <option value="popularity">Sort by popularity</option>
          </select>
        {/*  */}
      </div>
      {/* sorting */}



<div className='w-[94%] mx-auto mb-6'>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedData.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
          <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
          <p className="text-gray-500 text-sm mb-5">{product.name}</p>
  
          <div className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
            <div className='w-[80%]'>
            <button className="bg-gray-100 w-[100%] h-[35px] flex rounded-l-md items-center justify-center flex text-md  px-4 relative">Add</button>
            </div>
            <div className='w-[20%]'>
            <button className='bg-gray-200 px-3 h-[35px] flex w-[100%] rounded-r-md justify-center text-2xl' >+</button>
            </div>
          </div>
          
        </div>
      ))}
    </div>
</div>





    </div>
  )
}

export default Shop
