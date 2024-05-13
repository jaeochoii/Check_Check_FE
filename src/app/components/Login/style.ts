import styled from "@emotion/styled";

interface TextInputWrapperProps {
  isFocused: boolean;
}

export const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 72px;
  justify-content: center;
  align-items: center;
  gap: 72px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 100%
    ),
    linear-gradient(294deg, #9e86fc 0%, #7df5a5 100%);
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 36px;
  margin-right: 7%;
  flex: 1 0 0;
  align-self: stretch;
`;

export const LogoDiv = styled.div`
  width: 225px;
  height: 156px;
  fill: var(--Common-100, #fff);
`;

export const TextDiv = styled.div`
  align-self: stretch;
  color: var(--Primary-99, var(--Light-Blue-99, #f7fdff));

  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.6%;
  letter-spacing: -1.786px;
`;

export const RightDiv = styled.div`
  display: flex;
  padding: 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 24px;
  background: var(--Common-100, #fff);
`;

export const LoginHeader = styled.div`
  align-self: stretch;
  color: var(--Common-0, var(--Common-0, #000));

  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.6%;
  letter-spacing: -1.786px;
`;

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

export const TextInputWrapper = styled.div<TextInputWrapperProps>`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 24px;
  border: 2px solid var(--Neutral-95, #dcdcdc);
  transition: border-color 0.3s ease; // transition 효과를 추가하여 부드러운 변화를 줌

  ${(props) =>
    props.isFocused &&
    `
    border: 2px solid var(--Light-Blue-50, #00aeff);
  `}
`;

export const IcoWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.input`
  display: flex;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;

  color: #000;
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;

  border: none;
  outline: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: var(--Neutral-70, var(--Neutral-70, #9b9b9b));
  }
`;

export const SignUpWrapper = styled.div`
  color: var(--Neutral-50, var(--Neutral-50, #737373));
  text-align: center;

  font-style: normal;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;

  cursor: pointer;
`;

export const SubmitBtn = styled.div`
  display: flex;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 48px;
  background: var(--Light-Blue-80, #a1e1ff);
  cursor: pointer;
`;

export const SubmitText = styled.div`
  color: var(--Common-0, var(--Common-0, #000));
  text-align: right;
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;
