import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setordersumfunc  } from '../pages/orfferFormSlice';
import { getorderList  } from '../pages/orfferFormSlice';



const Dashbaord = () => {
  const dispatch = useDispatch();
  const {ordersum } = useSelector(state => state.form);


  useEffect(() => {
    dispatch(getorderList());
  }, [dispatch]);

  return (
    <>
      <div>Dashbaord</div>

  { ordersum.map( (order,index) => (
        <>
        <div key={index*3490+order}>{order.id}</div>
        </>
      ))}
      
    </>
  )
}
export default Dashbaord


