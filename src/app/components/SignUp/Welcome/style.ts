import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  background: var(--Common-100, #fff);
`;

export const Logo = styled.div`
  width: 110.25px;
  height: 110.25px;
  flex-shrink: 0;

  fill: linear-gradient(135deg, #a1e1ff 0.11%, #9e86fc 99.89%);
`;

export const WelcomeText = styled.div`
  display: flex;
  height: 236px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;

  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;

  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.6%;
  letter-spacing: -1.786px;
`;

export const Button = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  border: 1px solid #a1e1ff;
  background: linear-gradient(106deg, #a1e1ff 23.23%, #acfcc7 61.16%);

  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.972px;
`;
