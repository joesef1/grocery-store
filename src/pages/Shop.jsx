import React, {useState} from 'react'
import shop from '../assets/images/Grocery-1-1.jpg'
import Pagebanner from '../components/Pagebanner'
import Data from '../Data'
import Pagination from '../components/Pagination'
import Sorteddata from '../components/Sorteddata'


const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    //
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Data.slice(firstPostIndex, lastPostIndex);



  return (
    <div>
    
      <Pagebanner
      imgname={shop}
      pagename='shop'
      />


      <Sorteddata 
       Data={currentPosts}
       totalPosts={Data.length}
        />

      <Pagination
        totalPosts={Data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      

    </div>
  )
}

export default Shop


//I have to make sorted data in separate component