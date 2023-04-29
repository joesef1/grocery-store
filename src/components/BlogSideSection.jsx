import React from 'react'
import  salon  from "../assets/images/salon.png";
import { Link } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const BlogSideSection = () => {
  const navigate = useNavigate();
  const { blog, isLoading, error } = useSelector(state => state.blog);
 console.log(blog);
 const routetoblogdetails = blog => {
  navigate('/BlogDetails', { state: blog }).then(() => {
    window.scrollTo(0, 0);
  });
  console.log(blog);
};

  return (
    <div>
      
       {/* sidsection  */}
<div className=''>
  <div className='  shadow-md border border-[#f5f5f5]'>
    <div className='flex justify-center '>
      <img className=' p-6'  src={salon} alt="salon" />
      </div>
  </div>
  
  
  <div className="shadow-md mt-12 p-5 border border-[#f5f5f5]">
  <p className="text-xl font-bold mb-6">Recent posts</p>
  <ul className="list-disc list-inside">
    {blog.map((post, index) => {
      return (
        <li  key={index} className="cursor-pointer mb-4 text-sm" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="mr-2 text-[#6b7280]">•</span>
          <Link
          onClick={() => routetoblogdetails(post)}
            className="block text-md hover:underline decoration-solid cursor-pointer text-[#212121] leading-1.26 transition-colors duration-300 ease-in p-1"
          >
            {post.title}
          </Link>
        </li>
      );
    })}
  </ul>
</div>




      
</div>
       {/* sidsection  */}
    </div>
  )
}

export default BlogSideSection