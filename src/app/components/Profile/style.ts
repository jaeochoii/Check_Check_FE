import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 5%;
  padding-bottom: 5%;
  padding-left: 48px;
  padding-right: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 36px;
  background: var(--Common-100, #fff);
`;

export const Header = styled.div`
  align-self: stretch;
  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;

  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.6%; /* 72.016px */
  letter-spacing: -1.786px;
`;

export const ImageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
`;

export const AvatarEach = styled.div`
  width: 144px;
  height: 144px;
  cursor: pointer;
  transition: opacity 0.3s;
`;

export const TextLayout = styled.div`
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

  font-size: 28px;
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

export const BtnLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  border-radius: 48px;
`;

export const SaveLayout = styled.div`
  display: flex;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 48px;
  background: var(--Light-Blue-80, #a1e1ff);
  cursor: pointer;
`;

export const SaveText = styled.div`
  color: var(--Common-0, var(--Common-0, #000));
  font-feature-settings: "ss10" on;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;

export const OutLayout = styled.div`
  display: flex;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 48px;
  background: var(--Red-90, #fed5d5);
  cursor: pointer;
`;

export const OutText = styled.div`
  color: var(--Error-40, var(--Red-40, #e52222));
  font-feature-settings: "ss10" on;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;
