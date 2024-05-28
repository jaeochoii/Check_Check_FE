import * as React from "react";
import Link from "next/link";
import {
  Cover,
  LayOut,
  TextLayout,
  HeaderLayout,
  ContentLayout,
  OutLayout,
  OutText,
} from "./style";

interface props {
  onClose: () => void;
}

export const OutPage: React.FC<props> = ({ onClose }) => {
  return (
    <>
      <Cover onClick={onClose}>
        <LayOut onClick={(e) => e.stopPropagation()}>
          <TextLayout>
            <HeaderLayout>정말 짹짹을 떠나시겠어요?</HeaderLayout>
            <ContentLayout>
              좋은 일이 생겨서 탈퇴하는 것 같아 마음이 홀가분해요. <br /> 모든
              데이터는 저희가 안전하게 삭제해드릴게요.
              <br /> 탈퇴 후에는 데이터 복구가 힘들어요.
            </ContentLayout>
          </TextLayout>
          <OutLayout>
            <Link href={"../../"}>
              <OutText>회원탈퇴</OutText>
            </Link>
          </OutLayout>
        </LayOut>
      </Cover>
    </>
  );
};
