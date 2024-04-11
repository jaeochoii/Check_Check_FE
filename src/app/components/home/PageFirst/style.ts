import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const Highlight = styled.div`
  color: ${Colors.Main};
`;

export const Button = styled.button`
  width: 55%;
  height: 2.2rem;
  margin-top: 20%;
  margin-left: 20%;
  background-color: ${Colors.Main};
  color: ${Colors.White};
  border-radius: 0.3rem;
  border: 0px;
  ${fontGenerator("15px", "600", "10px")};
`;

export const Main_Image = styled.div`
  justify-content: flex-end;
  height: auto;
  padding-top: 7%;
  margin-bottom: 8%;
`;

export const Arrow_Ico = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;
