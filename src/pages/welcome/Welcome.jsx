import React,{useEffect} from 'react'
import {  staffStateFunc } from '../../store/supportstaff/userSlice';
import { useSelector, useDispatch } from 'react-redux';


const Welcome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((staffStateFunc()));
  
  }, []);
  return (
    <div>Welcome</div>
  )
}

export default Welcome