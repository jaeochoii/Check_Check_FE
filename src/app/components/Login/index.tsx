import * as React from "react";
import Image from "next/image";
import { Images } from "../../../styles";
import { Main, Login_Image, Login_Wrapper, Logo } from "./style";

export const Login = () => (
  <>
    <Main>
      <Login_Image>
        <Image
          src={Images.login}
          alt={"인트로1"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Login_Image>
      <Image
        src={Images.signup_logo}
        alt={"가입로고"}
        width={0}
        height={0}
        sizes="100vw"
      />
      <Login_Wrapper>
        <Logo>
          <Image
            src={Images.kakao_logo}
            alt={"카카오로고"}
            width={0}
            height={0}
            sizes="100vw"
          />
        </Logo>
        카카오로 시작하기
      </Login_Wrapper>
    </Main>
  </>
);
