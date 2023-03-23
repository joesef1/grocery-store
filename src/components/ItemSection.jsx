import React from 'react'
import {product} from '../assets/data/data.js'


const ItemSection = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {product.map((product) => (
      <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
        <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
        <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
        <p className="text-gray-500 text-sm mb-5">{product.desc}</p>

        {/* <button className="bg-gray-100 w-[100%] hover:bg-slate-600 flex text-md py-2 px-4 rounded-md mt-4 relative">Add<i className='fa fa-plus bg-gray-400 p-2 rounded-md absolute right-0 top-0 bottom-0 py-3'></i></button> */}
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
  )
}

export default ItemSection
