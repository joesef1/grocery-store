import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setordersumfunc  } from '../pages/orfferFormSlice';
import { getorderList  } from '../pages/orfferFormSlice';
import  DashboardNavbar   from './component/Header/Header';
import  DashboardSidNav   from './component/sidenav/DashboardSidNav';



const Dashbaord = () => {
  const dispatch = useDispatch();
  const {ordersum } = useSelector(state => state.form);


  useEffect(() => {
    dispatch(getorderList());
  }, [dispatch]);

  return (
    <>
    <div className='flex justify-between'>

      <div className='w-[290px] bg-slate-50'><DashboardSidNav /></div>




<div className='w-full'><DashboardNavbar/></div>
    
    </div>
  


      <div>Dashbaord</div>  
    </>
  )
}
export default Dashbaord


  // {/* { ordersum.map( (order,index) => (
  //       <>
  //       <div key={index*3490+order}>{order.id}</div>
  //       </>
  //     ))}*/}