import * as React from "react";
import Image from "next/image";
import { Images } from "../../../../styles";
import {
  Main,
  Text_Wrapper,
  Sub_Title1,
  Sub_Title2,
  Small_Text_Wrapper,
  Small_Title1,
  Main_Image,
} from "./style";

const spanStyle: React.CSSProperties = {
  color: "#3D8DCC",
};

export const PageThree = () => (
  <>
    <Main>
      <Text_Wrapper>
        <Sub_Title1>AI 분석을 기반으로</Sub_Title1>
        <Sub_Title1>여러분의 자소서를</Sub_Title1>
        <Sub_Title2>
          <span style={spanStyle}>Check</span>
          해줄 거예요
        </Sub_Title2>
        <Small_Text_Wrapper>
          <Small_Title1>
            회사별, 직무별 합격자들과 수치적으로 비교하여{" "}
          </Small_Title1>
          <Small_Title1>여러분의 자소서의 부족한 점을 메꿔보세요.</Small_Title1>
        </Small_Text_Wrapper>
      </Text_Wrapper>
      <Main_Image>
        <Image
          src={Images.intro_3}
          alt={"인트로3"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Main_Image>
    </Main>
  </>
);
