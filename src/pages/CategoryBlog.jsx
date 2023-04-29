import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import  blogimg  from "../assets/images/blog.jpg";
import { useSelector, useDispatch } from 'react-redux';
import Pagebanner from '../components/Pagebanner';
import { useNavigate } from 'react-router-dom';
import  BlogSideSection  from "../components/BlogSideSection";
import TextTruncate from '../components/TextTruncate';
import Categoryblogcomp from "../components/Categoryblogcomp";





const CategoryBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const location = useLocation();
  const categoryName = location.state;
  const { blog, isLoading, error } = useSelector(state => state.blog);




  const filteredBlogs = blog.filter((blogPost) =>
  blogPost.category.includes(categoryName)
);


const handleCategoryClick = categoryName => {
  navigate('/CategoryBlog', { state: categoryName });



  
};

  const routetoblogdetails = blog => {
    navigate('/BlogDetails', { state: blog });
    console.log(blog);
  };

  return (
    <div>
      <Pagebanner
      pagename={categoryName}
      imgname={blogimg}
      />
{/* 
       <Categoryblogcomp/>

      <>
      <BlogSideSection />
      </> */}
      {/* <div className=' mx-auto lg:w-[70%] flex flex-col w-[70%] lg:flex-row  justify-center'> */}
      <div className='  mx-auto lg:w-[74%] xl:w-[70%] md:w-[80%] flex flex-col w-[90%]  lg:flex-row  justify-center'>

<div className='lg:w-[70%]   mx-auto  lg:mr-9'>
<Categoryblogcomp />
</div>

<div className='w-[50%] md:w-[330px]'>
<BlogSideSection/>
</div>      
      
      </div>
    </div>
  )
}

export default CategoryBlog