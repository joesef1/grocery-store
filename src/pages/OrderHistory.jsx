import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getorderList  } from '../store/orfferFormSlice';
import { getuserid  } from '../store/supportstaff/userSlice';
import  OrderHistoryTable  from '../components/user_order_History/OrderHistoryTable';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const {ordersum } = useSelector(state => state.form);
  const {authuserid} = useSelector(state => state.user);

  const useridorders = ordersum.filter((useridorder) => useridorder.userid === authuserid);

  
  useEffect(() => {
    dispatch(getorderList());
    dispatch(getuserid());

  }, [dispatch]);

  
    console.log(authuserid);
  
  return (
    <>
  <OrderHistoryTable
  useridorders={useridorders}
  />


    
{/* {useridorders.map((comment, index) => (
      <div key={index * 3490 + comment}>
        <h1>order {comment.fullname}</h1>
      </div>
    ))} */}


  </>
  )
}

export default OrderHistory

