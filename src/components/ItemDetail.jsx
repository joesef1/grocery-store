import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { insertitem } from '../store/cartSlice';
import {useDispatch, useSelector } from "react-redux";
import {clear, deleteitems ,increaseQuantity,decreaseQuantity } from '../store/cartSlice';
// import {filtercategory,filtersubcategory} from '../store/itemSlice.js';
import {filtercategoryShop,filtersubcategoryShop} from '../store/shopItemSlice';
import {Link, useNavigate  } from 'react-router-dom';
import { data } from 'autoprefixer';




const ItemDetail = () => {










const navigate = useNavigate();


  const location = useLocation();
  const product = location.state;
  const dispatch = useDispatch();

const {cart} = useSelector(state => state.cart);
const cartItem = cart.find(item => item.id === product.id);
const quantityInCart = cartItem ? cartItem.quantity : 0;




const handleLinkClickcategoty = (categoty) => {
  dispatch(filtercategoryShop(categoty))
navigate('/FilteredShop', { state: categoty });
}

const handleLinkClicksubcategoty = (subcategoty) => {
  dispatch(filtersubcategoryShop(subcategoty))
navigate('/FilteredShop', { state: subcategoty });
}




  return (
    <div>
      
      <>
      <div className='flex md:flex-row md:justify-between flex-col justify-center w-[90%] mx-auto mt-24'>
      <div className='h-[90vh]  md:w-[50%]'>
      <img className='md:w-[90%] h-[80%] bg-no- object-cover	bg-cover	bg-center	' src={product.image} alt=''/>
      </div>
    <div className='md:w-[50%]'>
        <h1 className='text-3xl mb-5'>{product.name}</h1>
        <p className='text-2xl font-semibold mb-7'>${product.price}</p>
        <p className='text-gray-500'>description{product.description}</p>


        <div className='my-12 flex  md:items-start sm:items-start items-center  md:flex-row flex-col '>

          <div className='md:mr-3  '>
          <div className="flex flex-row  h-12  rounded-lg relative bg-transparent ">
                  <button
                    data-action="decrement"
                    className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-l cursor-pointer outline-none"
                    onClick={()=> dispatch(decreaseQuantity(product))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">−</span>
                  </button>

                  <input
                    type="text"
                    className="border-[#212121] w-[150px] border appearance-none focus:outline-none text-center   font-semibold text-md text-black focus:text-black md:text-base cursor-default flex items-center  outline-none"
                    name="custom-input-number"
                    value={quantityInCart}
                  />

                  <button
                    data-action="increment"
                    className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-r cursor-pointer outline-none"
                    onClick={()=> dispatch(increaseQuantity(product))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">+</span>
                  </button>
                </div>
          </div>


          <div>
            <button
              onClick={()=>dispatch(insertitem(product))}
              className=' bg-[#212121] md:my-0 mb-5 mt-5 text-white rounded-md md:px-7 px-28 py-3 text-md'>add too cart
              </button>
          </div>
        </div>


        <div className='mb-16'>
        <span  className=''>
          <span className='text-lg font-bold'>category :</span>  <span className='text-bold text-lg'>
      
        <p
        className='inline-block	 cursor-pointer'
        onClick={()=>handleLinkClickcategoty(product.category)}
          >{product.category}  , </p>
        &nbsp;
  
<p
className='inline-block	cursor-pointer'
        onClick={()=>handleLinkClicksubcategoty(product.subcategory)}
          >{product.subcategory} </p>

        </span> 
        </span>
        </div>
    </div>

  
    </div> 
      </>
    </div>
  )
}

export default ItemDetail