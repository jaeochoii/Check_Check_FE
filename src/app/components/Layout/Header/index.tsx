import * as React from "react";
import Image from "next/image";
import { Images } from "../../../../styles";
import { Head, Logo, Login_Button } from "./style";

interface HeaderProps {
  children: JSX.Element;
}

export const Header = ({ children }: HeaderProps) => (
  <div>
    <Head>
      <Logo>
        <Image
          src={Images.header_logo}
          alt={"헤더로고"}
          width={200}
          height={0}
          sizes="100vw"
        />
      </Logo>
      <Login_Button>로그인</Login_Button>
    </Head>
    {children}
  </div>
);
