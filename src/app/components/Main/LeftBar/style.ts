import { Colors, fontGenerator } from "@/styles";
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

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const ProfileImg = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 10000px;
  border: 1px solid var(--Line-Normal-Alternative, rgba(112, 115, 124, 0.08));
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

export const SubTitle = styled.div`
  align-self: stretch;
  color: var(--Neutral-80, var(--Neutral-80, #b0b0b0));
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

export const CheckBox = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;

  border-radius: 2px;
  border: 2px solid var(--Neutral-90, #c4c4c4);
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

export const AddCompany = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Light-Blue-90, #c4ecfe);
  border: none;
  cursor: pointer;
`;

export const CheckReportBtn = styled.button`
  display: flex;
  height: 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Light-Blue-30, #006796);

  border: none;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  display: flex;
  height: 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Light-Blue-30, #006796);
  background: var(--Common-100, #fff);
  cursor: pointer;
  margin-bottom: 10%;
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
