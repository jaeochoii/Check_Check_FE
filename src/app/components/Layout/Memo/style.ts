import styled from "@emotion/styled";

export const MemoTable = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  border-radius: 8px;
  background: var(--Common-100, #fff);

  /* Shadow/Normal */
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid var(--Neutral-90, #c4c4c4);
  appearance: none;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQxLjkzNzUsOC42MjVjLTAuNjY0MDYsMC4wMjM0NCAtMS4yNzM0NCwwLjM3NSAtMS42MjUsMC45Mzc1bC0xOC44MTI1LDI4Ljc4MTI1bC0xMi4xODc1LC0xMC41MzEyNWMtMC41MjM0NCwtMC41NDI5NyAtMS4zMDg1OSwtMC43NDYwOSAtMi4wMzEyNSwtMC41MTk1M2MtMC43MTg3NSwwLjIyMjY2IC0xLjI1MzkxLDAuODMyMDMgLTEuMzc4OTEsMS41NzQyMmMtMC4xMjUsMC43NDYwOSAwLjE3NTc4LDEuNDk2MDkgMC43ODUxNiwxLjk0NTMxbDEzLjkzNzUsMTIuMDYyNWMwLjQzNzUsMC4zNzEwOSAxLjAxNTYzLDAuNTM1MTYgMS41ODIwMywwLjQ1MzEzYzAuNTcwMzEsLTAuMDg1OTQgMS4wNzQyMiwtMC40MTAxNiAxLjM4NjcyLC0wLjg5MDYybDIwLjA5Mzc1LC0zMC42ODc1YzAuNDI5NjksLTAuNjI4OTEgMC40NjQ4NCwtMS40NDE0MSAwLjA5Mzc1LC0yLjEwNTQ3Yy0wLjM3MTA5LC0wLjY2MDE2IC0xLjA4NTk0LC0xLjA1NDY5IC0xLjg0Mzc1LC0xLjAxOTUzeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--Light-Blue-30, #006796);
  }
`;

export const InputMemo = styled.input`
  flex: 1 0 0;
  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;
  font-feature-settings: "ss10" on;

  border: none;
  outline: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.091px;
`;
