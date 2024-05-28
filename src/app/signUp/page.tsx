"use client";

import * as React from "react";
import { useState } from "react";
import { AgreementPage } from "../components/SignUp/Agreement";
import { ProfileSetPage } from "../components/SignUp/ProfileSet";
import { WelcomePage } from "../components/SignUp/Welcome";

const SignUpPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [nickname, setNickname] = useState<string>("");

  const handleNext = (newNickname?: string) => {
    if (newNickname) {
      setNickname(newNickname);
    }
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      {step === 1 && <AgreementPage onNext={handleNext} />}
      {step === 2 && (
        <ProfileSetPage onNext={(nickname) => handleNext(nickname)} />
      )}
      {step === 3 && <WelcomePage nickname={nickname} />}
    </>
  );
};

export default SignUpPage;
