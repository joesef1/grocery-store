import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import  blogimg  from "../assets/images/blog.jpg";
import Pagebanner from '../components/Pagebanner';
import { useNavigate } from 'react-router-dom';
import  BlogSideSection  from "../components/BlogSideSection";




const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleCategoryClick = categoryName => {
    navigate('/CategoryBlog', { state: categoryName }).then(() => {
      window.scrollTo(0, 0);
    });

  };
  
  const location = useLocation();
  const blog = location.state;

  useEffect(() => {
    console.log(blog);
    }, [blog]);
    
  return (
    <>
      <Pagebanner
      pagename={blog.title}
      imgname={blogimg}
      />
      

    {/* <div className=' mx-auto lg:w-[70%] flex flex-col w-[70%] lg:flex-row  justify-center'> */}
    <div className='  mx-auto lg:w-[74%] xl:w-[70%] md:w-[80%] flex flex-col w-[90%]  lg:flex-row  justify-center'>
<div className='lg:w-[70%]   mx-auto  lg:mr-9'>
{/*  */}
<div>
          <div className="" >
            <img 
            className='  rounded-lg mb-8'
            src={blog.image} alt={blog.title} />
            <p >
              <span className=''>
                {blog.date}
              </span>
              


            

            </p>
            <h1 className=' text-[#333333] font-bold text-3xl my-5'>{blog.title}</h1>

          <p className='mb-11 text-gray-500 '>
              {blog.description}
          </p>

          </div>
      
    </div>
{/*  */}
<span className=' relative'>
              <span className=' font-bold text-md'>Categories :  </span>

          {blog.category.map((category, index) => (
            <button
            className="hover:underline decoration-solid  cursor-pointer  text-base  leading-1.26 transition-colors duration-300 ease-in mx-1"
            key={index} onClick={() => handleCategoryClick(category)}>
              {category} ,
            </button>
          ))}
        </span>

</div>

<div className='w-[50%] md:w-[330px]'>
<BlogSideSection/>
</div>      
      </div>

    </>
  )
}

export default BlogDetails