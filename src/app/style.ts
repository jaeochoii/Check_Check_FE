import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const HomeWrap = styled.main`
  background-color: ${Colors.White};
  height: 100vh;

  & > .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1%;

    & > .logo {
      width: fit-content;
      margin-left: 11%;
    }
    & > .login_button {
      ${fontGenerator("18px", "600", "20px")};
      margin-top: 0.2%;
      margin-right: 11%;
    }
  }

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
        width: 55%;
        height: 2.2rem;
        margin-top: 20%;
        margin-left: 20%;
        background-color: ${Colors.Main};
        color: ${Colors.White};
        border-radius: 0.3rem;
        border: 0px;
        ${fontGenerator("15px", "600", "10px")};
      }
    }

    & > .main_image {
      justify-content: flex-end;
      height: auto;
      padding-top: 7%;
      margin-bottom: 8%;
    }
  }

  & > .arrow_ico {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;
