import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import  blogimg  from "../assets/images/blog.jpg";
import { useSelector, useDispatch } from 'react-redux';
import Pagebanner from '../components/Pagebanner';
import { useNavigate } from 'react-router-dom';
import  BlogSideSection  from "../components/BlogSideSection";
import TextTruncate from '../components/TextTruncate';

const Categoryblogcomp = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const categoryName = location.state;
  const { blog, isLoading, error } = useSelector(state => state.blog);




  const filteredBlogs = blog.filter((blogPost) =>
  blogPost.category.includes(categoryName)
);


const handleCategoryClick = categoryName => {
  navigate('/CategoryBlog', { state: categoryName }).then(() => {
    window.scrollTo(0, 0);
    alert("scroll")
  });



  
};

  const routetoblogdetails = blog => {
    navigate('/BlogDetails', { state: blog }).then(() => {
      window.scrollTo(0, 0);
    });
    console.log(blog);
  };

  return (
    <div>
        <div>
      {filteredBlogs &&
        filteredBlogs.map((blog, index) => (
          <div className="" key={blog.id * index * 4000}>
            <img 
            className='  rounded-lg mb-8'
            src={blog.image} alt={blog.title} />
            <p >
              <span className=''>
                {blog.date}
              </span>
              
              <span className='px-5 relative'>
            
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
      {!blog.length && <p>No blog posts available.</p>}
    </div>
    </div>
  )
}

export default Categoryblogcomp