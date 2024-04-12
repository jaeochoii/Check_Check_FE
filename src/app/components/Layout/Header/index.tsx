import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../../../../styles";
import { Head, Logo, Login_Button } from "./style";

interface HeaderProps {
  children: JSX.Element;
}

export const Header = ({ children }: HeaderProps) => (
  <>
    <Head>
      <Logo>
        <Link href={"/"}>
          <Image
            src={Images.header_logo}
            alt={"헤더로고"}
            width={200}
            height={0}
            sizes="100vw"
          />
        </Link>
      </Logo>
      <Login_Button>
        <Link href={"./login"}>로그인</Link>
      </Login_Button>
    </Head>
    {children}
  </>
);
