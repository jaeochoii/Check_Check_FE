import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const wave = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

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
  animation: ${fadeIn} 1s ease-in-out forwards,
    ${wave} 1s 1s ease-in-out infinite;
  animation-delay: 0.5s;
  opacity: 0;
  fill: linear-gradient(135deg, #a1e1ff 0.11%, #9e86fc 99.89%);
`;

export const WelcomeText = styled.div`
  display: flex;
  height: 236px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1.5s;

  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;

  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.6%;
  letter-spacing: -1.786px;
  opacity: 0;
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

  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1.5s;
  opacity: 0;
`;
