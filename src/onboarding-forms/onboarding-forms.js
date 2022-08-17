import React, { useContext } from "react";
import { OnboardingContext } from ".";
import completed from "../assets/completed.png";
import people from "../assets/people.png";
import person from "../assets/person.png";
import {
  Card,
  FormWrapper,
  LabelInput,
  Submit,
  WelcomeInfo,
} from "./onboarding-components";
import formInfo from "./onboarding-data";
import "./onboarding.css";
export default function OnboardingForms({ onPageSubmit, step }) {
  const getForm = (step) => {
    switch (step) {
      case 1:
        return <Form1 onSubmit={onPageSubmit} step={step - 1} />;
      case 2:
        return <Form2 onSubmit={onPageSubmit} step={step - 1} />;
      case 3:
        return <Form3 onSubmit={onPageSubmit} step={step - 1} />;
      default:
        return <Form4 onSubmit={onPageSubmit} step={step - 1} />;
    }
  };
  return getForm(step);
}

function Form4({ onSubmit, step }) {
  return (
    <FormWrapper>
      <img src={completed} width="100px" alt="Completed" />
      <WelcomeInfo
        header={formInfo.en[4].header}
        description={formInfo.en[4].description}
      />
      <div className="flex flex-col form-details">
        <Submit name={"Create Workspace"} click={onSubmit} />
      </div>
    </FormWrapper>
  );
}
function Form3({ onSubmit, step }) {
  const onboardingContext = useContext(OnboardingContext);
  return (
    <FormWrapper>
      <WelcomeInfo
        header={formInfo.en[3].header}
        description={formInfo.en[3].description}
      />
      <div className="flex flex-col form-details">
        <div className="flex gap-15">
          <Card
            logo={person}
            header={formInfo.en[3].option1.header}
            description={formInfo.en[3].option1.description}
            onClick={() => {
              onboardingContext.setCurrentOnboardingData(
                { 1: true, 2: false },
                step
              );
            }}
            selected={onboardingContext.data[step]?.[1]}
          />
          <Card
            logo={people}
            header={formInfo.en[3].option2.header}
            description={formInfo.en[3].option2.description}
            onClick={() => {
              onboardingContext.setCurrentOnboardingData(
                { 1: false, 2: true },
                step
              );
            }}
            selected={onboardingContext.data[step]?.[2]}
          />
        </div>
        <Submit name={"Create Workspace"} click={onSubmit} />
      </div>
    </FormWrapper>
  );
}
function Form1({ onSubmit, step }) {
  const onboardingContext = useContext(OnboardingContext);
  return (
    <FormWrapper>
      <WelcomeInfo
        header={formInfo.en[1].header}
        description={formInfo.en[1].description}
      />
      <div className="flex flex-col form-details">
        <LabelInput
          label={"Full Name"}
          placeholder={"Steve Jobs"}
          value={onboardingContext.data[step]?.["fullName"]}
          onChange={(e) => {
            onboardingContext.setCurrentOnboardingData(
              {
                fullName: e.target.value,
              },
              step
            );
          }}
        />
        <LabelInput
          label={"Display Name"}
          placeholder={"Steve"}
          value={onboardingContext.data[step]?.["displayName"]}
          onChange={(e) => {
            onboardingContext.setCurrentOnboardingData(
              {
                displayName: e.target.value,
              },
              step
            );
          }}
        />
        <Submit name={"Create Workspace"} click={onSubmit} />
      </div>
    </FormWrapper>
  );
}

function Form2({ onSubmit, step }) {
  const onboardingContext = useContext(OnboardingContext);
  return (
    <FormWrapper>
      <WelcomeInfo
        header={formInfo.en[2].header}
        description={formInfo.en[2].description}
      />
      <div className="flex flex-col form-details align-center">
        <LabelInput
          label={"workspace Name"}
          placeholder={"Eden"}
          value={onboardingContext.data[step]?.["name"]}
          onChange={(e) => {
            onboardingContext.setCurrentOnboardingData(
              {
                name: e.target.value,
              },
              step
            );
          }}
        />
        <LabelInput
          label={"Workspace URL"}
          placeholder={"Example"}
          optionalLabel={true}
          prefix="www.eden.com/"
          value={onboardingContext.data[step]?.["url"]}
          onChange={(e) => {
            onboardingContext.setCurrentOnboardingData(
              { url: e.target.value },
              step
            );
          }}
        />
        <Submit name={"Create Workspace"} click={onSubmit} />
      </div>
    </FormWrapper>
  );
}
