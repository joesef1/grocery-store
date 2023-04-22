import React from 'react'
import { useLocation } from 'react-router-dom';
import  blogimg  from "../assets/images/blog.jpg";
import Pagebanner from '../components/Pagebanner';
import { useNavigate } from 'react-router-dom';
import  BlogSideSection  from "../components/BlogSideSection";




const BlogDetails = () => {
  const navigate = useNavigate();

  const handleCategoryClick = categoryName => {
    navigate('/CategoryBlog', { state: categoryName });

  };
  
  const location = useLocation();
  const blog = location.state;
  return (
    <>
      <Pagebanner
      pagename={blog.title}
      imgname={blogimg}
      />
    <div>
      <img src={blog.image} alt={blog.title} />
        <p>{blog.date} </p> <p>{blog.category}</p>
        <h1>{blog.title} </h1>
        <h1>{blog.description} </h1>
    </div>

    <h2>category:
    <span>
          {blog.category.map((category, index) => (
            <button className='mx-2' key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </span>

      
      </h2>

      <>
       <BlogSideSection />
      </>
    </>
  )
}

export default BlogDetails