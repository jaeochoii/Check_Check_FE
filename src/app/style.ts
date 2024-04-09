import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const HomeWrap = styled.main`
  background-color: ${Colors.White};
  height: 100vh;
  text-align: center;

  & > .main {
    display: flex;
    & > .title {
      & > .sub_title {
        margin-top: 10px;

        ${fontGenerator("22.56px", "500", "26.92px")};
        color: ${Colors.Black};
      }
    }
  }
  & > .intro_1 {
    display: flex;
    width: 100%;
    height: auto;
    position: absolute;
  }
`;
