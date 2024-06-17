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

  const logos = [
    "image/logo-samsung.jpg",
    "image/logo-kakao.jpg",
    "image/logo-nc.jpg",
    "image/logo-hyundai.jpg",
    "image/logo-sk.jpg",
    "image/logo-lg.jpg",
    "image/logo-cj.jpg",
    "image/logo-lotte.jpg",
    "image/logo-naver.jpg",
    "image/logo-toss.jpg",
    "image/logo-posco.jpg",
  ];

  const getLogo = (companyName: string | null) => {
    if (!companyName) return "";
    const lowerName = companyName.toLowerCase();
    if (lowerName.includes("삼성") || lowerName.includes("samsung"))
      return logos[0];
    if (lowerName.includes("카카오") || lowerName.includes("kakao"))
      return logos[1];
    if (lowerName.includes("엔씨") || lowerName.includes("nc")) return logos[2];
    if (lowerName.includes("현대") || lowerName.includes("hyundai"))
      return logos[3];
    if (lowerName.includes("에스케이") || lowerName.includes("sk"))
      return logos[4];
    if (lowerName.includes("엘지") || lowerName.includes("lg")) return logos[5];
    if (lowerName.includes("씨제이") || lowerName.includes("cj"))
      return logos[6];
    if (lowerName.includes("롯데") || lowerName.includes("lotte"))
      return logos[7];
    if (lowerName.includes("네이버") || lowerName.includes("naver"))
      return logos[8];
    if (lowerName.includes("토스") || lowerName.includes("toss"))
      return logos[9];
    if (lowerName.includes("포스코") || lowerName.includes("posco"))
      return logos[10];
    return "";
  };

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
              <CompanyLogo src={getLogo(selectedCompany.name)} alt="k" />
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
