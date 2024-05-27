import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 48px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 36px;
  background: var(--Common-100, #fff);
`;

export const Header = styled.div`
  align-self: stretch;

  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.6%;
  letter-spacing: -1.786px;
  background: linear-gradient(92deg, #a1e1ff -0.6%, #9e86fc 45.51%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AgreeAll = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 48px;
  border: 1px solid var(--Common-0, #000);
  background: var(--Common-100, #fff);
`;

export const AllText = styled.div`
  flex: 1 0 0;
  color: #000;
  text-align: justify;
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.552px;
`;

export const SemiLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const AgreeOne = styled.div`
  display: flex;
  padding: 24px;
  margin: 0.3%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;

  border-radius: 48px;
  border: 1px solid var(--Common-0, #000);
  background: var(--Common-100, #fff);
`;

export const AgreeOneHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const AgreeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;

  color: #000;
  text-align: justify;
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.552px;
`;

export const CheckBoxLayout = styled.div`
  display: flex;
  padding: 11px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const DivideLine = styled.div`
  width: 620px;
  height: 1px;
  background: #000;
`;

export const Text = styled.div`
  height: 206px;
  align-self: stretch;
  color: #000;
  text-align: justify;

  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;

  overflow: auto;
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid var(--Neutral-90, #49454f);
  appearance: none;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQxLjkzNzUsOC42MjVjLTAuNjY0MDYsMC4wMjM0NCAtMS4yNzM0NCwwLjM3NSAtMS42MjUsMC45Mzc1bC0xOC44MTI1LDI4Ljc4MTI1bC0xMi4xODc1LC0xMC41MzEyNWMtMC41MjM0NCwtMC41NDI5NyAtMS4zMDg1OSwtMC43NDYwOSAtMi4wMzEyNSwtMC41MTk1M2MtMC43MTg3NSwwLjIyMjY2IC0xLjI1MzkxLDAuODMyMDMgLTEuMzc4OTEsMS41NzQyMmMtMC4xMjUsMC43NDYwOSAwLjE3NTc4LDEuNDk2MDkgMC43ODUxNiwxLjk0NTMxbDEzLjkzNzUsMTIuMDYyNWMwLjQzNzUsMC4zNzEwOSAxLjAxNTYzLDAuNTM1MTYgMS41ODIwMywwLjQ1MzEzYzAuNTcwMzEsLTAuMDg1OTQgMS4wNzQyMiwtMC40MTAxNiAxLjM4NjcyLC0wLjg5MDYybDIwLjA5Mzc1LC0zMC42ODc1YzAuNDI5NjksLTAuNjI4OTEgMC40NjQ4NCwtMS40NDE0MSAwLjA5Mzc1LC0yLjEwNTQ3Yy0wLjM3MTA5LC0wLjY2MDE2IC0xLjA4NTk0LC0xLjA1NDY5IC0xLjg0Mzc1LC0xLjAxOTUzeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--Light-Blue-30, #008dcf);
  }
`;

export const NextBtn = styled.div`
  display: flex;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;

  border-radius: 48px;
  background: var(--Neutral-95, #dcdcdc);
  cursor: pointer;
`;

export const NextText = styled.div`
  color: var(--Neutral-70, var(--Neutral-70, #9b9b9b));
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%; /* 38.024px */
  letter-spacing: -0.661px;
`;
