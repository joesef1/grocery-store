import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../firebase-config';
// import '../firebase-config';


//firestore
import { commentsdb, auth, storage } from "../firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';


const Comment = ({blog}) => {

  //.............................firestore
  const current = new Date();
const time = current.toISOString().slice(0, 10); // "yyyy-mm-dd"
  const [newcommentName, setNewcommentName] = useState("");
  const [newcommenttext, setNewcommenttext] = useState("");
  const [newcommenttime, setIsNewcommenttime] = useState(time);










  const [commentList, setCommentList] = useState([]);

  const commentsCollectionRef = collection(commentsdb, "blogcomments");

  const getMovieList = async () => {
    try {
      const data = await getDocs(commentsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCommentList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  //submit
  const onSubmitComment = async () => {
    try {
      await addDoc(commentsCollectionRef, {
        name: newcommentName,
        commenttext: newcommenttext,
        time: newcommenttime,
        blogname: blog.id,
        // userId: auth?.currentUser?.uid,
        
        //

      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
    notify()
  };
  //.............................firestore

  
  const notify = () =>  toast.success('your comment successfully added', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // theme: "dark",
    });
    
  const filterdcommentsblog = commentList.filter((comment) => comment.blogname === blog.id)

  const [existcomment, setExistcomment] = useState(filterdcommentsblog);
  return (
    <>
  
<section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
  <div class="max-w-2xl mx-auto px-4">
      
  
{/*    */}
    {/*  */}

    {/* {existcomment ? <p>there is no comments yes</p> : " "} */}

{filterdcommentsblog ? (<>
  {  filterdcommentsblog.map((comment) => (
      <>
      <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/>{comment.name}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime={time} title={time}>
                    commented in: {time}
                </time>
                </p>
            </div>
            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                </svg>
                <span class="sr-only">Comment settings</span>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownComment1"
                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{comment.commenttext}</p>
        <div class="flex items-center mt-4 space-x-4">
            <button type="button"
                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Reply
            </button>
        </div>
    </article>
    
      </>
    ))}
</>) : <p>there is no comments yes</p> }
  
    



  



    <div class="flex justify-between items-center mb-0">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Leave a comment</h2>
    </div>

    <form className='mt-16'>
      <div className="mb-6">
          
          <input 
            onChange={(e) => setNewcommentName(e.target.value)}
              className=" border  w-full py-2 px-3 leading-tight focus:outline-none "
              id="name" type="text" placeholder="Name"/>
                
      </div>
      <div className="mb-4">
      
          <textarea rows="4"
             onChange={(e) => setNewcommenttext(e.target.value)}

              className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="comment" placeholder="comment"></textarea>
      </div>
      <div className="flex   justify-center w-full">
          <button
          // onClick={notify}
          onClick={onSubmitComment}
              className="bg-[#212121] w-full hover:bg-[#363636] del text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button">Leave a comment</button>
      </div>
  </form>
  </div>
</section>

    </>
  )
}

export default Comment
