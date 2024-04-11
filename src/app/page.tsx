"use client";

import * as React from "react";
import { HomeWrap } from "./style";
import { Header } from "./components/Layout/Header";
import { PageFirst } from "./components/home/PageFirst";

export default function Home(): React.JSX.Element {
  return (
    <HomeWrap>
      <Header>
        <PageFirst />
      </Header>
    </HomeWrap>
  );
}
