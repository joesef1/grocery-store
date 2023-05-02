import React,{useState,useEffect} from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import  all from '../assets/images/category-icons/grocery-cart.png';
import { filtercategory } from '../store/itemSlice';
import { filtersubcategory } from '../store/itemSlice';
import {useDispatch,useSelector } from "react-redux";
import { getitems } from '../store/itemSlice';
import {showMorebtn ,hideMorebtn} from '../store/itemSlice';
import '../index.css'






// import  usesubcategoryStore  from "../statestore/usesubcategoryStore";


const CategorySection = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const [openSubMenuId, setOpenSubMenuId] = useState(null);


  const dispatch = useDispatch();

  const handleSubMenuClick = (id) => {
    if (id === 'all') {
      dispatch(getitems());
    } else {
      dispatch(filtercategory(id));
    }

    // close the previously open submenu (if any)
    if (openSubMenuId && openSubMenuId !== id) {
      setOpenSubMenuId(null);
    }

    // toggle the clicked submenu
    setOpenSubMenuId((prevId) => (prevId === id ? null : id));
  };
  

  const handleMenuClick = () => {
    dispatch(getitems());
    dispatch(showMorebtn());

  }
  



  const filtersubcategorys = (sub) => {
    dispatch(filtersubcategory(sub))
  }
  
  
  return (
    <div >
    <div className='w-[340px] relative '></div>

    <div
    
     className=' md:h-[60vh] md:top-[102px] md:bottom-0 md:fixed md:pt-6   absolute top-0 bottom-0 left-0 right-0 '
     >

    {/* <p className=' text-left w-[50%] '></p> */}
<Sidebar  id='categorysection' backgroundColor='#fff'	 className=' md:w-[30px] bg-white md:h-[86vh] text-[17px] font-medium  text-[#464646]' style={{width: '340px', backgroundColor: '#fff'}} >
  <Menu className='h-[100vh]   '  >
  <MenuItem 
  
  onClick={() => handleMenuClick()}
  className='bg-white my-1 mx-1'  icon={<img src={all} width='27' alt=""  />}> <p className=' text-left w-[50%] '>All categorys</p> </MenuItem>

  <SubMenu
                // onClick={() => handleSubMenuClick("fresh vegetables")}
                isOpen={openSubMenuId === 'fresh vegetables'}
                onClick={() => handleSubMenuClick('fresh vegetables')}


    className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Fresh-Vegetables.svg"    width='26' alt="" />} label="fresh vegetables">
      <MenuItem
      onClick={() => filtersubcategorys("flower vegetables")}
      
      > <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  Flower Vegetables</p>  </MenuItem>
      <MenuItem 
      onClick={() => filtersubcategorys("leaf vegetables")}
      // onClick={() => filtersubcategorys('leaf vegetables')}
      > 
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
          Leaf Vegetables</p> </MenuItem>
      <MenuItem 
      onClick={() => filtersubcategorys("root vegetables")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Root Vegetables</p>  </MenuItem>
      <MenuItem
      onClick={() => filtersubcategorys("seed vegetables")}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Seed Vegetables</p>  </MenuItem>
      <MenuItem 
      onClick={() => filtersubcategorys("stem vegetables")}
      
      >
                <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  

      
      Stem Vegetables</p>  </MenuItem>
    </SubMenu>

    <SubMenu 
    
    isOpen={openSubMenuId === 'fresh fruits'}
    onClick={() => handleSubMenuClick('fresh fruits')}


     
     className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Fresh-Fruites.svg" width='24' alt="" />} label="fresh fruits">
      <MenuItem 
      onClick={() => filtersubcategorys("rerries")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
       Berries</p></MenuItem>
      <MenuItem 
      onClick={() => filtersubcategorys("citrus fruite")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Citrus Fruits</p> </MenuItem>
      <MenuItem 
      onClick={() => filtersubcategorys("drupes")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Drupes</p>  </MenuItem>
      <MenuItem 
      onClick={() => filtersubcategorys("tropical fruits")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Tropical Fruits</p>  </MenuItem>
    </SubMenu>


    <SubMenu 
    onClick={() => handleSubMenuClick("dairy & eggs")}

    
    className='bg-white my-1 mx-1'  icon={<img className='' src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Dairy-eggs.svg" width='25' alt="" />} label="dairy & Eggs">
      <MenuItem  
            onClick={() => filtersubcategorys("butter")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Butter</p> </MenuItem>
      <MenuItem  
            onClick={() => filtersubcategorys("eggs")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Eggs</p></MenuItem>
      <MenuItem  
            onClick={() => filtersubcategorys("milk")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Milk</p>  </MenuItem>
      <MenuItem  
            onClick={() => filtersubcategorys("yougurt")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
       Yougurt</p> </MenuItem>
    </SubMenu>
      <MenuItem 
    onClick={() => handleSubMenuClick("breakfast")}
      
      className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Bakery.svg" width='29' alt="" />} label="breakfast"> <p className=' text-left w-[50%] '>Breakfast</p></MenuItem>

      <SubMenu 
    onClick={() => handleSubMenuClick("frozen")}
      className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Frozen.svg" width='22' alt="" />} label="frozen">
      <MenuItem 
            onClick={() => filtersubcategorys("cutted fish")}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Cutted Fish</p> </MenuItem>
      <MenuItem 
            onClick={() => filtersubcategorys("cutted meat")}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Cutted Meat</p></MenuItem>
      <MenuItem 
            onClick={() => filtersubcategorys("icecream")}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Ice cream</p></MenuItem>
      <MenuItem 
            onClick={() => filtersubcategorys("packet Meals")}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Packet Meal</p></MenuItem>
      <MenuItem 
            onClick={() => filtersubcategorys("packet meat")}
      
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Packet Meat</p></MenuItem>
    </SubMenu>

    
    <SubMenu 
    onClick={() => handleSubMenuClick("organic")}
    
    className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Organic.svg" width='24' alt="" />} label="organic">
      <MenuItem 
                  onClick={() => filtersubcategorys("honey")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Honey</p></MenuItem>
      <MenuItem 
                  onClick={() => filtersubcategorys("oil")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Oil</p></MenuItem>
      <MenuItem 
                  onClick={() => filtersubcategorys("syrups")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Syrup</p></MenuItem>
    </SubMenu>

      <MenuItem  
                  onClick={() => handleSubMenuClick("canned food")}

      className='bg-white my-1 mx-1'  icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/canned-food.svg" width='25' alt="" />}> <p className=' text-left w-[50%] '>Canned Food</p></MenuItem>
  

      <SubMenu 
                  onClick={() => handleSubMenuClick("coffe & snacks")}
      
      className='bg-white my-1 mx-1' 
      
      icon={<img src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/coffee-cup.svg" width='28' alt="" />} label="coffe & snacks">
      <MenuItem 
                  onClick={() => filtersubcategorys("chocolate")}

      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Chocolate</p></MenuItem>
      <MenuItem 
                  onClick={() => filtersubcategorys("coffee")}

      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      coffee</p></MenuItem>
      <MenuItem 
                  onClick={() => filtersubcategorys("chips")}

      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      crisp</p></MenuItem>
    </SubMenu>

    <SubMenu 
                  onClick={() => handleSubMenuClick("Beverage & Juice")}
    className='bg-white my-1 mx-1'  icon={<img src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Beverage-Juice.svg' width='18' alt="beverage & juice" />} label="beverage & juice">
      <MenuItem 
                  onClick={() => filtersubcategorys("fizzy drinks")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Fizzy Drinks</p> </MenuItem>
      <MenuItem 
                  onClick={() => filtersubcategorys("juices")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Juice</p></MenuItem>

    </SubMenu>



    {/*  */}
    <SubMenu 
                  onClick={() => handleSubMenuClick("sauces & jams")}
    className='bg-white my-1 mx-1'  icon={<img src='https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Sauces-Jams.svg' width='24' alt="" />} label="sauces & jams">
      <MenuItem 
                  onClick={() => filtersubcategorys("jams")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Jams</p></MenuItem>

<MenuItem 
                  onClick={() => filtersubcategorys("Noodles")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Noodles</p></MenuItem>

<MenuItem 
                  onClick={() => filtersubcategorys("pasta")}
      >
      <p className=' text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]'>  
      
      Pasta</p></MenuItem>

<MenuItem 
                  onClick={() => filtersubcategorys("Sauces")}
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