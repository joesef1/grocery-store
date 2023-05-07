import '../index.css';
import  MultiStepProgressBar  from "../components/multistep/MultiStepProgressBar";
import { useState } from "react";
import {MultiStepForm}  from "../components/multistep/MultiStepForm";
import  {questions}  from "../components/multistep/Questions";

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

  return (
    <div class="App">
  <div class="container h-100">
    <div class="row m-5">
      <div class="col self-center">
        <MultiStepProgressBar
          step={index}
          class="bg-gray-300 h-2 rounded-full"
          activeClass="bg-blue-500"
          completedClass="bg-green-500"
          steps={[
            {
              label: "Step 1",
              description: "Step 1 description"
            },
            {
              label: "Step 2",
              description: "Step 2 description"
            },
            {
              label: "Step 3",
              description: "Step 3 description"
            }
          ]}
        />
      </div>
    </div>
    <div class="row">
      {submitted ? (
        <div class="card">
          <div class="card-body">
            <p>Your answers have been submitted!</p>
          </div>
          <div class="card-footer">
            <button class="btn" onClick={handleStart}>
              Start Over
            </button>
          </div>
        </div>
      ) : (
        <div class="card">
          <div class="card-body">
            <MultiStepForm
              list={questions}
              step={index}
              onPageUpdate={onPageAnswerUpdate}
              pagesAnswers={pagesAnswers}
            />
          </div>
          <div class="card-footer flex justify-between">
            <button
              class="btn"
              onClick={prevButton}
              disabled={index === 1}
            >
              Previous
            </button>
            <button class="btn" onClick={nextButton}>
              {index === totalPagesCount ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
  );
}

export default CheckoutMultisteps;