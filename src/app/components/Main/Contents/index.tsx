import * as React from "react";
import { useState, ChangeEvent } from "react";
import {
  Contents,
  Companies,
  Questions,
  Divider,
  InputAnswer,
  CountWords,
  CompanyLogo,
  CompanyName,
  Logo,
  EmptyText,
} from "./style";
import { Question, Company } from "../type";

interface ContentsPageProps {
  selectedCompany: Company | null;
  selectedQuestion: Question | null;
}

export const ContentsPage: React.FC<ContentsPageProps> = ({
  selectedCompany,
  selectedQuestion,
}) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questionText = selectedQuestion ? selectedQuestion.text : "";

  const questionId = selectedQuestion ? selectedQuestion.index : "";

  const text = questionId ? answers[questionId] || "" : "";

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswers({
      ...answers,
      [questionId]: event.target.value,
    });
  };
  return (
    <>
      <Contents>
        {selectedCompany ? (
          <>
            <Companies>
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
              <CompanyName>{selectedCompany.name}</CompanyName>
            </Companies>
            <Questions>{questionText}</Questions>
            <Divider />
            <InputAnswer
              spellCheck="false"
              placeholder="내용은 이곳에 작성해주세요."
              value={text}
              onChange={handleChange}
            ></InputAnswer>
            <CountWords>
              <span
                className={
                  text.length > (selectedQuestion?.charCount ?? 0)
                    ? "overCurrentWords"
                    : "currentWords"
                }
              >
                {text.length}
              </span>
              / {selectedQuestion?.charCount ?? 0}
            </CountWords>
          </>
        ) : (
          <>
            <Logo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="158"
                height="108"
                viewBox="0 0 158 108"
                fill="none"
              >
                <path
                  d="M17.9404 70.1849C17.9404 70.603 18.0233 71.0169 18.1843 71.4033C18.3449 71.7897 18.5808 72.1408 18.878 72.4364C19.1753 72.7321 19.5282 72.9667 19.9168 73.1269C20.3053 73.287 20.7219 73.369 21.1423 73.369C21.5627 73.369 21.9793 73.287 22.3674 73.1269C22.7559 72.9667 23.1088 72.7321 23.4061 72.4364C23.7038 72.1408 23.9393 71.7897 24.1003 71.4033C24.2613 71.0169 24.3442 70.603 24.3442 70.1849C24.3442 69.7664 24.2613 69.3525 24.1003 68.966C23.9393 68.5796 23.7038 68.2286 23.4061 67.9329C23.1088 67.6373 22.7559 67.4027 22.3674 67.2425C21.9793 67.0828 21.5627 67.0004 21.1423 67.0004C20.7219 67.0004 20.3053 67.0828 19.9168 67.2425C19.5282 67.4027 19.1753 67.6373 18.878 67.9329C18.5808 68.2286 18.3449 68.5796 18.1843 68.966C18.0233 69.3525 17.9404 69.7664 17.9404 70.1849Z"
                  fill="#004261"
                />
                <path
                  d="M155.867 76.7932C137.258 69.4027 119.288 78.5196 100.258 88.1709C90.7429 92.9979 80.8994 97.9874 70.7184 100.975C42.2659 109.33 19.5708 86.1782 19.2394 85.8346C18.2536 84.8034 16.6114 84.7624 15.5732 85.7382C14.5349 86.7206 14.4904 88.3552 15.4781 89.3865C16.3292 90.2771 33.5735 108 57.8916 108C62.43 108 67.2155 107.382 72.1878 105.924C82.8285 102.799 92.8906 97.6992 102.618 92.7646C120.571 83.6637 137.528 75.0641 153.945 81.5844C155.275 82.1124 156.784 81.4694 157.315 80.1435C157.846 78.8208 157.197 77.3216 155.867 76.7932Z"
                  fill="url(#paint0_linear_2658_575)"
                />
                <path
                  d="M47.3618 57.5242C41.2511 64.5315 38.6376 73.2605 41.657 79.5336C42.1026 80.4605 43.0313 81.0011 43.9985 81.0011C44.3739 81.0011 44.7545 80.9205 45.1172 80.7487C46.4092 80.1323 46.956 78.5941 46.3381 77.3058C43.2883 70.9699 49.5461 59.8669 59.215 54.4579C61.6974 53.0691 64.3539 51.6282 67.1673 50.102C82.9043 41.5625 102.111 31.1389 110.475 19.1844C113.649 25.5832 117.773 39.9214 102.34 55.2699C101.326 56.2788 101.326 57.912 102.34 58.9195C103.355 59.9251 104.996 59.9251 106.007 58.9195C110.442 54.5054 113.45 50.1276 115.41 45.9245C117.381 50.6146 119.017 59.5829 109.392 69.1569C108.378 70.163 108.378 71.7977 109.392 72.8019C109.897 73.3066 110.562 73.5584 111.225 73.5584C111.889 73.5584 112.553 73.3066 113.057 72.8019C129.754 56.1968 118.236 40.1737 117.684 39.4312C121.319 24.2731 112.629 12.7223 112.504 12.5616C111.951 11.8507 111.065 11.4769 110.172 11.5714C109.274 11.6677 108.489 12.2213 108.104 13.0328C102.348 25.1293 81.4616 36.4641 64.6788 45.5716C61.8509 47.1052 59.1803 48.5559 56.6693 49.9586C54.8245 50.9913 53.1 52.1831 51.5131 53.4886C49.6888 52.8089 45.393 51.3223 40.1721 50.279C38.625 46.5898 40.6014 39.7165 44.5705 35.6316L45.238 34.9444C52.9605 27.0069 63.0413 16.6433 67.2656 8.1173C69.5134 12.3647 71.6579 20.0215 66.3003 29.8478C65.6187 31.1012 66.0864 32.6678 67.3451 33.3457C68.6053 34.0254 70.1791 33.5603 70.8621 32.3084C81.0304 13.6525 68.4831 0.879908 68.3563 0.752248C67.6747 0.0774957 66.6729 -0.166837 65.755 0.115347C64.8356 0.400695 64.1512 1.16684 63.9752 2.10799C62.547 9.7333 49.8869 22.7474 41.5114 31.3595L40.8424 32.0467C36.65 36.3602 33.7823 43.5961 34.6147 49.4214C25.4401 48.4516 15.2132 49.7459 10.4708 58.6024C8.41013 59.1891 4.34269 60.6519 1.25964 63.7181C0.246785 64.7242 0.246785 66.3589 1.25964 67.3645C1.76689 67.8673 2.42941 68.1196 3.09357 68.1196C3.75614 68.1196 4.42039 67.8673 4.92736 67.3645C7.99304 64.3141 12.7196 63.3527 12.7594 63.3447C13.5898 63.1837 14.2906 62.6338 14.636 61.8661C19.973 49.9903 39.6712 55.0241 47.3618 57.5242Z"
                  fill="url(#paint1_linear_2658_575)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2658_575"
                    x1="60.3492"
                    y1="38.565"
                    x2="174.097"
                    y2="106.108"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A1E1FF" />
                    <stop offset="1" stop-color="#ACFCC7" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2658_575"
                    x1="69.1763"
                    y1="-30.4576"
                    x2="36.914"
                    y2="76.3092"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E86FC" />
                    <stop offset="1" stop-color="#A1E1FF" />
                  </linearGradient>
                </defs>
              </svg>
            </Logo>
            <EmptyText>자기소개서를 작성하는 칸입니다.</EmptyText>
          </>
        )}
      </Contents>
    </>
  );
};
