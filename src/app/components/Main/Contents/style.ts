import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Contents = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  border-right: 1px solid #e5e5e9;
  border-left: 1px solid #e5e5e9;
  background: #fff;
`;

export const Company = styled.div`
  align-self: stretch;
  display: flex;
`;

export const CompanyLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 1%;
`;

export const CompanyName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: left;
  font-feature-settings: "ss10" on;

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const Questions = styled.div`
  align-self: stretch;
  color: #000;
  text-align: center;
  font-feature-settings: "ss10" on;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;

export const Divider = styled.div`
  width: 744px;
  height: 1px;
  background: #1428a0;
`;

export const InputAnswer = styled.textarea`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Common-100, #fff);
  text-align: left;

  color: var(--Common-0, var(--Common-0, #000));
  font-feature-settings: "ss10" on;
  overflow-wrap: break-word;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.091px;

  outline: none;
  border: none;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const CountWords = styled.div`
  align-self: stretch;
  color: var(--Neutral-80, var(--Neutral-80, #b0b0b0));
  text-align: right;
  font-feature-settings: "ss10" on;

  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 127.3%;
  letter-spacing: 0.342px;

  .currentWords {
    color: var(--Additional-40, var(--Green-40, #009632));
  }

  .overCurrentWords {
    color: var(--Error-40, var(--Red-40, #e52222));
  }
`;

export const Logo = styled.div`
  width: 157px;
  height: 108px;
  padding-top: 40%;
`;

export const EmptyText = styled.div`
  align-self: stretch;
  color: var(--Common-0, var(--Common-0, #000));
  text-align: center;

  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;

  padding-top: 15%;
`;
