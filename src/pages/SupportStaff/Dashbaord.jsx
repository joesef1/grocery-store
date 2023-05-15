import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setordersumfunc  } from '../../store/orfferFormSlice';
import { getorderList  } from '../../store/orfferFormSlice';


const Dashbaord = () => {
  const {ordersum } = useSelector(state => state.form);

  useEffect(() => {
    getorderList()
  }, []);

  return (
    <>
      <div>Dashbaord</div>  
    </>
  )
}
export default Dashbaord



  {/* { ordersum.map( (comment,index) => (
        <><h1>{comment.fullname}</h1></>
      ))} */}