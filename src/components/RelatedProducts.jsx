import React,{useState,useEffect, Component} from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { filtersubcategory } from '../store/itemSlice';
import { insertitem } from '../store/cartSlice';
import { useNavigate } from "react-router-dom";



import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedProducts = () => {
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
        {related.map((product, index) => (
          <div key={`${product.id}+${Date.now()}`} className="bg-white rounded-lg shadow-md px-4 w-40 p-4">
            <div onClick={()=> routetodetails(product)}>
              <img src={product.cover} alt='' className="w-full h-[176px] object-cover mb-4 bg-product.cover" />
            </div>
            <p className="text-gray-700 font-medium mb-2"> ${product.price}</p>
            <p className="text-gray-500 text-sm mb-5">{product.name}</p>
            <div  className='flex w-[100%] justify-center items-center m-0 p-0 h-[35px]'>
              <div className='w-[80%]'>
                <button 
                  onClick={()=>dispatch(insertitem(product))}
                  className="bg-gray-100 w-[100%] h-[35px] flex rounded-l-md items-center justify-center flex text-md  px-4 relative">
                    Add
                </button>
              </div>
              <div className='w-[20%]'>
                <button className='bg-gray-200 px-3 h-[35px] flex w-[100%] rounded-r-md justify-center text-2xl' >+</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default RelatedProducts;
