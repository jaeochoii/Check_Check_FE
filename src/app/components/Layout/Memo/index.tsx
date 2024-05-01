import * as React from "react";
import { MemoTable, CheckBox, InputMemo } from "./style";

export const MemoLayout = () => (
  <>
    <MemoTable>
      <CheckBox type="checkbox" />
      <InputMemo />
    </MemoTable>
  </>
);
