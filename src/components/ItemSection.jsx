import React, {useEffect ,useState} from 'react'
import usesubcategoryStore from '../statestore/usesubcategoryStore'
import {useDispatch, useSelector } from "react-redux";
import { getitems } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";
import notFound  from "../assets/images/not-found.svg";
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';
import {showMorebtn ,hideMorebtn} from '../store/itemSlice';


const ItemSection = () => {

  // const [showMoreState, setShowMoreState] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(36);
  const navigate = useNavigate();
  const { isLoading, items,filteredItems, targetedsearchword ,showMoreState} = useSelector(state => state.items);
  const { cart } = useSelector(state => state.cart);
  // const { targetedsearchword } = useSelector(state => state.targetedsearchword);
  const dispatch = useDispatch();
// console.log(targetedsearchword);


  useEffect(() => {
    dispatch(getitems());
    dispatch(showMorebtn());
  }, [dispatch]);

  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    console.log(product);
  }

  return ( 
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 gap-3 "> 
      {
      targetedsearchword !== "" ? 

      filteredItems.map((product) => {
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;

        return (
          <div key={`${product.id}+${Date.now()}`} className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-200 h-350px">
            <div onClick={() => routetodetails(product)}>
              <img src={product.image} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.image" />
            </div>
            <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
            <p className="text-gray-500 text-sm mb-5 h-[40px]">{product.name}</p>

            {/*  */}
            {quantityInitem === 0 ?

<div className='mb-3 flex w-[100%] justify-center items-center m-0 p-0 h-[35px]  translate-y-[5px]'>
<div className='w-[90%] '>
  <button
    onClick={() => dispatch(insertitem(product))}
    // className="hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-150 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">Add</button>
            className="border-[#e7e7e7] border hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-200 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative"
            >Add</button>

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
            
            {/*  */}

            {/*  */}
          </div>
        )
      }
      
      )
      
      : 
      
      items.slice(0, itemsToShow).map((product) => {
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;

        return (
          <div key={`${product.id}+${Date.now()}`} className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-150">
            <div onClick={() => routetodetails(product)}>
              <img src={product.image} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.image" />
            </div>
            <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
            <p className="text-gray-500 text-sm mb-5  h-[40px]">{product.name}</p>

            {/*  */}
            {quantityInitem === 0 ?
            <div className='mb-3 flex w-[100%] justify-center items-center m-0 p-0 h-[35px]  translate-y-[5px]'>
              <div className='w-[90%] '>
                <button
                  onClick={() => dispatch(insertitem(product))}
                  // className="hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-150 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">Add</button>
            className="border-[#e7e7e7] border hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-150 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">Add</button>

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
              
            {/* </div> */}
            </>
          }
            
            {/*  */}

            {/*  */}

          </div>
        )
      }
      )
      
      }


<div></div>
  {
    filteredItems.length || items.length === 0 &&
    <div className='flex justify-center items-center flex-col w-full mx-auto'>
    <div>
    <img src={notFound} alt="" />

    </div>


    <div>
    <h1> No Product Found :( </h1>
    </div>

    </div>
  }
  

    {/* Show more button */}
    {
    itemsToShow !== items.length && showMoreState
    ?
    <button  className='text-white bg-[#212121] rounded-md py-2' onClick={() => setItemsToShow(itemsToShow + 36)}>Show More</button>
  :""}


    </div>
  )
}

export default ItemSection

