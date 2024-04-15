import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "../../../styles";
import {
  Main,
  Error_Image,
  Main_Error_Wrapper,
  Sub_Error_Wrapper,
  Button,
} from "./style";

export const Error = () => (
  <>
    <Main>
      <Main_Error_Wrapper>404 ERROR</Main_Error_Wrapper>
      <Error_Image>
        <Image
          src={Images.error_404}
          alt={"인트로1"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Error_Image>
      <Sub_Error_Wrapper>
        죄송합니다. 페이지를 찾을 수 없습니다.
      </Sub_Error_Wrapper>
      <Sub_Error_Wrapper>존재하지 않는 주소를 입력하셨거나,</Sub_Error_Wrapper>
      <Sub_Error_Wrapper>
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </Sub_Error_Wrapper>
      <Button>
        <Link href={"./"}>홈페이지로 이동</Link>
      </Button>
    </Main>
  </>
);
