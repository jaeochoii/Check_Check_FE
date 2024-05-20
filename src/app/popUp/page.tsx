"use client";

import * as React from "react";
import { useState } from "react";
import { CompanyPageOne } from "../components/Company/PageOne";
import { CompanyPageTwo } from "../components/Company/PageTwo";
import { CompanyPageThree } from "../components/Company/PageThree";

interface PopProps {
  onClose: () => void;
}

const PopUpPage: React.FC<PopProps> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [companyName, setCompanyName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [charCount, setCharCount] = useState<string>("");

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleComplete = () => {
    onClose();
  };

  return (
    <>
      {step === 1 && (
        <CompanyPageOne
          companyName={companyName}
          setCompanyName={setCompanyName}
          onNext={handleNext}
          onClose={onClose}
        />
      )}
      {step === 2 && (
        <CompanyPageTwo
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={onClose}
        />
      )}
      {step === 3 && (
        <CompanyPageThree
          question={question}
          setQuestion={setQuestion}
          charCount={charCount}
          setCharCount={setCharCount}
          onPrev={handlePrev}
          onClose={onClose}
          onComplete={handleComplete}
        />
      )}
    </>
  );
};

export default PopUpPage;
