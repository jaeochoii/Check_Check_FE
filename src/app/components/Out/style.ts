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
  width: 560px;
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

export const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

export const HeaderLayout = styled.div`
  align-self: stretch;
  color: #000;

  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -1.128px;
`;

export const ContentLayout = styled.div`
  align-self: stretch;

  color: #000;
  font-feature-settings: "ss10" on;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;

export const OutLayout = styled.div`
  display: flex;
  padding: 20px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 48px;
  background: var(--Red-90, #fed5d5);
  margin-top: 5%;
  cursor: pointer;
`;

export const OutText = styled.div`
  color: var(--Error-40, var(--Red-40, #e52222));
  font-feature-settings: "ss10" on;

  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;
