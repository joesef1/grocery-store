import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setordersumfunc  } from '../../store/orfferFormSlice';
import { getorderList  } from '../../store/orfferFormSlice';



const Dashbaord = () => {
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
        <div key={index*3490+comment}>{comment.fullname}</div>
        </>
      ))}
    </>
  )
}
export default Dashbaord


