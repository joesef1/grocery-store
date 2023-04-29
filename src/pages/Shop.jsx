import React, {useState,useEffect} from 'react'
import shop from '../assets/images/Grocery-1-1.jpg'
import Pagebanner from '../components/Pagebanner'
import Data from '../Data'
import Pagination from '../components/Pagination'
import Sorteddata from '../components/Sorteddata'
//
import {getitems} from "../store/itemSlice";
import {useDispatch, useSelector } from "react-redux";

//

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  // const [selectedData, setSelectedData] = useState(null);
  const {isLoading , items} = useSelector(state => state.items);
  const dispatch = useDispatch();

  //
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(24);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = items.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
      dispatch(getitems());
    }, [dispatch]);
    

  return (
    <div>
    
      <Pagebanner
      imgname={shop}
      pagename='shop'
      />


      <Sorteddata 
      items={currentPosts}
      totalPosts={items.length}
      lastPostIndex={lastPostIndex}
      firstPostIndex={firstPostIndex}
        />

      <Pagination
        totalPosts={items.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      

    </div>
  )
}

export default Shop


//I have to make sorted data in separate component