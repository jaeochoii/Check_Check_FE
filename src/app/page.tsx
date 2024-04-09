"use client";

import * as React from "react";
import { HomeWrap } from "./style";
import Image from "next/image";
import { Colors, Icons, Images } from "../styles";

export default function Home(): React.JSX.Element {
  return (
    <HomeWrap>
      <div className="main">
        <div className="title">
          <Image
            src={Images.intro_1}
            alt={"인트로1"}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="sub_title">백신아, 곰아워!</div>
        </div>
      </div>
    </HomeWrap>
  );
}
