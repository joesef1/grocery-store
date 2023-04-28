import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getblog } from '../store/blogSlice';
import { useNavigate } from 'react-router-dom';
import TextTruncate from './TextTruncate';

const MainBlogSection = () => {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const { blog, isLoading, error } = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(getblog());
  }, [dispatch]);

  const routetoblogdetails = blog => {
    navigate('/BlogDetails', { state: blog });
    console.log(blog);
  };


  const handleCategoryClick = categoryName => {
    navigate('/CategoryBlog', { state: categoryName });

  };
  
  return (
    <div>
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
              


              <span className=' mx-3 px-5 relative'>
              <span class="absolute bg-[#212121] rounded-full h-2 w-2 left-0 top-1/2 transform -translate-y-1/2"></span>

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
      {!blog.length && <p>No blog posts available.</p>}
    </div>
  );
};

export default MainBlogSection;
