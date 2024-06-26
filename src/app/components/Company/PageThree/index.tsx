import * as React from "react";
import { useState, useRef, useEffect, ChangeEventHandler } from "react";
import {
  Cover,
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
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  charCount: number;
  setCharCount: React.Dispatch<React.SetStateAction<number>>;
  onPrev: () => void;
  onClose: () => void;
  onComplete: () => void;
}

export const CompanyPageThree: React.FC<CompanyProps> = ({
  question,
  setQuestion,
  charCount,
  setCharCount,
  onPrev,
  onClose,
  onComplete,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocusedT, setIsFocusedT] = useState(false);
  const inputRefT = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (question) {
      setIsFocused(true);
    }
  }, [question]);

  useEffect(() => {
    if (charCount) {
      setIsFocusedT(true);
    }
  }, [charCount]);

  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const inputValue = event.target.value;
    setQuestion(inputValue);
    if (inputValue.length >= 100) {
      setQuestion((prevValue) => prevValue + "\n");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputRef.current && !inputRef.current.value.trim()) {
      setIsFocused(false);
    }
  };

  const handleFocusT = () => {
    setIsFocusedT(true);
  };

  const handleBlurT = () => {
    if (inputRefT.current && !inputRefT.current.value.trim()) {
      setIsFocusedT(false);
    }
  };

  const handleInputChangeT = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const valueAsNumber = parseInt(event.target.value, 10);
    setCharCount(valueAsNumber);
  };

  return (
    <Cover onClick={onClose}>
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
              value={question}
            />
          </InputWrapper>
          <TextWrapper isFocused={isFocusedT}>
            <InputText
              placeholder="글자수"
              ref={inputRefT}
              onFocus={handleFocusT}
              onBlur={handleBlurT}
              onChange={handleInputChangeT}
              style={{ lineHeight: 2.5, textAlign: "center" }}
              value={charCount}
            />
          </TextWrapper>
        </Wrapper>
        <BtnWrapper>
          <Prev onClick={onPrev}>이전</Prev>
          <Next
            onClick={onComplete}
            style={{
              backgroundColor:
                question && charCount
                  ? "var(--Light-Blue-80, #A1E1FF)"
                  : "var(--Neutral-95, #DCDCDC)",
              color:
                question && charCount
                  ? "var(--Common-0, var(--Common-0, #000))"
                  : "var(--Neutral-70, var(--Neutral-70, #9b9b9b))",
            }}
          >
            완료
          </Next>
        </BtnWrapper>
      </LayOut>
    </Cover>
  );
};
