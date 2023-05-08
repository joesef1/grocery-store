import '../index.css';
import  MultiStepProgressBar  from "../components/multistep/MultiStepProgressBar";
import { useState } from "react";
import {MultiStepForm}  from "../components/multistep/MultiStepForm";
import  {questions}  from "../components/multistep/Questions";
import shop from '../assets/images/Grocery-1-1.jpg'
import Pagebanner from '../components/Pagebanner'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';



function CheckoutMultisteps() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index - 3) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  }

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({...pagesAnswers, [step]: answersObj});
  }

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  }
  const {cart} = useSelector(state => state.cart);


  const exploreShop = () => {
    console.log("asd");
    navigate('/Shop')
  }

  const navigate = useNavigate();

  return (
  <>
<Pagebanner imgname={shop} pagename='Checkout' />
  <div className='flex flex-col w-[90%] mx-auto mb-60'>
               
                      {cart.length !== 0 ?
                      <>
      <div className="w-[90%] mx-auto">
      <div className=" h-[50vh]">
        <div className="row m-5">
          <div className="col self-center">
            <MultiStepProgressBar
              step={index}
              className="bg-gray-300 h-2 rounded-full"
              activeClass="bg-blue-500"
              completedClass="bg-green-500"
              steps={[
                {
                  label: "Step 1",
                  description: "Step 1 description",
                },
                {
                  label: "Step 2",
                  description: "Step 2 description",
                },
                {
                  label: "Step 3",
                  description: "Step 3 description",
                },
              ]}
            />
          </div>
        </div>

        <div className="row">
          {submitted ? (
            <div className="card">
              <div className="card-body">
                <p>Your answers have been submitted!</p>
              </div>
              <div className="card-footer">
                <button className="btn" onClick={handleStart}>
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="">
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                />
              </div>
              <div className="card-footer flex justify-between">
                <button
                  className="bg-[#212121] text-white rounded-md px-3 py-1"
                  onClick={prevButton}
                  disabled={index === 1}
                >
                  Previous
                </button>
                <button className="bg-[#212121] text-white rounded-md px-3 py-1" onClick={nextButton}>
                  {index === totalPagesCount ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  </>
          :
                     
                        <>
                          <div className='w-[100%] mt-[10vh] m-auto flex justify-center flex-col items-center'>
                            <img src='https://cartsy.redq.io/wp-content/themes/cartsy/assets/images/not-found-alt.svg' alt='' />
                            <h1 className='text-black mt-7 font-bold text-xl'>No products in the cart.</h1>
                          </div>
                          <div className='flex justify-center  mb-32'>
                            {/* <p>Continue shopping</p> */}
                            <div onClick={()=> exploreShop()} className=' cursor-pointer hover:bg-[#353535] px-10 text-lg py-3 flex justify-center text-white items-center left-0 right-0  bg-[#212121] m-6 rounded-lg'>
                  <div className='flex justify-center ><p '> <p> Continue shoping</p></div>
                  </div>
                          </div>
                        </>
                      }
                 
                   
                    </div>
                 
                </>
  );
}

export default CheckoutMultisteps;

