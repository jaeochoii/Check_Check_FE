"use client";

import * as React from "react";
import { Header } from "../components/Layout/Header";
import { Login } from "../components/Login/index";

export default function LogIn(): React.JSX.Element {
  return (
    <Header>
      <Login />
    </Header>
  );
}
