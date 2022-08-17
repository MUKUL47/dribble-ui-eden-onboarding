import { createContext, useState } from "react";
import Steps from "../steps";
import OnboardingForms from "./onboarding-forms";
export const OnboardingContext = createContext();
export default function OnboardingFinalForm() {
  const step = 4;
  const [completedStep, setCompletedStep] = useState(1);
  //initialize the data in useEffect if required
  const [onboardingData, setOnboardingData] = useState(Array(step).fill());
  /**

  [
    {name : 'John', surname : 'Doe'} //step 1
    { details : 'abc'} //step 2
  ]
   */
  function setCurrentOnboardingData(data, step) {
    const clone = [...onboardingData];
    clone[step] = { ...(clone[step] || {}), ...data };
    setOnboardingData(clone);
  }
  return (
    <>
      <Steps
        steps={step}
        completedCount={completedStep}
        onStepClick={(step) => {
          setCompletedStep(step);
        }}
      />
      <OnboardingContext.Provider
        value={{ setCurrentOnboardingData, data: onboardingData }}>
        <OnboardingForms
          step={completedStep}
          onPageSubmit={() => {
            console.log("Form Data,", onboardingData);
            if (completedStep < step) {
              setCompletedStep(completedStep + 1);
            }
          }}
        />
      </OnboardingContext.Provider>
    </>
  );
}
