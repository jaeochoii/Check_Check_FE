import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const HomeWrap = styled.main`
  background-color: ${Colors.White};
  height: 100vh;

  & > .main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > .text-wrapper {
      display: flex;
      flex-direction: column;
      & > .sub_title1 {
        ${fontGenerator("50px", "800", "70px")};
        color: ${Colors.Black};
        width: fit-content;
      }
      & > .sub_title2 {
        ${fontGenerator("50px", "800", "70px")};
        color: ${Colors.Black};
        width: fit-content;
        & > .highlight {
          color: ${Colors.Main};
        }
      }
      & > .button {
        width: 60%;
        height: 2.2rem;
        margin-left: 20%;
        background-color: ${Colors.Main};
        color: ${Colors.White};
        border-radius: 0.3rem;
        border: 0px;
        margin-top: 15%;
        ${fontGenerator("15px", "600", "10px")};
      }
    }
    & > .main_image {
      justify-content: flex-end;
      height: auto;
      padding-top: 7%;
    }
  }
`;
