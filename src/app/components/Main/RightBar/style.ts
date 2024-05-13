import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const RightBar = styled.div`
  display: flex;
  width: 20%;
  height: 100vh;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--Light-Blue-99, #f7fdff);
`;

export const Hint = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  border-radius: 16px;
  background: var(--Common-100, #fff);
  box-shadow: 0px 2px 8px 0px rgba(20, 40, 160, 0.12),
    0px 1px 4px 0px rgba(20, 40, 160, 0.08),
    0px 0px 1px 0px rgba(20, 40, 160, 0.08);
`;

export const HintTitle = styled.div`
  align-self: stretch;
  color: var(--Primary-30, var(--Light-Blue-30, #006796));

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 144.5%;
  letter-spacing: -0.004px;
`;

export const HintContents = styled.div`
  align-self: stretch;
  color: var(--Common-0, var(--Common-0, #000));
  font-feature-settings: "ss10" on;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.091px;
`;

export const Memo = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const MemoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const MemoText = styled.div`
  flex: 1 0 0;

  color: var(--Common-0, var(--Common-0, #000));
  font-feature-settings: "ss10" on;

  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 146.7%;
  letter-spacing: 0.144px;
`;

export const DeleteIco = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const GuideText = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};

  color: var(--Primary-10, var(--Light-Blue-10, #002130));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 141.2%;
`;

export const AddMemo = styled.button`
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 8px;
  background: var(--Light-Blue-90, #c4ecfe);
`;

export const PlusIco = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const CheckWordsBtn = styled.button`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Light-Blue-30, #006796);
  background: var(--Common-100, #fff);
  cursor: pointer;
`;

export const CheckWordsText = styled.div`
  align-self: stretch;
  color: var(--Primary-20, var(--Light-Blue-20, #004261));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.091px;
`;

export const SaveBtn = styled.button`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Light-Blue-30, #006796);

  border: none;
  cursor: pointer;
`;

export const SaveText = styled.div`
  align-self: stretch;
  color: var(--Common-100, var(--Common-100, #fff));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 141.2%;
`;
