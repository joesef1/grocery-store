import { ref } from "firebase/storage";
import React, { useState, useRef } from "react";
import StarRatingComponent from "react-star-rating-component";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewForm = ({
  onSubmitComment,
  stars,
  setNewreviewName,
  setNewcommenttext,
  setStars,
}) => {
  const onStarClick = (nextValue, prevValue, name) => {
    setStars(nextValue);
  };

  const notify = () =>
    toast.warn("this feature still under development", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const inputElement = useRef();
  const textareaElement = useRef();

  const [starstating, setStarstating] = useState(null);

  const onSubmitComments = () => {
    onSubmitComment(
      inputElement.current.value,
      textareaElement.current.value,
      stars
    );
    inputElement.current.value = "";
    textareaElement.current.value = "";
    setStarstating(0);
    setTimeout(() => {
      setStarstating(null);
    }, 1000);
  };

  return (
    <div className="lg:w-[350px]">
      <h2 className="text-lg font-medium mb-2 md:mt-9 mt-16">Write a review</h2>
      <div className="max-w-xl ">
        <form>
          <div className="flex justify-between items-center my-7">
            <div>
              <h2 className="text-[#212121] font-bold text-2xl">
                Rate product
              </h2>
            </div>

            <div className=" text-2xl text-[#c4c4c4]">
              <StarRatingComponent
                value={starstating}
                name="rate1"
                starCount={5}
                onStarClick={onStarClick}
                emptyStarColor={`#c4c4c4`}
                starColor={`#212121`}
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              ref={inputElement}
              onChange={(e) => setNewreviewName(e.target.value)}
              className=" border  w-full py-2 px-3 leading-tight focus:outline-none "
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="4"
              ref={textareaElement}
              onChange={(e) => setNewcommenttext(e.target.value)}
              className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="comment"
              placeholder="Your review"
            ></textarea>
          </div>
          <div className="flex   justify-center w-full">
            <button
              // onClick={notify}
              onClick={() => onSubmitComments()}
              className="bg-[#212121] w-full hover:bg-[#363636] del text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Post Review{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
