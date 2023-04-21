import React, {useEffect ,useState} from 'react'
import usesubcategoryStore from '../statestore/usesubcategoryStore'
import {useDispatch, useSelector } from "react-redux";
import { getitems } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';

const ItemSection = () => {
  const navigate = useNavigate();
  const { isLoading, items } = useSelector(state => state.items);
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getitems());
  }, [dispatch]);

  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    console.log(product);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items && items.map((product) => {
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;

        return (
          <div key={`${product.id}+${Date.now()}`} className="bg-white rounded-lg shadow-md p-4">
            <div onClick={() => routetodetails(product)}>
              <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
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
  )
}

export default ItemSection

