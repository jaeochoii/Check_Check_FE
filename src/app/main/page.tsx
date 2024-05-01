"use client";

import * as React from "react";
import { Header } from "../components/Layout/Header";
import { Main } from "../components/Main/index";

export default function MainPage(): React.JSX.Element {
  return (
    <Header>
      <Main />
    </Header>
  );
}
