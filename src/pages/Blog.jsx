import React,{useEffect} from 'react'
import  blogimg  from "../assets/images/blog.jpg";
import  MainBlogSection  from "../components/MainBlogSection";
import  BlogSideSection  from "../components/BlogSideSection";
import  salon  from "../assets/images/salon.png";
import Pagebanner from '../components/Pagebanner'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
// import { getblog } from '../store/blogSlice';





const Blog = () => {
  const dispatch = useDispatch();
  const { blog, isLoading, error } = useSelector(state => state.blog);

  // useEffect(() => {
  //   dispatch(getblog());
  // }, [dispatch]);

  return (
    <div>
      <Pagebanner
      pagename='Blog'
      imgname={blogimg}
      />
       {/* blog */}
      <div className=' mx-auto w-[90%] flex justify-between'>
        


       {/* mainsection  */}
<div className='w-[70%]  mr-9'>
<MainBlogSection />

{/* {blog && blog.map((item, index) => (
      <div className='' key={item.id*index*4000}> 
        <h1>{item.date} blog</h1>
      </div>
    ))}
{!blog.length && <p>No blog posts available.</p>} */}
</div>
       {/* mainsection  */}

  <BlogSideSection/>
       
       </div>
       {/* blog */}

    
    </div>

    
  )
}

export default Blog
