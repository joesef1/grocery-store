import React ,{useEffect, useState}from 'react'
import {useSelector } from "react-redux";
import {useDispatch } from "react-redux";
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";
import Pagebanner from '../components/Pagebanner'
import shop from '../assets/images/Grocery-1-1.jpg'
import { useLocation } from 'react-router-dom';
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';



const FilteredShop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cart } = useSelector(state => state.cart);

  const location = useLocation();
  const categoty = location.state;
  const subcategoty = location.state;
  const dispatch = useDispatch();
  const {shopitems} = useSelector(state => state.shopitems);
  const navigate = useNavigate();


  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    console.log(product);
  } 
  
  const [sortingOrder, setSortingOrder] = useState('default');
const [sortedShopItems, setSortedShopItems] = useState([...shopitems]);

useEffect(() => {
  let sortedItems = [...shopitems];
  if (sortingOrder === 'low-to-high') {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sortingOrder === 'high-to-low') {
    sortedItems.sort((a, b) => b.price - a.price);
  } else if (sortingOrder === 'latest') {
    sortedItems.sort((a, b) => b.id - a.id);
  } else if (sortingOrder === 'popularity') {
    sortedItems.sort((a, b) => a.id - b.id);
  }
  setSortedShopItems(sortedItems);
}, [sortingOrder, shopitems]);

  return (
<div>
  <Pagebanner imgname={shop} pagename={categoty ? categoty : subcategoty} />
  <div className='flex justify-between mx-auto w-[94%] mb-10'>
        <div>Showing all {shopitems.length} results</div>
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
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
  <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 gap-3  m-auto mb-12 w-[95%]"> 




    {sortedShopItems ?( 
      sortedShopItems.map((product) => { 
        const item = cart.find(item => item.id === product.id);
        const quantityInitem = item ? item.quantity : 0;
    
        return(
        
        
    <div key={`${product.id}+${Date.now()}*100000000`}
        className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-150 "
        >
        <div onClick={() => routetodetails(product)}>
          <img src={product.image} alt='' className=" cursor-pointer w-full h-[176px] object-cover mb-4 bg-product.image" />
        </div>
        <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
        <p onClick={() => routetodetails(product)} className=" cursor-pointer text-gray-500 text-sm mb-5 h-[40px]">{product.name}</p>
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
      })) :"no items" }
  </div>
</div>

  )
}

export default FilteredShop