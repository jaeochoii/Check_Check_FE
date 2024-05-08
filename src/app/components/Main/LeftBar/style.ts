import styled from "@emotion/styled";

export const LeftBar = styled.div`
  display: flex;
  width: 25%;
  height: 100vh;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--Light-Blue-99, #f7fdff);
`;

export const ProfileLayout = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const GuideTextWrapper = styled.div`
  align-self: stretch;
`;

export const GuideText = styled.div`
  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const LogInBtn = styled.div`
  display: flex;
  width: 312px;
  flex: 1 0 0;
  height: 42px;
  flex-direction: column;
  justify-content: center;
  background: var(--Light-Blue-30, #006796);
  border-radius: 8px;
  cursor: pointer;
`;

export const LogInText = styled.div`
  color: var(--Common-100, var(--Common-100, #fff));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const SignUpBtn = styled.div`
  align-self: stretch;
`;

export const SignUpText = styled.div`
  color: var(--Neutral-50, var(--Neutral-50, #737373));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 146.7%;
  letter-spacing: 0.144px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const ProfileTextWrapper = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

export const ProfileText = styled.div`
  align-self: stretch;
  color: #000;
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.552px;

  .highlight {
    color: var(--Primary-40, #008dcf);
  }
`;

export const ProfileLogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

export const Ico = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const LogOutText = styled.div`
  color: var(--Neutral-50, var(--Neutral-50, #737373));
  font-feature-settings: "ss10" on;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.091px;
  cursor: pointer;
`;

export const WritingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;
  opacity: 0.9;
`;

export const MyReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const SubTitle = styled.div`
  color: var(--Primary-10, var(--Light-Blue-10, #002130));
  font-feature-settings: "ss10" on;

  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 141.2%;
`;

export const AddCompany = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: var(--Light-Blue-90, #c4ecfe);
  cursor: pointer;
`;

export const AddCompanyText = styled.div`
  color: var(--Primary-30, var(--Light-Blue-30, #006796));
  font-feature-settings: "ss10" on;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const CompanyList = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  border-radius: 12px;
  background: var(--Common-100, #fff);

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;

  color: var(--Primary-20, var(--Light-Blue-20, #004261));
  font-feature-settings: "ss10" on;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.24px;
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid var(--Neutral-90, #c4c4c4);
  appearance: none;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQxLjkzNzUsOC42MjVjLTAuNjY0MDYsMC4wMjM0NCAtMS4yNzM0NCwwLjM3NSAtMS42MjUsMC45Mzc1bC0xOC44MTI1LDI4Ljc4MTI1bC0xMi4xODc1LC0xMC41MzEyNWMtMC41MjM0NCwtMC41NDI5NyAtMS4zMDg1OSwtMC43NDYwOSAtMi4wMzEyNSwtMC41MTk1M2MtMC43MTg3NSwwLjIyMjY2IC0xLjI1MzkxLDAuODMyMDMgLTEuMzc4OTEsMS41NzQyMmMtMC4xMjUsMC43NDYwOSAwLjE3NTc4LDEuNDk2MDkgMC43ODUxNiwxLjk0NTMxbDEzLjkzNzUsMTIuMDYyNWMwLjQzNzUsMC4zNzEwOSAxLjAxNTYzLDAuNTM1MTYgMS41ODIwMywwLjQ1MzEzYzAuNTcwMzEsLTAuMDg1OTQgMS4wNzQyMiwtMC40MTAxNiAxLjM4NjcyLC0wLjg5MDYybDIwLjA5Mzc1LC0zMC42ODc1YzAuNDI5NjksLTAuNjI4OTEgMC40NjQ4NCwtMS40NDE0MSAwLjA5Mzc1LC0yLjEwNTQ3Yy0wLjM3MTA5LC0wLjY2MDE2IC0xLjA4NTk0LC0xLjA1NDY5IC0xLjg0Mzc1LC0xLjAxOTUzeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--Light-Blue-30, #006796);
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  background: var(--Common-100, #fff);
`;

export const QuestionEach = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: var(--Common-100, #fff);
`;

export const QuestionIndex = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 36px;
  background: var(--Light-Blue-90, #c4ecfe);
`;

export const QuestionIndexText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  color: var(--Common-0, var(--Common-0, #000));
  font-feature-settings: "ss10" on;
  text-overflow: ellipsis;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%; /* 18.005px */
  letter-spacing: 0.252px;
`;

export const QuestionText = styled.div`
  display: flex;
  height: 18px;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;

  color: var(--Common-0, var(--Common-0, #000));
  font-feature-settings: "ss10" on;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const AddQuestion = styled.button`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Neutral-99, #f7f7f7);
  border: none;
  cursor: pointer;
`;

export const AddText = styled.div`
  color: var(--Primary-20, var(--Light-Blue-20, #004261));
  font-feature-settings: "ss10" on;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%; /* 18.005px */
  letter-spacing: 0.252px;
  padding-top: 1%;
`;

export const Text = styled.div`
  text-align: center;
  font-feature-settings: "ss10" on;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 133.4%; /* 32.016px */
  letter-spacing: -0.552px;

  .WhiteColor {
    color: var(--Primary-99, var(--Light-Blue-99, #f7fdff));
  }

  .RedColor {
    color: var(--Error-40, var(--Red-40, #e52222));
  }
`;

export const ProtectListText = styled.div`
  color: var(--Neutral-80, var(--Neutral-80, #b0b0b0));
  font-feature-settings: "ss10" on;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%; /* 18.005px */
  letter-spacing: 0.252px;

  cursor: pointer;
`;
