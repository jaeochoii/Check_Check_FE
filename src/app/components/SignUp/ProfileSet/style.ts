import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 48px;
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

export const AvatarLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
`;

export const AvatarEach = styled.div`
  width: 144px;
  height: 144px;
`;

export const TextInputLayer = styled.div`
  display: flex;
  padding: 8px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 36px;
  border: 1px solid var(--Light-Blue-50, #00aeff);
  background: var(--Neutral-99, #f7f7f7);
`;

export const TextInput = styled.input`
  display: flex;
  height: 76px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  color: #000;
  font-feature-settings: "ss10" on;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;

  border: none;
  outline: none;
  background: none;

  &::placeholder {
    font-size: 24px;
    font-weight: 600;
    color: var(--Neutral-70, var(--Neutral-70, #9b9b9b));
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
