import * as React from "react";
import { useState, ChangeEvent } from "react";
import {
  Contents,
  Company,
  Questions,
  Divider,
  InputAnswer,
  CountWords,
  CompanyLogo,
  CompanyName,
} from "./style";

export const ContentsPage: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Contents>
        <Company>
          <CompanyLogo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <circle cx="13" cy="12" r="12" fill="#1428A0" />
              <path
                d="M5.29645 12.7376C5.31274 12.7982 5.31274 12.8621 5.29645 12.9227C5.27649 12.9802 5.23776 13.0293 5.18661 13.0617C5.13546 13.0941 5.07493 13.1081 5.01491 13.1012C4.9549 13.0944 4.89896 13.0672 4.85626 13.024C4.81356 12.9809 4.78663 12.9244 4.77988 12.8638V12.6113H4.09666V12.8133C4.09666 13.3939 4.54658 13.5706 5.03816 13.5706C5.52975 13.5706 5.87135 13.4107 5.94634 12.9732C5.96906 12.831 5.96906 12.6862 5.94634 12.544C5.83802 12.0055 4.85486 11.8372 4.77988 11.5343C4.77154 11.4898 4.77154 11.4441 4.77988 11.3996C4.78813 11.3452 4.81718 11.2962 4.8608 11.2632C4.90441 11.2301 4.95912 11.2157 5.01317 11.2229C5.0451 11.2191 5.07748 11.2224 5.10796 11.2328C5.13845 11.2431 5.16626 11.2602 5.1894 11.2828C5.21254 11.3053 5.23041 11.3328 5.24172 11.3632C5.25303 11.3936 5.2575 11.4262 5.25479 11.4585V11.6184H5.89635V11.408C5.89635 10.8443 5.39644 10.7517 5.06316 10.7517C4.72989 10.7517 4.22997 10.9032 4.16332 11.3323C4.13855 11.4488 4.13855 11.5693 4.16332 11.6857C4.27996 12.2159 5.19647 12.3673 5.32978 12.7123"
                fill="white"
              />
              <path
                d="M6.86285 10.8611L6.3796 13.4696H7.07948L7.42941 11.1051L7.77102 13.4696H8.4709L8.00431 10.8611H6.86285ZM10.7622 10.8611L10.4456 12.8554L10.1289 10.8611H9.05413L9.00414 13.4696H9.67069V11.122L10.1039 13.4696H10.7538L11.1871 11.122V13.4696H11.8286L11.7703 10.8611H10.7622Z"
                fill="white"
              />
              <path
                d="M13.6867 12.7291C13.7033 12.7926 13.7033 12.8593 13.6867 12.9227C13.6729 12.9775 13.6401 13.0256 13.5942 13.058C13.5484 13.0905 13.4924 13.1051 13.4367 13.0994C13.4038 13.1044 13.3702 13.102 13.3383 13.0923C13.3064 13.0826 13.277 13.0659 13.2523 13.0433C13.2276 13.0208 13.2082 12.993 13.1954 12.9619C13.1826 12.9309 13.1768 12.8974 13.1784 12.8638V12.6113H12.4785V12.8049C12.4785 13.3939 12.9368 13.5622 13.42 13.5622C13.9033 13.5622 14.2532 13.4023 14.3365 12.9732C14.3615 12.8312 14.3615 12.686 14.3365 12.544C14.2282 11.9971 13.2534 11.8372 13.1784 11.5259C13.1701 11.4814 13.1701 11.4357 13.1784 11.3912C13.1867 11.3368 13.2157 11.2878 13.2593 11.2548C13.3029 11.2217 13.3577 11.2073 13.4117 11.2145C13.4433 11.2121 13.4751 11.2165 13.5049 11.2274C13.5348 11.2383 13.562 11.2554 13.5848 11.2776C13.6076 11.2999 13.6255 11.3267 13.6373 11.3565C13.6491 11.3862 13.6546 11.4181 13.6533 11.4501V11.6184H14.2949V11.408C14.2949 10.8359 13.7866 10.7517 13.4617 10.7517C13.1368 10.7517 12.6285 10.9032 12.5535 11.3239C12.5328 11.4408 12.5328 11.5604 12.5535 11.6773C12.6618 12.2159 13.5783 12.3673 13.7117 12.7039"
                fill="white"
              />
              <path
                d="M15.8529 13.091C15.9114 13.0982 15.9703 13.0819 16.0171 13.0458C16.0638 13.0096 16.0946 12.9563 16.1029 12.8974C16.1074 12.8639 16.1074 12.83 16.1029 12.7965V10.8611H16.7528V12.9059C16.7028 13.3855 16.3195 13.5454 15.8446 13.5454C15.3697 13.5454 15.0114 13.3855 14.9448 12.9059V10.8611H15.5947V12.788C15.5902 12.8216 15.5902 12.8555 15.5947 12.889C15.6029 12.9463 15.6326 12.9982 15.6775 13.0342C15.7224 13.0702 15.7792 13.0875 15.8363 13.0826M18.9941 10.8611L19.0357 12.9059L18.4442 10.8611H17.486V13.4444H18.1192V11.3239L18.7608 13.4444H19.6689V10.8611H18.9941ZM21.2437 13.091C21.3019 13.0986 21.3608 13.0838 21.4087 13.0495C21.4566 13.0151 21.4899 12.9639 21.502 12.9059C21.5061 12.8723 21.5061 12.8384 21.502 12.8049V12.4262H21.2353V12.0476H22.1685V12.746C22.1719 12.802 22.1719 12.8582 22.1685 12.9143C22.1269 13.3939 21.7186 13.5622 21.2603 13.5622C20.8021 13.5622 20.4271 13.3939 20.3522 12.9143C20.3488 12.8582 20.3488 12.802 20.3522 12.746V11.6521C20.3522 11.6016 20.3522 11.5174 20.3522 11.4754C20.4105 10.9873 20.8021 10.8359 21.2603 10.8359C21.7186 10.8359 22.0935 10.9873 22.1685 11.4754C22.1685 11.5595 22.1685 11.6521 22.1685 11.6521V11.7362H21.502V11.5932C21.5049 11.5596 21.5049 11.5258 21.502 11.4922C21.4917 11.4326 21.4592 11.3793 21.4111 11.3433C21.363 11.3073 21.3031 11.2913 21.2437 11.2987C21.1852 11.2915 21.1263 11.3077 21.0796 11.3439C21.0328 11.3801 21.002 11.4333 20.9937 11.4922C20.9891 11.5313 20.9891 11.5709 20.9937 11.61V12.8049C20.9896 12.8384 20.9896 12.8723 20.9937 12.9059C21.0076 12.9645 21.0426 13.0159 21.0918 13.0501C21.1411 13.0843 21.2011 13.0989 21.2603 13.091"
                fill="white"
              />
            </svg>
          </CompanyLogo>
          <CompanyName>삼성전자</CompanyName>
        </Company>
        <Questions>
          삼성전자에 지원한 동기와 입사 이후 꿈꾸는 것은 무엇인가요?
        </Questions>
        <Divider />
        <InputAnswer
          spellCheck="false"
          placeholder="내용은 이곳에 작성해주세요."
          onChange={handleChange}
        ></InputAnswer>
        <CountWords>
          <span className="currentWords">{text.length}</span> / 700
        </CountWords>
      </Contents>
    </>
  );
};