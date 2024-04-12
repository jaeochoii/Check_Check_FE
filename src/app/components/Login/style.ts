import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Login_Image = styled.div`
  margin-top: 10%;
  padding-bottom: 2%;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const Login_Wrapper = styled.button`
  width: 270px;
  height: 35px;
  ${fontGenerator("13px", "500", "13px")};
  margin-top: 0.5%;
  background-color: ${Colors.Kakao};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: fit-content;
  margin-top: 1%;
  margin-right: 3%;
`;
