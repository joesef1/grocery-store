import React, {useEffect} from 'react'
import usesubcategoryStore from '../statestore/usesubcategoryStore'
import {useDispatch, useSelector } from "react-redux";
import { getitems } from '../store/itemSlice';



const ItemSection = () => {
const {isLoading , items} = useSelector(state => state.items);
const dispatch = useDispatch();


  const data = usesubcategoryStore((state) => state.data)
  useEffect(() => {
    dispatch(getitems());
  }, [dispatch]);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((product) => (
      <div key={`${product.id}+${Date.now()}`} className="bg-white rounded-lg shadow-md p-4">
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
  )
}

export default ItemSection

