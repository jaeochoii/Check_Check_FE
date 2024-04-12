const BASE_URL = process.env.BASE_URL;
interface ImagesType extends Record<string, string> {}

// image
import intro_1 from "../../public/image/img-intro-1.svg";
import intro_2 from "../../public/image/img-intro-2.svg";
import intro_3 from "../../public/image/img-intro-3.svg";
import login from "../../public/image/img-login.svg";

// made icons
import header_logo from "../../public/ico/ico-logo.svg";
import arrow_logo from "../../public/ico/ico-arrow.svg";
import kakao_logo from "../../public/ico/ico-kakao.svg";
import signup_logo from "../../public/ico/ico-signup.svg";

export const Images: ImagesType = {
  intro_1: intro_1,
  intro_2: intro_2,
  intro_3: intro_3,
  login: login,

  header_logo: header_logo,
  arrow_logo: arrow_logo,
  kakao_logo: kakao_logo,
  signup_logo: signup_logo,
};
