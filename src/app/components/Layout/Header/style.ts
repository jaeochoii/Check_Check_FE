import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1%;
`;

export const Logo = styled.div`
  width: fit-content;
  margin-left: 11%;
`;

export const Login_Button = styled.div`
  ${fontGenerator("18px", "600", "20px")};
  margin-top: 0.2%;
  margin-right: 11%;
`;
