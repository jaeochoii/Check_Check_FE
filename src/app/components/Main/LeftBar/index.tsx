import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import PopUpPage from "@/app/popUp/page";
import { SetProfile } from "@/app/utils/Profile";
import {
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
  ProtectListText,
  QuestionEach,
  QuestionIndex,
  QuestionIndexText,
  QuestionList,
  QuestionText,
  ProfileLayout,
  GuideTextWrapper,
  GuideText,
  LogInBtn,
  LogInText,
  SignUpBtn,
  SignUpText,
  MyReportHeader,
  AddCompany,
  AddCompanyText,
  CheckMyReport,
  Text,
  ButtonsWrapper,
  NoneList,
  IcoWrapper,
  NoneText,
  QuestionInput,
  DimOverlay,
  LoadingGif,
  LoadingText,
} from "./style";
import { Question, Company } from "../type";

interface Props {
  text: string;
}

interface LeftBarPageProps {
  onQuestionClick: (company: Company, question: Question) => void;
  onDeleteCompany: (companyId: number) => void;
}

export const LeftBarPage: React.FC<LeftBarPageProps> = ({
  onQuestionClick,
  onDeleteCompany,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [companies, setCompanies] = useState<Company[]>(() => {
    if (typeof window !== "undefined") {
      const savedCompanies = localStorage.getItem("companies");
      return savedCompanies ? JSON.parse(savedCompanies) : [];
    }
    return [];
  });
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
    number | null
  >(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [newQuestionText, setNewQuestionText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("companies", JSON.stringify(companies));
    }
  }, [companies]);

  const TextOverflow: React.FC<Props> = ({ text }) => {
    const maxLength: number = 8;
    const truncatedText: string =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    const textStyles: React.CSSProperties = {
      color: "var(--Primary-40, #008dcf)",
      marginRight: "4px",
    };

    return (
      <div className="overflow">
        <span style={textStyles}>{truncatedText}</span>
        <span>님</span>
      </div>
    );
  };

  const handleDeleteButtonClick = (id: number) => {
    setCompanies(companies.filter((company) => company.id !== id));
    onDeleteCompany(id);
  };

  const handleAddQuestion = (companyId: number) => {
    if (newQuestionText.trim() === "") {
      return;
    }
    setCompanies((prevCompanies: Company[]) => {
      return prevCompanies.map((company) => {
        if (company.id === companyId) {
          const newIndex = company.questions.length + 1;
          const newQuestions = [
            ...company.questions,
            {
              index: newIndex,
              text: newQuestionText,
              charCount: company.charCount,
            },
          ];
          return {
            ...company,
            questions: newQuestions,
          };
        }
        return company;
      });
    });

    setNewQuestionText("");
  };

  const handleDeleteQuestion = (companyId: number, indexToDelete: number) => {
    setCompanies((prevCompanies: Company[]) => {
      return prevCompanies.map((company) => {
        if (company.id === companyId) {
          const updatedQuestions = company.questions
            .filter((q) => q.index !== indexToDelete)
            .map((q, idx) => ({
              ...q,
              index: idx + 1,
            }));
          return {
            ...company,
            questions: updatedQuestions,
          };
        }
        return company;
      });
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuestionClick = (company: Company, question: Question) => {
    setSelectedCompany(company);
    setSelectedQuestionIndex(question.index);
    onQuestionClick(company, question);
  };

  const handleComplete = (company: Partial<Company>) => {
    setCompanies((prevCompanies: Company[]) => {
      const newIndex = prevCompanies.length + 1;
      const newCompany: Company = {
        id: newIndex,
        name: company.name || "",
        job: company.job || "",
        questions: company.questions || [],
        charCount: Number(company.charCount || 0),
      };
      console.log("새로운 회사 정보:", newCompany);
      return [...prevCompanies, newCompany];
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCheckMyReport = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "../../../edit";
    }, 8000);
  };

  return (
    <>
      {isLoading && (
        <DimOverlay>
          <LoadingGif src="image/loading.gif" alt="Loading..." />
          <LoadingText>
            <span style={{ color: "var(--Primary-40, #008dcf)" }}>
              {Array.from("인하대학교").map((char, idx) => (
                <span key={idx} className="animated-text">
                  {char}
                </span>
              ))}
            </span>
            {Array.from("님의").map((char, idx) => (
              <span key={idx} className="animated-text">
                {char}
              </span>
            ))}{" "}
            <span style={{ color: "#1428A0" }}>
              {Array.from("삼성전자").map((char, idx) => (
                <span key={idx} className="animated-text">
                  {char}
                </span>
              ))}
            </span>{" "}
            {Array.from("자기소개서를").map((char, idx) => (
              <span key={idx} className="animated-text">
                {char}
              </span>
            ))}{" "}
            {Array.from("AI가").map((char, idx) => (
              <span key={idx} className="animated-text">
                {char}
              </span>
            ))}{" "}
            {Array.from("분석중입니다...").map((char, idx) => (
              <span key={idx} className="animated-text">
                {char}
              </span>
            ))}
          </LoadingText>
        </DimOverlay>
      )}
      <LeftBar>
        {isLoggedIn ? (
          <>
            <Profile>
              <SetProfile />
              <ProfileTextWrapper>
                <ProfileText>
                  <TextOverflow text="인하대학교" />
                </ProfileText>
                <ProfileText>행운을 빌어요!</ProfileText>
              </ProfileTextWrapper>
            </Profile>
            <ButtonsWrapper>
              <ProfileLogoutWrapper>
                <Ico>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_2635_391"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="24"
                    >
                      <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2635_391)">
                      <path
                        d="M10.5 12C9.4 12 8.45833 11.6083 7.675 10.825C6.89167 10.0417 6.5 9.1 6.5 8C6.5 6.9 6.89167 5.95833 7.675 5.175C8.45833 4.39167 9.4 4 10.5 4C11.6 4 12.5417 4.39167 13.325 5.175C14.1083 5.95833 14.5 6.9 14.5 8C14.5 9.1 14.1083 10.0417 13.325 10.825C12.5417 11.6083 11.6 12 10.5 12ZM2.5 18V17.2C2.5 16.65 2.64167 16.1333 2.925 15.65C3.20833 15.1667 3.6 14.8 4.1 14.55C5.06667 14.0667 6.06667 13.6875 7.1 13.4125C8.13333 13.1375 9.19167 13 10.275 13C10.5583 13 10.7958 13.1 10.9875 13.3C11.1792 13.5 11.275 13.7417 11.275 14.025C11.275 14.3083 11.1792 14.5458 10.9875 14.7375C10.7958 14.9292 10.5583 15.025 10.275 15.025C9.34167 15.025 8.4375 15.1417 7.5625 15.375C6.6875 15.6083 5.83333 15.9333 5 16.35C4.83333 16.4333 4.70833 16.55 4.625 16.7C4.54167 16.85 4.5 17.0167 4.5 17.2V18H10.275C10.5583 18 10.7958 18.0958 10.9875 18.2875C11.1792 18.4792 11.275 18.7167 11.275 19C11.275 19.2833 11.1792 19.5208 10.9875 19.7125C10.7958 19.9042 10.5583 20 10.275 20H4.5C3.95 20 3.47917 19.8042 3.0875 19.4125C2.69583 19.0208 2.5 18.55 2.5 18ZM16.35 20.2L16.2 19.5C16 19.4167 15.8125 19.3292 15.6375 19.2375C15.4625 19.1458 15.2833 19.0333 15.1 18.9L14.375 19.125C14.1583 19.1917 13.9458 19.1833 13.7375 19.1C13.5292 19.0167 13.3667 18.8833 13.25 18.7L13.05 18.35C12.9333 18.15 12.8917 17.9333 12.925 17.7C12.9583 17.4667 13.0667 17.275 13.25 17.125L13.8 16.65C13.7667 16.4167 13.75 16.2 13.75 16C13.75 15.8 13.7667 15.5833 13.8 15.35L13.25 14.875C13.0667 14.725 12.9583 14.5375 12.925 14.3125C12.8917 14.0875 12.9333 13.875 13.05 13.675L13.275 13.3C13.3917 13.1167 13.55 12.9833 13.75 12.9C13.95 12.8167 14.1583 12.8083 14.375 12.875L15.1 13.1C15.2833 12.9667 15.4625 12.8542 15.6375 12.7625C15.8125 12.6708 16 12.5833 16.2 12.5L16.35 11.775C16.4 11.5417 16.5125 11.3542 16.6875 11.2125C16.8625 11.0708 17.0667 11 17.3 11H17.7C17.9333 11 18.1375 11.075 18.3125 11.225C18.4875 11.375 18.6 11.5667 18.65 11.8L18.8 12.5C19 12.5833 19.1875 12.675 19.3625 12.775C19.5375 12.875 19.7167 13 19.9 13.15L20.575 12.925C20.8083 12.8417 21.0333 12.8417 21.25 12.925C21.4667 13.0083 21.6333 13.15 21.75 13.35L21.95 13.7C22.0667 13.9 22.1083 14.1167 22.075 14.35C22.0417 14.5833 21.9333 14.775 21.75 14.925L21.2 15.4C21.2333 15.6 21.25 15.8083 21.25 16.025C21.25 16.2417 21.2333 16.45 21.2 16.65L21.75 17.125C21.9333 17.275 22.0417 17.4625 22.075 17.6875C22.1083 17.9125 22.0667 18.125 21.95 18.325L21.725 18.7C21.6083 18.8833 21.45 19.0167 21.25 19.1C21.05 19.1833 20.8417 19.1917 20.625 19.125L19.9 18.9C19.7167 19.0333 19.5375 19.1458 19.3625 19.2375C19.1875 19.3292 19 19.4167 18.8 19.5L18.65 20.225C18.6 20.4583 18.4875 20.6458 18.3125 20.7875C18.1375 20.9292 17.9333 21 17.7 21H17.3C17.0667 21 16.8625 20.925 16.6875 20.775C16.5125 20.625 16.4 20.4333 16.35 20.2ZM17.5 18C18.05 18 18.5208 17.8042 18.9125 17.4125C19.3042 17.0208 19.5 16.55 19.5 16C19.5 15.45 19.3042 14.9792 18.9125 14.5875C18.5208 14.1958 18.05 14 17.5 14C16.95 14 16.4792 14.1958 16.0875 14.5875C15.6958 14.9792 15.5 15.45 15.5 16C15.5 16.55 15.6958 17.0208 16.0875 17.4125C16.4792 17.8042 16.95 18 17.5 18ZM10.5 10C11.05 10 11.5208 9.80417 11.9125 9.4125C12.3042 9.02083 12.5 8.55 12.5 8C12.5 7.45 12.3042 6.97917 11.9125 6.5875C11.5208 6.19583 11.05 6 10.5 6C9.95 6 9.47917 6.19583 9.0875 6.5875C8.69583 6.97917 8.5 7.45 8.5 8C8.5 8.55 8.69583 9.02083 9.0875 9.4125C9.47917 9.80417 9.95 10 10.5 10Z"
                        fill="#8A8A8A"
                      />
                    </g>
                  </svg>
                </Ico>
                <LogOutText>
                  <Link href={"../../../setProfile"}>프로필 관리</Link>
                </LogOutText>
              </ProfileLogoutWrapper>
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
                <LogOutText onClick={handleLogout}>로그아웃</LogOutText>
              </ProfileLogoutWrapper>
            </ButtonsWrapper>
          </>
        ) : (
          <ProfileLayout>
            <GuideTextWrapper>
              <GuideText>
                로그인 후 자기소개서 저장 기능을 누려보세요!
              </GuideText>
            </GuideTextWrapper>
            <LogInBtn>
              <Link href={"./login"}>
                <LogInText>로그인</LogInText>
              </Link>
            </LogInBtn>
            <SignUpBtn>
              <Link href={"./signUp"}>
                <SignUpText>회원가입</SignUpText>
              </Link>
            </SignUpBtn>
          </ProfileLayout>
        )}
        <MyReportHeader>
          <SubTitle>내 자소서</SubTitle>
          <AddCompany>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_2634_311"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2634_311)">
                <path
                  d="M7.33331 8.66668H3.99998C3.81109 8.66668 3.65276 8.60279 3.52498 8.47501C3.3972 8.34723 3.33331 8.1889 3.33331 8.00001C3.33331 7.81112 3.3972 7.65279 3.52498 7.52501C3.65276 7.39723 3.81109 7.33334 3.99998 7.33334H7.33331V4.00001C7.33331 3.81112 7.3972 3.65279 7.52498 3.52501C7.65276 3.39723 7.81109 3.33334 7.99998 3.33334C8.18887 3.33334 8.3472 3.39723 8.47498 3.52501C8.60276 3.65279 8.66665 3.81112 8.66665 4.00001V7.33334H12C12.1889 7.33334 12.3472 7.39723 12.475 7.52501C12.6028 7.65279 12.6666 7.81112 12.6666 8.00001C12.6666 8.1889 12.6028 8.34723 12.475 8.47501C12.3472 8.60279 12.1889 8.66668 12 8.66668H8.66665V12C8.66665 12.1889 8.60276 12.3472 8.47498 12.475C8.3472 12.6028 8.18887 12.6667 7.99998 12.6667C7.81109 12.6667 7.65276 12.6028 7.52498 12.475C7.3972 12.3472 7.33331 12.1889 7.33331 12V8.66668Z"
                  fill="#006796"
                />
              </g>
            </svg>
            <AddCompanyText onClick={handleOpenModal}>
              회사 추가하기
            </AddCompanyText>
            {isModalOpen && (
              <PopUpPage
                onClose={handleCloseModal}
                onComplete={(company) => handleComplete(company)}
              />
            )}
          </AddCompany>
        </MyReportHeader>
        <WritingListWrapper>
          {companies.length > 0 ? (
            companies.map((company) => (
              <CompanyList
                key={company.id}
                selected={
                  selectedCompany?.id === company.id &&
                  selectedQuestionIndex !== null
                }
              >
                <CompanyHeader>
                  <CompanyName>{company.name}</CompanyName>
                  <Ico>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_2634_217"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2634_217)">
                        <path
                          d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM4 21C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20V17.575C3 17.3083 3.05 17.0542 3.15 16.8125C3.25 16.5708 3.39167 16.3583 3.575 16.175L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.825 20.425C7.64167 20.6083 7.42917 20.75 7.1875 20.85C6.94583 20.95 6.69167 21 6.425 21H4ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                          fill="#8A8A8A"
                        />
                      </g>
                    </svg>
                  </Ico>
                  <Ico onClick={() => handleDeleteButtonClick(company.id)}>
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
                </CompanyHeader>
                <QuestionList>
                  {company.questions.map((question) => (
                    <QuestionEach
                      key={question.index}
                      onClick={() => handleQuestionClick(company, question)}
                    >
                      <QuestionIndex>
                        <QuestionIndexText>{question.index}</QuestionIndexText>
                      </QuestionIndex>
                      <QuestionText>{question.text}</QuestionText>
                      <Ico
                        onClick={() =>
                          handleDeleteQuestion(company.id, question.index)
                        }
                      >
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
                <QuestionInput
                  type="text"
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  placeholder="새로운 질문을 입력해주세요"
                />
                <AddQuestion onClick={() => handleAddQuestion(company.id)}>
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
                <CheckMyReport onClick={handleCheckMyReport}>
                  <Text>첨삭</Text>
                </CheckMyReport>
              </CompanyList>
            ))
          ) : (
            <NoneList visible={true}>
              <IcoWrapper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <mask
                    id="mask0_2658_572"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                  >
                    <rect width="48" height="48" fill="#002130" />
                  </mask>
                  <g mask="url(#mask0_2658_572)">
                    <path
                      d="M22 30V34C22 34.5667 22.1917 35.0417 22.575 35.425C22.9583 35.8083 23.4333 36 24 36C24.5667 36 25.0417 35.8083 25.425 35.425C25.8083 35.0417 26 34.5667 26 34V30H30C30.5667 30 31.0417 29.8083 31.425 29.425C31.8083 29.0417 32 28.5667 32 28C32 27.4333 31.8083 26.9583 31.425 26.575C31.0417 26.1917 30.5667 26 30 26H26V22C26 21.4333 25.8083 20.9583 25.425 20.575C25.0417 20.1917 24.5667 20 24 20C23.4333 20 22.9583 20.1917 22.575 20.575C22.1917 20.9583 22 21.4333 22 22V26H18C17.4333 26 16.9583 26.1917 16.575 26.575C16.1917 26.9583 16 27.4333 16 28C16 28.5667 16.1917 29.0417 16.575 29.425C16.9583 29.8083 17.4333 30 18 30H22ZM12 44C10.9 44 9.95833 43.6083 9.175 42.825C8.39167 42.0417 8 41.1 8 40V8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4H26.35C26.8833 4 27.3917 4.1 27.875 4.3C28.3583 4.5 28.7833 4.78333 29.15 5.15L38.85 14.85C39.2167 15.2167 39.5 15.6417 39.7 16.125C39.9 16.6083 40 17.1167 40 17.65V40C40 41.1 39.6083 42.0417 38.825 42.825C38.0417 43.6083 37.1 44 36 44H12ZM26 16V8H12V40H36V18H28C27.4333 18 26.9583 17.8083 26.575 17.425C26.1917 17.0417 26 16.5667 26 16Z"
                      fill="#002130"
                    />
                  </g>
                </svg>
              </IcoWrapper>
              <NoneText>
                회사 추가하기 버튼을 눌러
                <br />
                자기소개서를 작성해보세요.
              </NoneText>
            </NoneList>
          )}
        </WritingListWrapper>
        <ProtectListText>
          <Link
            href="https://amused-papaya-254.notion.site/e67b6b00a7594f67bff74178943cf217?pvs=4"
            passHref
          >
            개인정보처리방침
          </Link>
        </ProtectListText>
      </LeftBar>
    </>
  );
};
