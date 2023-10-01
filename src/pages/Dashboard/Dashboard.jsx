import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { setordersumfunc  } from '../pages/orfferFormSlice';
import { getorderList  } from '../orfferFormSlice';
// import  DashboardNavbar   from './component/Header/Header';
// import  DashboardSidNav   from './component/sidenav/DashboardSidNav';



const Dashboard = () => {
  const dispatch = useDispatch();
  // const {ordersum } = useSelector(state => state.form);


  useEffect(() => {
    dispatch(getorderList());
  }, [dispatch]);

  return (
    <>
        {/* <div className='mb-9  border-red-200 border mx-auto lg:w-[74%] xl:w-[70%] md:w-[80%] flex flex-col w-[90%]  lg:flex-row  justify-center'> */}
<div className='lg:w-[90%]   mx-auto  lg:mr-9'>
  <div>Dashboard</div>  
  
    </div>
    {/* </div> */}

  
    


      </>
  )
}
export default Dashboard
