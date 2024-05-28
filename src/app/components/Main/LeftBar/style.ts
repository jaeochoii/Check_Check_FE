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
  cursor: pointer;
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
  gap: 4px;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  align-self: stretch;
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
  gap: 36px;
  height: 700px;
  overflow-y: scroll;
  flex: 1 0 0;
  align-self: stretch;
  opacity: 0.9;
`;

export const MyReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-top: 10px;
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

export const CompanyList = styled.div<{ selected: boolean }>`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  border-radius: 12px;
  background: var(--Common-100, #fff);
  border: ${({ selected }) =>
    selected ? "1px solid var(--Violet-80, #C0B0FF);" : ""};

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
  line-height: 138.5%;
  letter-spacing: 0.252px;
  padding-top: 1%;
`;

export const Text = styled.div`
  color: var(--Secondary-20, var(--Violet-20, #23098f));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const CheckMyReport = styled.div`
  display: flex;
  width: 264px;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  background-image: linear-gradient(96deg, #a1e1ff 35.44%, #acfcc7 66.68%);
  border: 1px solid;
  border-image: linear-gradient(96deg, #a1e1ff 100%, #9e86fc 100%);
  border-radius: 16px;
  cursor: pointer;
`;

export const ProtectListText = styled.div`
  color: var(--Neutral-80, var(--Neutral-80, #b0b0b0));
  font-feature-settings: "ss10" on;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;

  cursor: pointer;
`;

export const NoneList = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const IcoWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

export const NoneText = styled.div`
  color: var(--Primary-10, var(--Light-Blue-10, #002130));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 141.2%;
`;
