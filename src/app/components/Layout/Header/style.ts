import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1%;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled.div`
  width: fit-content;
  margin-left: 9%;
  margin-top: 1%;
`;

export const Login_Button = styled.div`
  ${fontGenerator("18px", "600", "20px")};
  margin-right: 9%;
`;
