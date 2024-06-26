import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3%;
`;

export const Text_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9%;
`;

export const Sub_Title1 = styled.div`
  ${fontGenerator("50px", "800", "70px")};
  color: ${Colors.Black};
  width: fit-content;
  margin-bottom: 2%;
`;

export const Sub_Title2 = styled.div`
  ${fontGenerator("50px", "800", "70px")};
  color: ${Colors.Black};
  width: fit-content;
`;

export const Button = styled.button`
  width: 280px;
  height: 47px;
  margin-top: 20%;
  margin-left: 20%;
  color: ${Colors.White};
  border-radius: 10px;
  background: var(--Light-Blue-50, #00aeff);
  border: 0px;
  ${fontGenerator("20px", "700", "10px")};
`;

export const Main_Image = styled.div`
  justify-content: flex-end;
  height: auto;
  padding-top: 12%;
  margin-right: 9%;
`;

const moveAnimation = keyframes`
  0% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(15px) translateX(0px);
  }
  50% {
    transform: translateY(30px) translateX(0px);
  }
  75% {
    transform: translateY(15px) translateX(0px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`;

export const Arrow_Ico = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 3.5%;
  animation: ${moveAnimation} 1s linear infinite;
`;
