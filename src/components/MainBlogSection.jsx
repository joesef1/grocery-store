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
            <img src={blog.image} alt={blog.title} />
            <p>
              {blog.date}

              <span>
          {blog.category.map((category, index) => (
            <button className='mx-2' key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </span>

            </p>
            <h1>{blog.title}</h1>
            <TextTruncate text={blog.description} maxWords={65} />
            <span
              onClick={() => routetoblogdetails(blog)}
              className="hover:underline decoration-solid  cursor-pointer text-gray-700 text-base font-semibold leading-1.26 transition-colors duration-300 ease-in"
            >
              read more
            </span>
          </div>
        ))}
      {!blog.length && <p>No blog posts available.</p>}
    </div>
  );
};

export default MainBlogSection;
