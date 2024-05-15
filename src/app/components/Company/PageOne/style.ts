import styled from "styled-components";

interface TextInputWrapperProps {
  isFocused: boolean;
}

export const Cover = styled.div`
  cursor: default;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 101;
`;

export const LayOut = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 680px;
  height: 420px;
  padding: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transform: translate(-50%, -50%);
  gap: 36px;

  border-radius: 48px;
  background: var(--Common-100, #fff);
  z-index: 1000;

  box-shadow: 0px 16px 20px 0px rgba(0, 0, 0, 0.12),
    0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const PageIndex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const BigCircle = styled.div`
  width: 18px;
  height: 18px;
  fill: var(--Light-Blue-50, #00aeff);
`;

export const SmallCircle = styled.div`
  display: flex;
  align-items: center;
  width: 12px;
  height: 12px;
  fill: var(--Light-Blue-30, #006796);
`;

export const Header = styled.div`
  align-self: stretch;
  color: #000;

  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -1.128px;
`;

export const InputWrapper = styled.div<TextInputWrapperProps>`
  display: flex;
  padding: 8px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 36px;
  border: 2px solid var(--Neutral-95, #dcdcdc);
  background: var(--Neutral-95, #dcdcdc);
  transition: border-color 0.3s ease;

  ${(props) =>
    props.isFocused &&
    `
    border: 2px solid var(--Light-Blue-50, #00aeff);
    background: var(--Common-100, #FFF);
  `}
`;

export const InputText = styled.input`
  display: flex;
  height: 76px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  color: #000;
  font-feature-settings: "ss10" on;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;

  border: none;
  outline: none;
  background: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 28px;
    font-weight: 600;
    color: var(--Neutral-70, var(--Neutral-70, #9b9b9b));
  }
`;

export const Next = styled.div`
  display: flex;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 48px;
  background: var(--Neutral-95, #dcdcdc);

  color: var(--Neutral-70, var(--Neutral-70, #9b9b9b));
  font-feature-settings: "ss10" on;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%; /* 38.024px */
  letter-spacing: -0.661px;

  cursor: pointer;
`;
