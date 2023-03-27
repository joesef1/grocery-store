import React,{useState,useEffect} from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import  apple from '../assets/icons/apple.png';
import  frozen from '../assets/icons/cold.png';
import  carrot from '../assets/icons/carrot.png';
import  coffee from '../assets/icons/coffee.png';
import  canned from '../assets/icons/canned-food.png';
import  milk from '../assets/icons/milk.png';
import  breakfast from '../assets/icons/english-breakfast.png';
import  organic from '../assets/icons/organic.png';
import  lemonadas from '../assets/icons/lemonades.png';
import  Data from '../Data';



const CategorySection = () => {



  
  const [originalData, setOriginalData] = useState(Data);
const [data, setData] = useState(originalData);

const filterResult = (category) => {
  const result = originalData.filter((item) => item.category === category);
  setData(result);
  console.log(result);
};

const filterSubcategory = (subcategory) => {
  const result = data.filter((item) => item.subcategory === subcategory);
  setData(result);
  console.log(result);
};


  

  return (
    <>
    <div className='w-[300px] relative'></div>

    <div className='w-[300px]  h-[100vh] top-[102px] bottom-0 fixed'>

    
<Sidebar backgroundColor='#fff'	 className=' h-[100vh] ' style={{width: '300px', backgroundColor: '#fff'}} >
  <Menu >
  <SubMenu onClick={() => filterResult('fresh vegetables')}  className='bg-white' icon={<img src={carrot} width='21' alt="" />} label="fresh vegetables">
      <MenuItem > Flower Vegetables</MenuItem>
      <MenuItem onClick={() => filterSubcategory('leaf vegetables')}> Leaf Vegetables </MenuItem>
      <MenuItem> Root Vegetables </MenuItem>
      <MenuItem> Seed Vegetables </MenuItem>
      <MenuItem> stem Vegetables </MenuItem>
    </SubMenu>

    <SubMenu onClick={() => filterResult('fresh fruits')}  className='bg-white' icon={<img src={apple} width='21' alt="" />} label="fresh fruits">
      <MenuItem> Berries</MenuItem>
      <MenuItem> Citrus Fruits</MenuItem>
      <MenuItem> Drupes </MenuItem>
      <MenuItem> tropical fruits </MenuItem>
    </SubMenu>


    <SubMenu   className='bg-white' icon={<img src={milk} width='21' alt="" />} label="dairy & Eggs">
      <MenuItem> Berries</MenuItem>
      <MenuItem> Citrus Fruits</MenuItem>
      <MenuItem> Drupes </MenuItem>
      <MenuItem> tropical fruits </MenuItem>
    </SubMenu>
      <MenuItem   className='bg-white' icon={<img src={breakfast} width='21' alt="" />} label="breakfast">breakfast</MenuItem>

      <SubMenu   className='bg-white' icon={<img src={frozen} width='21' alt="" />} label="frozen">
      <MenuItem>Cutted Fish </MenuItem>
      <MenuItem>Cutted Meat </MenuItem>
      <MenuItem>Ice cream </MenuItem>
      <MenuItem>Packet Meal </MenuItem>
      <MenuItem>Packet meat</MenuItem>
    </SubMenu>

    
    <SubMenu   className='bg-white' icon={<img src={organic} width='21' alt="" />} label="organic">
      <MenuItem>honey </MenuItem>
      <MenuItem>oil </MenuItem>
      <MenuItem>syrup </MenuItem>
    </SubMenu>

      <MenuItem   className='bg-white' icon={<img src={canned} width='21' alt="" />}>canned food</MenuItem>
  

      <SubMenu  className='bg-white' icon={<img src={coffee} width='21' alt="" />} label="coffe & snacks">
      <MenuItem>Chocolate </MenuItem>
      <MenuItem>coffee </MenuItem>
      <MenuItem>crisp </MenuItem>
    </SubMenu>

    <SubMenu   className='bg-white' icon={<img src={lemonadas} width='21' alt="beverage & juice" />} label="beverage & juice">
      <MenuItem>fizzy drinks </MenuItem>
      <MenuItem>juice </MenuItem>

    </SubMenu>
  

    






  </Menu>
</Sidebar>

    </div>
    </>
  )
}

export default CategorySection