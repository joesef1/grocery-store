import React, {useEffect ,useState} from 'react'
import usesubcategoryStore from '../statestore/usesubcategoryStore'
import {useDispatch, useSelector } from "react-redux";
import { filtercategory, getitems } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";
import notFound  from "../assets/images/not-found.svg";
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';
import {showMorebtn ,hideMorebtn} from '../store/itemSlice';


const ItemSection = () => {

  // const [showMoreState, setShowMoreState] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(36);


  const [addbtnstate, setAddbtnstate] = useState(false);

  const handeladdbtnstate = (product) => {
    const hoveredproduct = items.find((pro)=> pro.id === product.id)
    console.log(hoveredproduct);
    // setAddbtnstate(true)
  }
  

  const navigate = useNavigate();
  const { isLoading,error, items,filteredItems, targetedsearchword ,showMoreState} = useSelector(state => state.items);
  const { cart } = useSelector(state => state.cart);
  // const { searchIcon } = useSelector(state => state.searchIcon);
  const { sidenavstate } = useSelector(state => state.searchIcon);

  // const { targetedsearchword } = useSelector(state => state.targetedsearchword);
  const dispatch = useDispatch();
// console.log(targetedsearchword);


  useEffect(() => {
    dispatch(getitems());
    dispatch(showMorebtn());
  }, [dispatch]);

  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    setAddbtnstate(true)

  }




    function Popup() {
  return <div>This is a one-time popup!</div>;
}
const [showPopup, setShowPopup] = useState(false);
useEffect(() => {
  const popupShown = localStorage.getItem("popupShown");
  if (!popupShown) {
    setShowPopup(true);
    localStorage.setItem("popupShown", "true");
  }
}, []);


  return ( 
    <>
     























    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 gap-3 "> 
      {
      targetedsearchword !== "" ? 

      filteredItems.map((product) => {
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;

        return (
          <div key={`${product.id}+${Date.now()}*1000000000000000000000`}
          className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-150 "
          >
          <div onClick={() => routetodetails(product)}>
            <img src={product.image} alt='' className=" cursor-pointer w-full h-[176px] object-cover mb-4 bg-product.image" />
          </div>
          <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
          <p onClick={() => routetodetails(product)} className=" cursor-pointer text-gray-500 text-sm mb-5 h-[40px]">{product.name}</p>

            {/*  */}
            {quantityInitem === 0 ?

<div className='mb-3 flex w-[100%] justify-center items-center m-0 p-0 h-[35px]  translate-y-[5px]'>
<div className='w-[90%] '>
  <button
    onClick={() => dispatch(insertitem(product))}
            className="border-[#e7e7e7] border hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-200 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative text-sm"
            >ADD</button>
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
        )})
      
      : 
//,,..,
      items.slice(0, itemsToShow).map((product) => {
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;

        return (
          <div key={`${product.id}+${Date.now()}*555555550000`}
          className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-150 "
          >
          <div onClick={() => routetodetails(product)}>
            <img src={product.image} alt='' className=" cursor-pointer w-full h-[176px] object-cover mb-4 bg-product.image" />
          </div>
          <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
          <p onClick={() => routetodetails(product)} className=" cursor-pointer text-gray-500 text-sm mb-5 h-[40px]">{product.name}</p>

            {/* oreginal */}
            {quantityInitem === 0 ?
            
            <div onMouseMove={()=>handeladdbtnstate(product)} className='mb-3 flex w-[100%] justify-center items-center m-0 p-0 h-[35px]  translate-y-[5px]'>
              <div className='w-[100%] '>
                <button
                  onClick={() => dispatch(insertitem(product))}
            className="border-[#e7e7e7] font-semibold text-sm border hover:bg-[#212121] bg-[#F3F3F3] hover:text-white ease-in duration-150 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">ADD</button>
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
      }
      )    
      }
    </div>
    {/* //////////////////////////////////////////////////////////////////////////// */}

    <div className='flex justify-center items-center'>
  {


    
    (itemsToShow !== items.length && items.length >= 36 && !sidenavstate)
        &&
    
    <button  className={`text-white bg-[#212121] rounded-md py-2 mt-10 px-16 ${(itemsToShow === items.length && isLoading )? 'hidden':'block'}` } onClick={() => setItemsToShow(itemsToShow + 36)}>Show More</button>
    
  }
</div>














{
      // (filteredItems.length  === 0 && sidenavstate  && !isLoading || items.length  === 0)
      (filteredItems.length  === 0 && sidenavstate  || (!isLoading && items.length  === 0))
    // || !isLoading
    // 
    &&

    <div>
      <div className='mt-9 flex justify-center items-center flex-col  mx-auto'>
        
      <div>
      <img className='w-[80%] m-auto' src={notFound} alt="" />
      </div>
      
      <div>
      <h1 className='text-3xl font-semibold mt-14'> No Product Found :( </h1>
      </div>
      
      </div>
    </div> 

  }

  

{/* {
  (  filteredItems.length  === 0 && !searchIcon ) &&
    
    <div>
      <div className='mt-9 flex justify-center items-center flex-col  mx-auto'>
        
      <div>
      <img className='w-[80%] m-auto' src={notFound} alt="" />
      </div>
      
      <div>
      <h1 className='text-3xl font-semibold mt-14'> No Product Found :( </h1>
      </div>
      
      </div>
    </div>
    
      } */}


{
  isLoading &&
  <div class="h-screen bg-white">
<div class="flex justify-center pt-24 h-full">
  <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
</div>
</div>
}

    






































  </>
  )

  
}

export default ItemSection

