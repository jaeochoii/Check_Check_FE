import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
`;

export const Text_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 2.5%;
  padding-bottom: 15%;
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
  align-items: end;
  margin-top: 10%;
`;

export const Small_Title1 = styled.div`
  ${fontGenerator("25px", "500", "30px")};
  color: ${Colors.Black};
  width: fit-content;
`;

export const Small_Title2 = styled.div`
  ${fontGenerator("25px", "500", "30px")};
  color: ${Colors.Black};
  width: fit-content;
`;

export const Main_Image = styled.div`
  justify-content: flex-start;
  height: auto;
  margin-top: 12%;
  padding-left: 3%;
`;

export const Arrow_Ico = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;
