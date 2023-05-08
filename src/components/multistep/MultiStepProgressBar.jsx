import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "../../index.css";

const MultiStepProgressBar = (props) => {
  return (
    <div className="w-[80%] mx-auto">
      <ProgressBar
          percent={((props.step - 1) * 100) / 2}
          filledBackground="#212121"
        >
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`step ${accomplished ? "completed" : null}`}
              >
                1
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`step ${accomplished ? "completed" : null}`}
              >
                2
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`step ${accomplished ? "completed" : null}`}
              >
                3
              </div>
            )}
          </Step>
        </ProgressBar>
    </div>
  )
};

export default MultiStepProgressBar;
