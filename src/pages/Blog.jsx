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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div className='  mx-auto lg:w-[74%] xl:w-[70%] md:w-[80%] flex flex-col w-[90%]  lg:flex-row  justify-center'>

<div className='lg:w-[70%]   mx-auto  lg:mr-9'>
<MainBlogSection />
</div>

<div className='md:w-[30%] mb-10'>
<BlogSideSection/>
</div>      
      
      </div>
       {/* blog */}

    
    </div>

    
  )
}

export default Blog
