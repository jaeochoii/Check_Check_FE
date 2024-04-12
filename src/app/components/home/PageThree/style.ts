import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
`;

export const Text_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10%;
`;

export const Sub_Title1 = styled.div`
  ${fontGenerator("50px", "800", "70px")};
  color: ${Colors.Black};
  width: fit-content;
`;

export const Sub_Title2 = styled.div`
  ${fontGenerator("50px", "800", "70px")};
  color: ${Colors.Black};
  width: fit-content;
`;

export const Small_Text_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10%;
`;

export const Small_Title1 = styled.div`
  ${fontGenerator("25px", "600", "30px")};
  color: ${Colors.Black};
  width: fit-content;
`;

export const Main_Image = styled.div`
  justify-content: flex-end;
  height: auto;
  padding-top: 12%;
`;
