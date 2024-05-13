import * as React from "react";
import { useState } from "react";
import { MemoLayout } from "../../Layout/Memo";
import {
  Hint,
  HintContents,
  HintTitle,
  RightBar,
  Memo,
  MemoTitle,
  MemoText,
  DeleteIco,
  AddMemo,
  PlusIco,
  CheckWordsBtn,
  CheckWordsText,
  SaveBtn,
  SaveText,
  GuideText,
} from "./style";

export const RightBarPage: React.FC = () => {
  const [guideVisible, setGuideVisible] = useState<boolean>(true);
  const [memos, setMemos] = useState<{ key: number; isChecked: boolean }[]>([]);

  const handleAddMemo = () => {
    setMemos([...memos, { key: memos.length, isChecked: false }]);
    setGuideVisible(false);
  };

  const handleDeleteMemo = () => {
    const updatedMemos = memos.filter((memo) => !memo.isChecked);
    setMemos(updatedMemos);
    setGuideVisible(updatedMemos.length === 0);
  };

  const handleCheckboxChange = (key: number, isChecked: boolean) => {
    const updatedMemos = memos.map((memo) => {
      if (memo.key === key) {
        return { ...memo, isChecked };
      }
      return memo;
    });
    setMemos(updatedMemos);
  };

  return (
    <>
      <RightBar>
        <Hint>
          <HintTitle>합격자 분석</HintTitle>
          <HintContents>
            삼성전자 DA 사업부 합격자의 70%는 이 질문에 대해 ‘고객 만족’
            키워드를 이용하여 답변했어요.
          </HintContents>
        </Hint>
        <Memo>
          <MemoTitle>
            <MemoText>메모</MemoText>
            <DeleteIco onClick={handleDeleteMemo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2367_141"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2367_141)">
                  <path
                    d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17ZM14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17Z"
                    fill="#5C5C5C"
                  />
                </g>
              </svg>
            </DeleteIco>
          </MemoTitle>
          <GuideText visible={guideVisible}>
            아래 + 버튼을 클릭하여
            <br />
            메모를 작성해보세요.
          </GuideText>
          {memos.map((memo) => (
            <MemoLayout
              key={memo.key}
              onDelete={() => handleDeleteMemo()}
              onCheckboxChange={(isChecked) =>
                handleCheckboxChange(memo.key, isChecked)
              }
            />
          ))}
          <AddMemo onClick={handleAddMemo}>
            <PlusIco>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2367_125"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2367_125)">
                  <path
                    d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z"
                    fill="#006796"
                  />
                </g>
              </svg>
            </PlusIco>
          </AddMemo>
        </Memo>
        <CheckWordsBtn>
          <CheckWordsText>맞춤법 검사</CheckWordsText>
        </CheckWordsBtn>
        <SaveBtn>
          <SaveText>자기소개서 저장</SaveText>
        </SaveBtn>
      </RightBar>
    </>
  );
};
