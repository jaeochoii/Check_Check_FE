import * as React from "react";
import Image from "next/image";
import { Images } from "../../../../styles";
import {
  Main,
  Text_Wrapper,
  Sub_Title1,
  Sub_Title2,
  Button,
  Main_Image,
  Arrow_Ico,
} from "./style";

const spanStyle: React.CSSProperties = {
  color: "#3D8DCC",
};

export const PageFirst = () => (
  <>
    <Main>
      <Text_Wrapper>
        <Sub_Title1>자소서의 모든 것</Sub_Title1>
        <Sub_Title2>
          <span style={spanStyle}>짹짹</span>
          으로 스마트하게
        </Sub_Title2>
        <Button>홈페이지 바로가기</Button>
      </Text_Wrapper>
      <Main_Image>
        <Image
          src={Images.intro_1}
          alt={"인트로1"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Main_Image>
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