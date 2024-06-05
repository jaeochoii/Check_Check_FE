import * as React from "react";
import Link from "next/link";
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

const getLightBlue50 = () => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    return root.style.getPropertyValue("--Light-Blue-50");
  }
  return "#00aeff";
};

const spanStyle: React.CSSProperties = {
  color: getLightBlue50(),
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
        <Button>
          <Link href={"./main"}>홈페이지 바로가기</Link>
        </Button>
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
