import React from 'react'
import { useLocation } from 'react-router-dom';
import  blogimg  from "../assets/images/blog.jpg";
import { useSelector, useDispatch } from 'react-redux';
import Pagebanner from '../components/Pagebanner';
import { useNavigate } from 'react-router-dom';
import  BlogSideSection  from "../components/BlogSideSection";


const CategoryBlog = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const categoryName = location.state;
  const { blog } = useSelector(state => state.blog);



  const filteredBlogs = blog.filter((blogPost) =>
  blogPost.category.includes(categoryName)
);


const handleCategoryClick = categoryName => {
  navigate('/CategoryBlog', { state: categoryName });

};
  return (
    <div>
      <Pagebanner
      pagename={categoryName}
      imgname={blogimg}
      />

<div>
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blogPost) => (
          <div key={blogPost.id}>
            <div> <img src={blogPost.image} alt="" />  </div>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.date}</p>
            <p>{blogPost.category.join(", ")}</p>
            <p>{blogPost.description}</p>
            <h2>category:
    <span>
          {blogPost.category.map((category, index) => (
            <button className='mx-2' key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </span>

      
      </h2>
          </div>
        ))
      ) : (
        <p>No blog posts available for this category.</p>
      )}
    </div>
      
      <>
      <BlogSideSection />

      </>
    </div>
  )
}

export default CategoryBlog