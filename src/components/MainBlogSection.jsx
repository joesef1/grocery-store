import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getblog } from '../store/blogSlice';
import { useNavigate } from 'react-router-dom';
import TextTruncate from './TextTruncate';
import Categoryblogcomp from "../components/Categoryblogcomp";

const MainBlogSection = () => {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const { blog, isLoading, error } = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(getblog());
  }, [dispatch]);

  const routetoblogdetails = blog => {
    navigate('/BlogDetails', { state: blog }).then(() => {
      window.scrollTo(0, 0);
    });
    console.log(blog);
  };


  const handleCategoryClick = categoryName => {
    navigate('/CategoryBlog', { state: categoryName }).then(() => {
      window.scrollTo(0, 0);
    });
  

  };
  
  return (
    <div>
      
      {
  isLoading &&
  <div class="h-screen bg-white">
<div class="flex justify-center mt-28 h-full">
  <img  className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
</div>
</div>
}
      {blog &&
        blog.map((blog, index) => (
          <div className="" key={blog.id * index * 4000}>
            <img 
            className='  rounded-lg mb-8'
            src={blog.image} alt={blog.title} />
            <p >
              <span className=''>
                {blog.date}
              </span>
              


              <span className='  px-5 relative'>
              <span className='mr-2'>&#x2022;</span>

          {blog.category.map((category, index) => (

            <button
            className="hover:underline decoration-solid  cursor-pointer  text-base  leading-1.26 transition-colors duration-300 ease-in mx-1"
            key={index} onClick={() => handleCategoryClick(category)}>
              {category} ,
            </button>

          ))}
        </span>

            </p>
            <h1 className=' text-[#333333] font-bold text-3xl my-5'>{blog.title}</h1>

          <p className='mb-11 text-gray-500'>
              <TextTruncate text={blog.description} maxWords={65} />
              <span
                onClick={() => routetoblogdetails(blog)}
                className=" block my-7 hover:underline decoration-solid  cursor-pointer text-gray-700 text-base font-semibold leading-1.26 transition-colors duration-300 ease-in"
              >
                Read More
              </span>
          </p>

          </div>
        ))}
      
    </div>
    // <Categoryblogcomp/>

  );
};

export default MainBlogSection;

