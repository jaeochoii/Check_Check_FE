"use client";

import * as React from "react";
import { MainLay } from "./style";
import { LeftBarPage } from "../components/Main/LeftBar";
import { RightBarPage } from "../components/Main/RightBar";
import { ContentsPage } from "../components/Main/Contents";

export default function MainPage(): React.JSX.Element {
  return (
    <MainLay>
      <LeftBarPage />
      <ContentsPage />
      <RightBarPage />
    </MainLay>
  );
}
