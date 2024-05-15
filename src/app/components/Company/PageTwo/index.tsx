import * as React from "react";
import { useState, useRef } from "react";
import {
  BigCircle,
  LayOut,
  PageIndex,
  SmallCircle,
  Header,
  InputWrapper,
  InputText,
  Prev,
  Next,
  BtnWrapper,
} from "./style";
import { CompanyPageThree } from "../PageThree";

interface CompanyProps {
  onClose: () => void;
}

export const CompanyPageTwo: React.FC<CompanyProps> = ({ onClose }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputRef.current && !inputRef.current.value.trim()) {
      setIsFocused(false);
    }
  };

  const handleQuestionClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <LayOut onClick={(e) => e.stopPropagation()}>
        <PageIndex>
          <SmallCircle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#006796" />
            </svg>
          </SmallCircle>
          <BigCircle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="9" cy="9" r="9" fill="#00AEFF" />
            </svg>
          </BigCircle>
          <SmallCircle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#006796" />
            </svg>
          </SmallCircle>
        </PageIndex>
        <Header>직무를 입력해주세요.</Header>
        <InputWrapper isFocused={isFocused}>
          <InputText
            placeholder="직무명"
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <BtnWrapper>
          <Prev>이전</Prev>
          <Next
            onClick={handleQuestionClick}
            style={{
              backgroundColor: inputValue
                ? "var(--Light-Blue-80, #A1E1FF)"
                : "var(--Neutral-95, #DCDCDC)",
              color: inputValue
                ? "var(--Common-0, var(--Common-0, #000))"
                : "var(--Neutral-70, var(--Neutral-70, #9b9b9b))",
            }}
          >
            다음
          </Next>
          {isModalOpen && (
            <CompanyPageThree onClose={() => setIsModalOpen(false)} />
          )}
        </BtnWrapper>
      </LayOut>
    </>
  );
};
