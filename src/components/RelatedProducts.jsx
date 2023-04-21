import React,{useState,useEffect, Component} from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { filtersubcategory } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";
import {increaseQuantity,decreaseQuantity } from '../store/cartSlice';




import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedProducts = () => {
  const { cart } = useSelector(state => state.cart);

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const {isLoading , items} = useSelector(state => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filtersubcategory(product.subcategory));
  }, [dispatch]);

  const related = items.filter((item) =>  item.id !== product.id )

  const routetodetails = (product) => {
    navigate('/Details', { state: product });
    console.log(product);
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
        // style={{ ...style, display: "block", background: "green" }}
        style={{ ...style, display: "block", background: "#000", color:"#000", borderRadius:"50%" }}

        onClick={onClick}
      />
    );
  }
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  //


  return (
    <div className='w-[90%] mt-20 mx-auto'>
      <h1 className='text-2xl font-semibold mb-10'>Related products...</h1>


      <Slider {...settings}>

        {related.map((product, index) => { 
          const item = cart.find(item => item.id === product.id);
          const quantityInitem = item ? item.quantity : 0;
          return( 
          <div key={`${product.id}+${Date.now()}`} className="bg-white rounded-lg shadow-md px-4 w-40 p-4">
            <div onClick={()=> routetodetails(product)}>
              <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
            </div>
            <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
            <p className="text-gray-500 text-sm mb-5">{product.name}</p>
            
            {/* <div  className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
              <div className='w-[80%]'>
                <button 
                  onClick={()=>dispatch(insertitem(product))}
                  className="bg-gray-100 w-[100%] h-[35px] flex rounded-l-md items-center justify-center flex text-md  px-4 relative">
                    Add
                </button>
              </div>
              
            </div> */}
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





          </div>
          )
        })}








      </Slider>
    </div>
  )
}

export default RelatedProducts;

// {items && items.map((product) => {
//   const item = cart.find(item => item.id === product.id);
//   const quantityInitem = item ? item.quantity : 0;

//   return (
//     <div key={`${product.id}+${Date.now()}`} className="bg-white rounded-lg shadow-md p-4">
//       <div onClick={() => routetodetails(product)}>
//         <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
//       </div>
//       <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
//       <p className="text-gray-500 text-sm mb-5">{product.name}</p>

//       {/*  */}
//       {quantityInitem === 0 ?
//       <div className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
//         <div className='w-[80%]'>
//           <button
//             onClick={() => dispatch(insertitem(product))}
//             className="bg-gray-100 w-[100%] h-[35px]  rounded items-center justify-center flex text-md  px-4 relative">Add</button>
//         </div>
//       </div>
      
//       :
//       <>
      
//       <div className="flex flex-row  h-12  rounded-lg relative bg-transparent ">
//         <button
//           data-action="decrement"
//           className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-l cursor-pointer outline-none"
//           onClick={() => dispatch(decreaseQuantity(product))}
//         >
//           <span className="m-auto text-xl leading-6 font-thin">−</span>
//         </button>
//         <input
//           type="text"
//           className="border-[#212121] border appearance-none focus:outline-none text-center   font-semibold text-md text-black focus:text-black md:text-base cursor-default flex items-center  outline-none"
//           name="custom-input-number"
//           value={quantityInitem}
//         />
//         <button
//           data-action="increment"
//           className="border-[#212121] border text-[#212121] hover:text-white ease-in duration-200  hover:bg-[#212121] h-full w-20 rounded-r cursor-pointer outline-none"
//           onClick={() => dispatch(increaseQuantity(product))}
//         >
//           <span className="m-auto text-xl leading-6 font-thin">+</span>
//         </button>
//       </div>
//       </>
//     }
      
//       {/*  */}

//       {/*  */}
//     </div>
//   )
// })}