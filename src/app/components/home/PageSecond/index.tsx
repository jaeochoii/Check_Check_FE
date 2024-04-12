import * as React from "react";
import Image from "next/image";
import { Images } from "../../../../styles";
import {
  Main,
  Text_Wrapper,
  Small_Text_Wrapper,
  Sub_Title1,
  Sub_Title2,
  Small_Title1,
  Small_Title2,
  Main_Image,
  Arrow_Ico,
} from "./style";

const spanStyle: React.CSSProperties = {
  color: "#3D8DCC",
};

export const PageSecond = () => (
  <>
    <Main>
      <Main_Image>
        <Image
          src={Images.intro_2}
          alt={"인트로2"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Main_Image>
      <Text_Wrapper>
        <Sub_Title1>100여개 회사의 자소서를</Sub_Title1>
        <Sub_Title2>
          <span style={spanStyle}>짹짹</span>
          에서 한번에 작성하세요
        </Sub_Title2>
        <Small_Text_Wrapper>
          <Small_Title1>직관적이고 쉬운 UI가</Small_Title1>
          <Small_Title2>여러분을 더 간편한 길로 안내할거에요.</Small_Title2>
        </Small_Text_Wrapper>
      </Text_Wrapper>
    </Main>
    <Arrow_Ico>
      <Image
        src={Images.arrow_logo}
        alt={"화살표"}
        width={0}
        height={0}
        sizes="100vw"
      />
    </Arrow_Ico>
  </>
);
