import styled from "styled-components";

export const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 72px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 48px;
  background: var(--Common-100, #fff);
`;

export const Header = styled.div`
  align-self: stretch;
  text-align: center;

  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -1.128px;
  background: linear-gradient(270deg, #a1e1ff 0%, #9e86fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 48px 48px 0px 0px;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const EachResult = styled.div`
  display: flex;
  padding: 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 48px;
  border: 1px solid #000;
  background: #fff;
`;

export const EachHeader = styled.div`
  color: var(--Common-0, var(--Common-0, #000));

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  letter-spacing: -1.128px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  padding: 14px;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  border: 1px solid #a1e1ff;
  background: linear-gradient(106deg, #a1e1ff 23.23%, #acfcc7 61.16%);

  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;

  cursor: pointer;
`;
