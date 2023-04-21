import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { insertitem } from '../store/cartSlice';
import {useDispatch, useSelector } from "react-redux";
import {clear, deleteitems ,increaseQuantity,decreaseQuantity } from '../store/cartSlice';
// import {filtercategory,filtersubcategory} from '../store/itemSlice.js';
import {filtercategoryShop,filtersubcategoryShop} from '../store/shopItemSlice';
import {Link, useNavigate  } from 'react-router-dom';
import { data } from 'autoprefixer';




const 









ItemDetail = () => {
const navigate = useNavigate();


  const location = useLocation();
  const product = location.state;
  const dispatch = useDispatch();

const {cart} = useSelector(state => state.cart);
const cartItem = cart.find(item => item.id === product.id);
const quantityInCart = cartItem ? cartItem.quantity : 0;


// const detailsitem = cart.find((item)=> item.id === product.id)
// console.log(detailsitem.quantity);

// const [detailsquantity, setDetailsQuantity] = useState(detailsitem.quantity);




// const shopwithcaregory = (category) => {
  // dispatch(filtercategory(category));
  // navigate('/FilteredShop');
  // navigate('/FilteredShop', { state: category });

  
// }

// const shopwithsubcaregory = (subcategory) => {
  // navigate('/FilteredShop', { state: subcategory });


  // dispatch(filtercategory(subcategory));
  // navigate('/FilteredShop');
  // console.log(subcategory);
// }




  return (
    <div>
      
      <>
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
                    onClick={()=> dispatch(decreaseQuantity(product))}
                  >
                    <span className="m-auto text-xl leading-6 font-thin">−</span>
                  </button>

                  <input
                    type="text"
                    className="border-[#212121] border appearance-none focus:outline-none text-center   font-semibold text-md text-black focus:text-black md:text-base cursor-default flex items-center  outline-none"
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

            className=' bg-[#212121] text-white rounded-md px-7 py-3 text-md'>add too cart</button>
          </div>
        </div>
      
        <span>category: <span className='text-bold text-lg'>
        
        {/* <p onClick={()=>shopwithcaregory(product.category)}>  
        <a 
        ></a> 
        </p> */}
        <Link
        onClick={()=>dispatch(filtercategoryShop(product.category))}
          to="/FilteredShop">{product.category}</Link>

        
        , 
        <Link
        onClick={()=>dispatch(filtersubcategoryShop(product.subcategory))}
          to="/FilteredShop">{product.subcategory}</Link>
        {/* <a
        // onClick={()=>{shopwithsubcaregory(product.subcategory)}}
        >{product.subcategory}</a> */}
        </span> </span>
        
    </div>

  
    </div> 
      </>
    </div>
  )
}

export default ItemDetail