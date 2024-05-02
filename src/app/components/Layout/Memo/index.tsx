import * as React from "react";
import { useState } from "react";
import { MemoTable, CheckBox, InputMemo } from "./style";

interface MemoLayoutProps {
  onDelete: () => void;
  onCheckboxChange: (isChecked: boolean) => void;
}

export const MemoLayout: React.FC<MemoLayoutProps> = ({
  onDelete,
  onCheckboxChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onCheckboxChange(checked);
  };

  return (
    <>
      <MemoTable>
        <CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <InputMemo />
      </MemoTable>
    </>
  );
};
