import React,{useState,useEffect,useRef} from 'react'
import user from "../assets/images/profile-user.png";
import ReviewForm from "../components/ReviewForm";
import { ToastContainer, toast } from 'react-toastify';
//firestore
import { productsdb, auth, storage } from "../firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import StarRatingComponent from 'react-star-rating-component';


const Itemreviews = ({product}) => {
    //.............................firestore
    const current = new Date();
    const time = current.toISOString().slice(0, 10); // "yyyy-mm-dd"
    const [loading, setLoading] = useState(true);
      const [newreviewName, setNewreviewName] = useState("");
      const [newcommenttext, setNewcommenttext] = useState("");
      const [stars, setStars] = useState(0);
      const [reviewList, setReviewsList] = useState([]);
      const reviewsCollectionRef = collection(productsdb, "productcomments");
      const getreviewsList = async () => {
        setLoading(true);

        try {
          const data = await getDocs(reviewsCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setReviewsList(filteredData);
          setLoading(false);
          
        } catch (err) {
          console.error(err);
          setLoading(false);

        }
      };
    
      useEffect(() => {
        getreviewsList();
      console.log(filterproductreviews);

      }, []);
    
      //submit
      const onSubmitComment = async () => {
        try {
          await addDoc(reviewsCollectionRef, {
            name: newreviewName,
            commenttext: newcommenttext,
            stars: stars,
            reviewid: product.id,
    
          });
          getreviewsList();
        
        } catch (err) {
          console.error(err);
        }
        notify()
        console.log(stars);

      



      };
    

      const notify = () =>  toast.success('your review successfully added', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "dark",
        });
        


  const filterproductreviews = reviewList.filter((review) => review.reviewid === product.id)


      //.............................firestore
  return (
    <div className='flex lg:flex-row-reverse flex-col-reverse justify-between w-full'>

      <div className=' md:mt-0 mt-9 w-[90%] md:w-[50%] md:flex md:justify-end mx-auto'> 
        <ReviewForm
          onSubmitComment={onSubmitComment}
          setStars={setStars}
          setNewcommenttext={setNewcommenttext}
          setNewreviewName={setNewreviewName}
        
        />
      </div>



<div className=' md:w-[50%] w-[90%]'>
  {/*hnjohniolhn*/}
  {loading ? (
          <p>Loading reviews...</p>
        ) : (
          
<div  className='my-9'>
    
  <div class="flex items-center mb-3">
      <svg aria-hidden="true" class="w-5 h-5 text-[#212121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-[#212121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-[#212121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-[#212121]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
  </div>
  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
  <div class="flex items-center mt-4">
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">5 star</span>
      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-2 bg-[#212121] rounded w-[70%]" ></div>
      </div>
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">70%</span>
  </div>
  <div class="flex items-center mt-4">
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">4 star</span>
      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-2 bg-[#212121] rounded  w-[17%]"></div>
      </div>
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">17%</span>
  </div>
  <div class="flex items-center mt-4">
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">3 star</span>
      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-2 bg-[#212121] rounded w-[8%]"></div>
      </div>
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">8%</span>
  </div>
  <div class="flex items-center mt-4">
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">2 star</span>
      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-2 bg-[#212121] rounded w-[4%]"></div>
      </div>
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">4%</span>
  </div>
  <div class="flex items-center mt-4">
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">1 star</span>
      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-2 bg-[#212121] rounded w-[1%]"></div>
      </div>
      <span class="text-sm font-medium text-[#212121] dark:text-[#212121]">1%</span>
  </div>   
  
</div>
        )}



  {/* added review */}
    

  {  filterproductreviews.map((review,index) => (
    <>
    
<article key={index} className='md:w-[70%] '>
  <div>
      <hr className='my-7'/>
        <div class="flex mb-4 space-x-4">
            <img class="w-12 h-12 rounded-full" src={user} alt=""/>
            <div class="space-y-1 font-medium dark:text-white  translate-y-[-3px]">
                <p className='mb-4'>{review.name} </p>
                
<span className=''>
    <StarRatingComponent
        name="rate1"
        starCount={5}
        value={review.stars}
        emptyStarColor={`#c4c4c4`}
        starColor={`#212121`}
      />
      
      <time className=' translate-x-2 translate-y-[-19px] inline-block text-sm text-gray-400 dark:text-gray-400' pubdate datetime={time} title={time}>
                  |  commented in : {time}
                </time>
</span>



            </div>
            
        </div>



      



        {/*  */}


        {/* <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer> */}
        <p class="mb-3 text-gray-500 dark:text-gray-400 ">{review.commenttext}</p>
        {/* <a href="#" class="block mb-5 text-sm font-medium text-[#212121] hover:underline dark:text-[#212121]">Read more</a>
        <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                <a href="#" class="pl-4 text-sm font-medium text-[#212121] hover:underline dark:text-[#212121]">Report abuse</a>
            </div>
        </aside> */}
  </div>
  </article>
    </>
  ))}
  
</div>
    </div>
  )
}
export default Itemreviews
