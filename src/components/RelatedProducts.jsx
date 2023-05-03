import React,{useState,useEffect, Component} from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { filtersubcategory,filtercategory } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// 
const chunkSize = 4;

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
// 

const RelatedProducts = () => {
  const {isLoading , items} = useSelector(state => state.items);
  const dispatch = useDispatch();
  const location = useLocation();
const product = location.state;
  useEffect(() => {
    dispatch(filtersubcategory(product.subcategory));
  }, [dispatch]);
  const related = items.filter((item) =>  item.id !== product.id )
  const relatedChunks = chunkArray(related, chunkSize);
const { cart } = useSelector(state => state.cart);
const navigate = useNavigate();



  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    console.log(product);
    window.scrollTo(0, 0);
  }


  //
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000", color:"#000", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000", color:"#000", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  //





  return (
    <div className="w-[90%] my-20 mx-auto">
    <h1 className="text-2xl font-semibold mb-10">Related products...</h1>
    {/* <Slider {...settings}> */}
      {relatedChunks.map((chunk) => (
        <div
          key={chunk[0].id}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
        >
          {chunk.map((product) =>{ 
  const item = cart.find(item => item.id === product.id);
  const quantityInitem = item ? item.quantity : 0;

  return(
  
    <div key={`${product.id}+${Date.now()}*10000`}
    className="bg-white border-slate-0 border rounded-lg hover:shadow-md p-4 hover:translate-y-[-5px] ease-in duration-150 "
    >
    <div onClick={() => routetodetails(product)}>
      <img src={product.image} alt='' className=" cursor-pointer w-full h-[176px] object-cover mb-4 bg-product.image" />
    </div>
    <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
    <p onClick={() => routetodetails(product)} className=" cursor-pointer text-gray-500 text-sm mb-5 h-[40px]">{product.name}</p>

    {quantityInitem === 0 ?
      <div className='mb-3  flex w-[100%] justify-center items-center m-0 p-0 h-[35px]  translate-y-[5px]'>
      <div className='w-[90%] '>
        <button
          onClick={() => dispatch(insertitem(product))}
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
})}

        </div>
      ))}
    {/* </Slider> */}
  </div>



  )
}

export default RelatedProducts;