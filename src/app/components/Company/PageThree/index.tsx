import * as React from "react";
import { useState, useRef } from "react";
import {
  BigCircle,
  LayOut,
  PageIndex,
  SmallCircle,
  Header,
  Wrapper,
  InputWrapper,
  InputText,
  Prev,
  Next,
  BtnWrapper,
  TextWrapper,
} from "./style";

interface CompanyProps {
  onClose: () => void;
}

export const CompanyPageThree: React.FC<CompanyProps> = ({ onClose }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocusedT, setIsFocusedT] = useState(false);
  const [inputValueT, setInputValueT] = useState("");
  const inputRefT = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputRef.current && !inputRef.current.value.trim()) {
      setIsFocused(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocusT = () => {
    setIsFocusedT(true);
  };

  const handleBlurT = () => {
    if (inputRefT.current && !inputRefT.current.value.trim()) {
      setIsFocusedT(false);
    }
  };

  const handleInputChangeT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueT(event.target.value);
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
        </PageIndex>
        <Header>자기소개서 문항을 입력해주세요.</Header>
        <Wrapper>
          <InputWrapper isFocused={isFocused}>
            <InputText
              placeholder="문항을 입력해주세요"
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <TextWrapper isFocused={isFocusedT}>
            <InputText
              placeholder="글자수"
              ref={inputRefT}
              onFocus={handleFocusT}
              onBlur={handleBlurT}
              onChange={handleInputChangeT}
            />
          </TextWrapper>
        </Wrapper>
        <BtnWrapper>
          <Prev>이전</Prev>
          <Next
            style={{
              backgroundColor:
                inputValue && inputValueT
                  ? "var(--Light-Blue-80, #A1E1FF)"
                  : "var(--Neutral-95, #DCDCDC)",
              color:
                inputValue && inputValueT
                  ? "var(--Common-0, var(--Common-0, #000))"
                  : "var(--Neutral-70, var(--Neutral-70, #9b9b9b))",
            }}
          >
            다음
          </Next>
        </BtnWrapper>
      </LayOut>
    </>
  );
};
