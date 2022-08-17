import React, { useMemo } from "react";
import "./step.css";
//dynamic step generation
export default function Steps({ steps, completedCount, onStepClick }) {
  const totalSteps = useMemo(() => {
    return Array(steps)
      .fill(true)
      .map((_, i) => i);
  }, [steps, completedCount]);
  const isCompleted = (v) => completedCount > v;
  const getDivider = (v) => {
    return (
      <div
        key={Math.random()}
        className={`step-divider ${
          (isCompleted(v) && "step-div-completed") || ""
        }`}></div>
    );
  };
  const getStep = (v) => {
    return (
      <div
        key={Math.random()}
        className={`
    step-count justify-content-center cursor-pointer align-center flex ${
      (isCompleted(v) && " step-completed") || ""
    }`}
        onClick={() => onStepClick(v + 1)}>
        {v + 1}
      </div>
    );
  };
  return (
    <div className="steps flex justify-content-center">
      {totalSteps.map((v) => {
        if (v === 0) {
          return (
            <>
              {getStep(v)}
              {v === 0 && totalSteps.length > 0 && getDivider(v)}
            </>
          );
        }
        if (v === totalSteps.length - 1) {
          return (
            <>
              {getDivider(v)}
              {getStep(v)}
            </>
          );
        }
        return (
          <>
            {getDivider(v)}
            {getStep(v)}
            {getDivider(v)}
          </>
        );
      })}
    </div>
  );
}
