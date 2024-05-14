import * as React from "react";
import { Exit, PopDiv, PopText } from "./style";

export const PopLayout: React.FC = () => {
  return (
    <>
      <PopDiv>
        <PopText>로그인 후 사용할 수 있어요.</PopText>
        <Exit>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#322F35"
            />
          </svg>
        </Exit>
      </PopDiv>
    </>
  );
};
