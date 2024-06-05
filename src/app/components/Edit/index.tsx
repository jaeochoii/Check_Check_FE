import * as React from "react";
import { useState, useRef } from "react";
import {
  Cover,
  Header,
  ResultWrapper,
  EachResult,
  LineWrapper,
  BtnWrapper,
  EachHeader,
} from "./style";

export const Edit: React.FC = () => {
  return (
    <>
      <Cover>
        <Header>님의 HYUNDAI SW개발 직무 자기소개서 AI 첨삭 결과</Header>
        <ResultWrapper>
          <LineWrapper>
            <EachResult>
              <EachHeader>장점</EachHeader>
            </EachResult>
            <EachResult>
              <EachHeader>개선점</EachHeader>
            </EachResult>
          </LineWrapper>
          <LineWrapper>
            <EachResult>
              <EachHeader>예상 질문</EachHeader>
            </EachResult>
            <EachResult>
              <EachHeader>질문이 비슷한 기업</EachHeader>
            </EachResult>
          </LineWrapper>
          <BtnWrapper>
            메인 페이지로 이동
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
            >
              <mask
                id="mask0_2960_241"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="49"
                height="48"
              >
                <rect x="0.5" width="48" height="48" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2960_241)">
                <path
                  d="M32.85 26H10.5C9.93333 26 9.45833 25.8083 9.075 25.425C8.69167 25.0417 8.5 24.5667 8.5 24C8.5 23.4333 8.69167 22.9583 9.075 22.575C9.45833 22.1917 9.93333 22 10.5 22H32.85L23.05 12.2C22.65 11.8 22.4583 11.3333 22.475 10.8C22.4917 10.2667 22.7 9.80001 23.1 9.40001C23.5 9.03334 23.9667 8.84167 24.5 8.82501C25.0333 8.80834 25.5 9.00001 25.9 9.40001L39.1 22.6C39.3 22.8 39.4417 23.0167 39.525 23.25C39.6083 23.4833 39.65 23.7333 39.65 24C39.65 24.2667 39.6083 24.5167 39.525 24.75C39.4417 24.9833 39.3 25.2 39.1 25.4L25.9 38.6C25.5333 38.9667 25.075 39.15 24.525 39.15C23.975 39.15 23.5 38.9667 23.1 38.6C22.7 38.2 22.5 37.725 22.5 37.175C22.5 36.625 22.7 36.15 23.1 35.75L32.85 26Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </BtnWrapper>
        </ResultWrapper>
      </Cover>
    </>
  );
};
