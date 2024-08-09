import { useEffect, useState } from "react";
import "./style.css";

const ProgresBar = () => {
  const [activestep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(Array(8).fill(""));

  const handlePrevs = () => {
    setActiveStep(activestep === 0 ? 0 : activestep - 1);
  };

  const handleNext = () => {
    if (steps.length - 1 !== activestep) {
      setActiveStep(activestep + 1);
    }
  };

  //activestep === steps.length - 1 ? null :
  console.log(activestep, "active");

  useEffect(() => {
    let copySteps = [...steps];

    for (let i = 0; i < steps.length; i++) {
      copySteps[i] = i + 1;
      setSteps(copySteps);
    }
  }, []);

  console.log(steps, "steps");
  return (
    <div className="step-progress-container">
      <div className="steps">
        {steps && steps.every((items) => items !== "")
          ? steps.map((step, index) => {
              return (
                <div
                  className={`step ${index <= activestep ? "active" : ""}`}
                  key={index}
                >
                  step {step}
                </div>
              );
            })
          : null}

        <div className=""></div>
      </div>

      <div className="step-btn-container">
        <button
          disabled={activestep === 0}
          onClick={handlePrevs}
          className="steps-button"
        >
          prevs steps
        </button>
        <button
          disabled={activestep === steps.length - 1}
          onClick={handleNext}
          className="steps-button"
        >
          next step
        </button>
      </div>
    </div>
  );
};

export default ProgresBar;
