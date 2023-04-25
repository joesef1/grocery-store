import React,{useState} from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import  all from '../assets/images/category-icons/grocery-cart.png';
import { filtercategory } from '../store/itemSlice';
import { filtersubcategory } from '../store/itemSlice';
import {useDispatch } from "react-redux";
import { getitems } from '../store/itemSlice';



// import  usesubcategoryStore  from "../statestore/usesubcategoryStore";


const CategorySection = () => {
  const dispatch = useDispatch();
  // const { filtercategory, filterSubcategory  } = usesubcategoryStore();
  // const filtercategory = usesubcategoryStore((state) => state.filtercategory)


  return (
    <div >
    <div className='w-[340px] relative'></div>

    <div className=' h-[100vh] top-[102px] bottom-0 fixed pt-6'>

    {/* <p className=' text-left w-[50%] '></p> */}
<Sidebar  backgroundColor='#fff'	 className=' h-[100vh] text-[17px] font-medium  text-[#464646]' style={{width: '340px', backgroundColor: '#fff'}} >
  <Menu >
  <MenuItem onClick={()=> dispatch(getitems())}  className='bg-white my-1 mx-1'  icon={<img src={all} width='27' alt=""  />}> <p className=' text-left w-[50%] '>All categorys</p> </MenuItem>

  <SubMenu
                onClick={() => dispatch(filtercategory("fresh vegetables"))}
    className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Fresh-Vegetables.svg"    width='26' alt="" />} label="fresh vegetables">
      <MenuItem
      onClick={() => dispatch(filtersubcategory("flower vegetables"))}
      
      > <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  Flower Vegetables</p>  </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("leaf vegetables"))}
      // onClick={() => filterSubcategory('leaf vegetables')}
      > 
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
          Leaf Vegetables</p> </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("root vegetables"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Root Vegetables</p>  </MenuItem>
      <MenuItem
      onClick={() => dispatch(filtersubcategory("seed vegetables"))}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Seed Vegetables</p>  </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("stem vegetables"))}
      
      >
                <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  

      
      Stem Vegetables</p>  </MenuItem>
    </SubMenu>

    <SubMenu 
    // onClick={() => filtercategory("")}
    onClick={() => dispatch(filtercategory("fresh fruits"))}

     
     className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Fresh-Fruites.svg" width='24' alt="" />} label="fresh fruits">
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("rerries"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
       Berries</p></MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("citrus fruite"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Citrus Fruits</p> </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("drupes"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Drupes</p>  </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("tropical fruits"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Tropical Fruits</p>  </MenuItem>
    </SubMenu>


    <SubMenu 
    onClick={() => dispatch(filtercategory("dairy & eggs"))}

    
    className='bg-white my-1 mx-1'  icon={<img className='' src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Dairy-eggs.svg" width='25' alt="" />} label="dairy & Eggs">
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("butter"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Butter</p> </MenuItem>
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("eggs"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Eggs</p></MenuItem>
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("milk"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Milk</p>  </MenuItem>
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("yougurt"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
       Yougurt</p> </MenuItem>
    </SubMenu>
      <MenuItem 
    onClick={() => dispatch(filtercategory("breakfast"))}
      
      className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Bakery.svg" width='29' alt="" />} label="breakfast"> <p className=' text-left w-[50%] '>Breakfast</p></MenuItem>

      <SubMenu 
    onClick={() => dispatch(filtercategory("frozen"))}
      className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Frozen.svg" width='22' alt="" />} label="frozen">
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("cutted fish"))}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Cutted Fish</p> </MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("cutted meat"))}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Cutted Meat</p></MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("icecream"))}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Ice cream</p></MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("packet Meals"))}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Packet Meal</p></MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("packet meat"))}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Packet Meat</p></MenuItem>
    </SubMenu>

    
    <SubMenu 
    onClick={() => dispatch(filtercategory("organic"))}
    
    className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Organic.svg" width='24' alt="" />} label="organic">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("honey"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Honey</p></MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("oil"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Oil</p></MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("syrups"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Syrup</p></MenuItem>
    </SubMenu>

      <MenuItem  
                  onClick={() => dispatch(filtercategory("canned food"))}

      className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/canned-food.svg" width='25' alt="" />}> <p className=' text-left w-[50%] '>Canned Food</p></MenuItem>
  

      <SubMenu 
                  onClick={() => dispatch(filtercategory("coffe & snacks"))}
      
      className='bg-white my-1 mx-1' 
      
      icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/coffee-cup.svg" width='28' alt="" />} label="coffe & snacks">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("chocolate"))}

      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Chocolate</p></MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("coffee"))}

      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      coffee</p></MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("chips"))}

      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      crisp</p></MenuItem>
    </SubMenu>

    <SubMenu 
                  onClick={() => dispatch(filtercategory("Beverage & Juice"))}
    className='bg-white my-1 mx-1'  icon={<img src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Beverage-Juice.svg' width='18' alt="beverage & juice" />} label="beverage & juice">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("fizzy drinks"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Fizzy Drinks</p> </MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("juices"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Juice</p></MenuItem>

    </SubMenu>



    {/*  */}
    <SubMenu 
                  onClick={() => dispatch(filtercategory("sauces & jams"))}
    className='bg-white my-1 mx-1'  icon={<img src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Sauces-Jams.svg' width='24' alt="" />} label="sauces & jams">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("jams"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Jams</p></MenuItem>

<MenuItem 
                  onClick={() => dispatch(filtersubcategory("Noodles"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Noodles</p></MenuItem>

<MenuItem 
                  onClick={() => dispatch(filtersubcategory("pasta"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Pasta</p></MenuItem>

<MenuItem 
                  onClick={() => dispatch(filtersubcategory("Sauces"))}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Sauces</p></MenuItem>

    </SubMenu>
  
  </Menu>
</Sidebar>

    </div>
    </div>
  )
}

export default CategorySection