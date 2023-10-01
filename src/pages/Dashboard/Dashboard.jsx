import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { setordersumfunc  } from '../pages/orfferFormSlice';
import { getorderList  } from '../orfferFormSlice';

 import  DashboardNav   from '../../components/dashboard/mainpage/DashboardNav';
 import  DashboardContent   from '../../components/dashboard/mainpage/DashboardContent'


const Dashboard = () => {
  const dispatch = useDispatch();
  // const {ordersum } = useSelector(state => state.form);


  useEffect(() => {
    dispatch(getorderList());
  }, [dispatch]);

  return (
    <>
<div className='lg:w-[93%]   mx-auto  lg:mr-9'>

  <div className=' flex justify-between gap-10 '>

    {/* dashboardNav */}
    <di>  <DashboardNav/>  </di>
    {/* dashboardNav */}

    {/* dashboardContent */}
    <div className='w-full'>  <DashboardContent/></div>
    {/* dashboardContent */}
  </div>



  
    </div>

  
    


      </>
  )
}
export default Dashboard
