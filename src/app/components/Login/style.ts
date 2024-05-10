import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Layout = styled.div`
  cursor: default;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  width: 624px;
  height: 384px;
  padding: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;

  border-radius: 48px;
  background: var(--Common-100, #fff);

  box-shadow: 0px 16px 20px 0px rgba(0, 0, 0, 0.12),
    0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const Logo = styled.div`
  width: 157.531px;
  height: 78.211px;
  flex-shrink: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  padding: 8px 14px;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 2px solid var(--Neutral-95, #dcdcdc);

  &:focus-within {
    border: 2px solid var(--Light-Blue-50, #00aeff);
  }
`;

export const InputLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const InputLayout = styled.input`
  display: flex;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  color: #000;
  font-feature-settings: "ss10" on;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
  border: none;
  outline: none;
  padding-top: 1%;

  ::placeholder {
    color: #d9d9d9;
  }
`;

export const ButtonLayout = styled.div`
  display: flex;
  width: 530px;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 48px;
  background: var(--Light-Blue-80, #a1e1ff);
`;

export const ButtonText = styled.div`
  color: var(--Common-0, var(--Common-0, #000));
  text-align: right;
  font-feature-settings: "ss10" on;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;
