import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main_Error_Wrapper = styled.div`
  padding-top: 12%;
  justify-content: center;
  align-items: center;
  ${fontGenerator("50px", "400", "50px")};
`;

export const Error_Image = styled.div`
  margin-top: 1.5%;
  padding-bottom: 2%;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const Sub_Error_Wrapper = styled.div`
  padding-bottom: 0.5%;
  justify-content: center;
  align-items: center;
  ${fontGenerator("16px", "100", "16px")};
`;

export const Button = styled.button`
  width: 10%;
  height: 1.8rem;
  margin-top: 1%;
  background-color: ${Colors.Main};
  color: ${Colors.White};
  border-radius: 0.3rem;
  border: 0px;
  ${fontGenerator("14px", "400", "14px")};
`;
