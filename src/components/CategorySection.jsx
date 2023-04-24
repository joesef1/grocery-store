import React,{useState} from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
import  apple from '../assets/icons/apple.png';
import  frozen from '../assets/icons/cold.png';
import  carrot from '../assets/icons/carrot.png';
import  coffee from '../assets/icons/coffee.png';
import  canned from '../assets/icons/canned-food.png';
import  all from '../assets/icons/all.png';
// import  jam from '../assets/icons/jam';
import  milk from '../assets/icons/milk.png';
import  breakfast from '../assets/icons/english-breakfast.png';
import  organic from '../assets/icons/organic.png';
import  sauses from '../assets/images/sauses.png';
import  lemonadas from '../assets/icons/lemonades.png';
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
    <>
    <div className='w-[300px] relative'></div>

    <div className='w-[300px]  h-[100vh] top-[102px] bottom-0 fixed'>

    
<Sidebar backgroundColor='#fff'	 className=' h-[100vh] ' style={{width: '300px', backgroundColor: '#fff'}} >
  <Menu >
  <MenuItem onClick={()=> dispatch(getitems())}  className='bg-white' icon={<img src={all} width='21' alt="" />}>All categorys</MenuItem>

  <SubMenu
                onClick={() => dispatch(filtercategory("fresh vegetables"))}
                // onClick={() => filtercategory("fresh vegetables")}

    className='bg-white' icon={<img src={carrot} width='21' alt="" />} label="fresh vegetables">
      <MenuItem
      onClick={() => dispatch(filtersubcategory("flower vegetables"))}
      
      > Flower Vegetables</MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("leaf vegetables"))}
      // onClick={() => filterSubcategory('leaf vegetables')}
      > 
      Leaf Vegetables </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("root vegetables"))}
      > Root Vegetables </MenuItem>
      <MenuItem
      onClick={() => dispatch(filtersubcategory("seed vegetables"))}
      
      > Seed Vegetables </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("stem vegetables"))}
      
      > stem Vegetables </MenuItem>
    </SubMenu>

    <SubMenu 
    // onClick={() => filtercategory("")}
    onClick={() => dispatch(filtercategory("fresh fruits"))}

     
     className='bg-white' icon={<img src={apple} width='21' alt="" />} label="fresh fruits">
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("rerries"))}
      > Berries</MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("citrus fruite"))}
      > Citrus Fruits</MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("drupes"))}
      > Drupes </MenuItem>
      <MenuItem 
      onClick={() => dispatch(filtersubcategory("tropical fruits"))}
      > tropical fruits </MenuItem>
    </SubMenu>


    <SubMenu 
    onClick={() => dispatch(filtercategory("dairy & eggs"))}

    
    className='bg-white' icon={<img src={milk} width='21' alt="" />} label="dairy & Eggs">
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("butter"))}
      > Butter</MenuItem>
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("eggs"))}
      > Eggs</MenuItem>
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("milk"))}
      > Milk </MenuItem>
      <MenuItem  
            onClick={() => dispatch(filtersubcategory("yougurt"))}
      > Yougurt </MenuItem>
    </SubMenu>
      <MenuItem 
    onClick={() => dispatch(filtercategory("breakfast"))}
      
      className='bg-white' icon={<img src={breakfast} width='21' alt="" />} label="breakfast">Breakfast</MenuItem>

      <SubMenu 
    onClick={() => dispatch(filtercategory("frozen"))}
      className='bg-white' icon={<img src={frozen} width='21' alt="" />} label="frozen">
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("cutted fish"))}
      
      >Cutted Fish </MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("cutted meat"))}
      
      >Cutted Meat </MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("icecream"))}
      
      >Ice cream </MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("packet Meals"))}
      
      >Packet Meal </MenuItem>
      <MenuItem 
            onClick={() => dispatch(filtersubcategory("packet meat"))}
      
      >Packet meat</MenuItem>
    </SubMenu>

    
    <SubMenu 
    onClick={() => dispatch(filtercategory("organic"))}
    
    className='bg-white' icon={<img src={organic} width='21' alt="" />} label="organic">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("honey"))}
      >honey </MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("oil"))}
      >oil </MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("syrups"))}
      >syrup </MenuItem>
    </SubMenu>

      <MenuItem  
                  onClick={() => dispatch(filtercategory("canned food"))}

      className='bg-white' icon={<img src={canned} width='21' alt="" />}>canned food</MenuItem>
  

      <SubMenu 
                  onClick={() => dispatch(filtercategory("coffe & snacks"))}
      
      className='bg-white'
      
      icon={<img src={coffee} width='21' alt="" />} label="coffe & snacks">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("chocolate"))}

      >Chocolate </MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("coffee"))}

      >coffee </MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("chips"))}

      >crisp </MenuItem>
    </SubMenu>

    <SubMenu 
                  onClick={() => dispatch(filtercategory("Beverage & Juice"))}
    className='bg-white' icon={<img src={lemonadas} width='21' alt="beverage & juice" />} label="beverage & juice">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("fizzy drinks"))}
      >fizzy drinks </MenuItem>
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("juices"))}
      >juice </MenuItem>

    </SubMenu>



    {/*  */}
    <SubMenu 
                  onClick={() => dispatch(filtercategory("sauces & jams"))}
    className='bg-white' icon={<img src={sauses} width='21' alt="" />} label="sauces & jams">
      <MenuItem 
                  onClick={() => dispatch(filtersubcategory("jams"))}
      >jams </MenuItem>

<MenuItem 
                  onClick={() => dispatch(filtersubcategory("Noodles"))}
      >noodles </MenuItem>

<MenuItem 
                  onClick={() => dispatch(filtersubcategory("pasta"))}
      >pasta </MenuItem>

<MenuItem 
                  onClick={() => dispatch(filtersubcategory("Sauces"))}
      >sauces </MenuItem>

    </SubMenu>
  
  </Menu>
</Sidebar>

    </div>
    </>
  )
}

export default CategorySection