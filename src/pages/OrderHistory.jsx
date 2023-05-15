import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { setordersumfunc  } from '../../store/orfferFormSlice';
import { getorderList  } from '../store/orfferFormSlice';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const {ordersum } = useSelector(state => state.form);

  
  useEffect(() => {
    dispatch(getorderList());
  }, [dispatch]);

  return (
    <>
    <div>Dashbaord</div>

{ ordersum.map( (comment,index) => (
      <>
      <div key={index*3490+comment}> <h1> order {comment.fullname}</h1></div>
      </>
    ))}
  </>
  )
}

export default OrderHistory