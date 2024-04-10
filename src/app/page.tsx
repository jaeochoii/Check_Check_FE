"use client";

import * as React from "react";
import { HomeWrap } from "./style";
import Image from "next/image";
import { Colors, Icons, Images } from "../styles";

export default function Home(): React.JSX.Element {
  return (
    <HomeWrap>
      <div className="header">
        <div className="logo">
          <Image
            src={Images.header_logo}
            alt={"헤더로고"}
            width={200}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="login_button">로그인</div>
      </div>
      <div className="main">
        <div className="text-wrapper">
          <div className="sub_title1">자소서의 모든 것</div>
          <div className="sub_title2">
            <span className="highlight">짹짹</span>으로 스마트하게
          </div>
          <button className="button">홈페이지 바로가기</button>
        </div>
        <div className="main_image">
          <Image
            src={Images.intro_1}
            alt={"인트로1"}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
      <div className="arrow_ico">
        <Image
          src={Images.arrow_logo}
          alt={"화살표"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </HomeWrap>
  );
}
