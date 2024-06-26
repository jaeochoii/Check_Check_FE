"use client";

import * as React from "react";
import { Header } from "../components/Layout/Header";
import { Error } from "../components/Error";

export default function ErrorPage(): React.JSX.Element {
  return (
    <Header>
      <Error />
    </Header>
  );
}
