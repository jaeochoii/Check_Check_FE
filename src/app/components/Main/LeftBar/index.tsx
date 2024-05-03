import * as React from "react";
import { useState } from "react";
import { SetProfile } from "@/app/utils/Profile";
import {
  CheckBox,
  CompanyHeader,
  CompanyList,
  CompanyName,
  LeftBar,
  LogOutText,
  Ico,
  Profile,
  ProfileLogoutWrapper,
  ProfileText,
  ProfileTextWrapper,
  SubTitle,
  WritingListWrapper,
  AddQuestion,
  AddText,
  AddCompany,
  CheckReportBtn,
  DeleteBtn,
  Text,
  ProtectListText,
  QuestionEach,
  QuestionIndex,
  QuestionIndexText,
  QuestionList,
  QuestionText,
} from "./style";

interface Question {
  index: number;
  text: string;
}

export const LeftBarPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleAddQuestion = () => {
    const newIndex = questions.length + 1;
    setQuestions([
      ...questions,
      {
        index: newIndex,
        text: `질문 ${newIndex}`,
      },
    ]);
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions
        .filter((q) => q.index !== index)
        .map((q, idx) => {
          // 삭제된 질문 이후의 질문들의 인덱스를 1씩 감소시킴
          if (q.index > index) {
            return { ...q, index: idx + 1 };
          }
          return q;
        });
      return updatedQuestions;
    });
  };

  return (
    <>
      <LeftBar>
        <Profile>
          <SetProfile />
          <ProfileTextWrapper>
            <ProfileText>
              안녕하세요, <span className="highlight">김인하</span>님
            </ProfileText>
            <ProfileLogoutWrapper>
              <Ico>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_2367_102"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2367_102)">
                    <path
                      d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H11C11.2833 3 11.5208 3.09583 11.7125 3.2875C11.9042 3.47917 12 3.71667 12 4C12 4.28333 11.9042 4.52083 11.7125 4.7125C11.5208 4.90417 11.2833 5 11 5H5V19H11C11.2833 19 11.5208 19.0958 11.7125 19.2875C11.9042 19.4792 12 19.7167 12 20C12 20.2833 11.9042 20.5208 11.7125 20.7125C11.5208 20.9042 11.2833 21 11 21H5ZM17.175 13H10C9.71667 13 9.47917 12.9042 9.2875 12.7125C9.09583 12.5208 9 12.2833 9 12C9 11.7167 9.09583 11.4792 9.2875 11.2875C9.47917 11.0958 9.71667 11 10 11H17.175L15.3 9.125C15.1167 8.94167 15.025 8.71667 15.025 8.45C15.025 8.18333 15.1167 7.95 15.3 7.75C15.4833 7.55 15.7167 7.44583 16 7.4375C16.2833 7.42917 16.525 7.525 16.725 7.725L20.3 11.3C20.5 11.5 20.6 11.7333 20.6 12C20.6 12.2667 20.5 12.5 20.3 12.7L16.725 16.275C16.525 16.475 16.2875 16.5708 16.0125 16.5625C15.7375 16.5542 15.5 16.45 15.3 16.25C15.1167 16.05 15.0292 15.8125 15.0375 15.5375C15.0458 15.2625 15.1417 15.0333 15.325 14.85L17.175 13Z"
                      fill="#8A8A8A"
                    />
                  </g>
                </svg>
              </Ico>
              <LogOutText>로그아웃</LogOutText>
            </ProfileLogoutWrapper>
          </ProfileTextWrapper>
        </Profile>
        <WritingListWrapper>
          <SubTitle>내 자소서</SubTitle>
          <CompanyList>
            <CompanyHeader>
              <CompanyName>삼성전자</CompanyName>
              <CheckBox type="checkbox"></CheckBox>
            </CompanyHeader>
            <QuestionList>
              {questions.map((question) => (
                <QuestionEach key={question.index}>
                  <QuestionIndex>
                    <QuestionIndexText>{question.index}</QuestionIndexText>
                  </QuestionIndex>
                  <QuestionText>{question.text}</QuestionText>
                  <Ico onClick={() => handleDeleteQuestion(question.index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_2367_233"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2367_233)">
                        <path
                          d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17ZM14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17Z"
                          fill="#737373"
                        />
                      </g>
                    </svg>
                  </Ico>
                </QuestionEach>
              ))}
            </QuestionList>
            <AddQuestion onClick={handleAddQuestion}>
              <Ico>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <mask
                    id="mask0_2367_204"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                  >
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2367_204)">
                    <path
                      d="M11.5 13H6.5C6.21667 13 5.97917 12.9042 5.7875 12.7125C5.59583 12.5208 5.5 12.2833 5.5 12C5.5 11.7167 5.59583 11.4792 5.7875 11.2875C5.97917 11.0958 6.21667 11 6.5 11H11.5V6C11.5 5.71667 11.5958 5.47917 11.7875 5.2875C11.9792 5.09583 12.2167 5 12.5 5C12.7833 5 13.0208 5.09583 13.2125 5.2875C13.4042 5.47917 13.5 5.71667 13.5 6V11H18.5C18.7833 11 19.0208 11.0958 19.2125 11.2875C19.4042 11.4792 19.5 11.7167 19.5 12C19.5 12.2833 19.4042 12.5208 19.2125 12.7125C19.0208 12.9042 18.7833 13 18.5 13H13.5V18C13.5 18.2833 13.4042 18.5208 13.2125 18.7125C13.0208 18.9042 12.7833 19 12.5 19C12.2167 19 11.9792 18.9042 11.7875 18.7125C11.5958 18.5208 11.5 18.2833 11.5 18V13Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Ico>
              <AddText>질문 추가하기</AddText>
            </AddQuestion>
          </CompanyList>
          <AddCompany>
            <Ico>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <mask
                  id="mask0_2367_147"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="24"
                >
                  <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2367_147)">
                  <path
                    d="M11.5 13H6.5C6.21667 13 5.97917 12.9042 5.7875 12.7125C5.59583 12.5208 5.5 12.2833 5.5 12C5.5 11.7167 5.59583 11.4792 5.7875 11.2875C5.97917 11.0958 6.21667 11 6.5 11H11.5V6C11.5 5.71667 11.5958 5.47917 11.7875 5.2875C11.9792 5.09583 12.2167 5 12.5 5C12.7833 5 13.0208 5.09583 13.2125 5.2875C13.4042 5.47917 13.5 5.71667 13.5 6V11H18.5C18.7833 11 19.0208 11.0958 19.2125 11.2875C19.4042 11.4792 19.5 11.7167 19.5 12C19.5 12.2833 19.4042 12.5208 19.2125 12.7125C19.0208 12.9042 18.7833 13 18.5 13H13.5V18C13.5 18.2833 13.4042 18.5208 13.2125 18.7125C13.0208 18.9042 12.7833 19 12.5 19C12.2167 19 11.9792 18.9042 11.7875 18.7125C11.5958 18.5208 11.5 18.2833 11.5 18V13Z"
                    fill="#006796"
                  />
                </g>
              </svg>
            </Ico>
            <AddText>회사 추가하기</AddText>
          </AddCompany>
        </WritingListWrapper>
        <CheckReportBtn>
          <Text>
            <span className="WhiteColor">첨삭</span>
          </Text>
        </CheckReportBtn>
        <DeleteBtn>
          <Text>
            <span className="RedColor">삭제</span>
          </Text>
        </DeleteBtn>
        <ProtectListText>개인정보처리방침</ProtectListText>
      </LeftBar>
    </>
  );
};