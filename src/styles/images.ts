const BASE_URL = process.env.BASE_URL;
interface ImagesType extends Record<string, string> {}

// image
import intro_1 from "../../public/image/img-intro-1.svg";
import intro_2 from "../../public/image/img-intro-2.svg";
import intro_3 from "../../public/image/img-intro-3.svg";
import login from "../../public/image/img-login.svg";
import error_404 from "../../public/image/img-404.svg";
import profile from "../../public/image/img-profile.svg";
import boy1 from "../../public/image/img-boy-1.svg";
import boy2 from "../../public/image/img-boy-2.svg";
import boy3 from "../../public/image/img-boy-3.svg";
import girl1 from "../../public/image/img-girl-1.svg";
import girl2 from "../../public/image/img-girl-2.svg";
import girl3 from "../../public/image/img-girl-3.svg";
import checkBoy1 from "../../public/image/img-check-boy-1.svg";
import checkBoy2 from "../../public/image/img-check-boy-2.svg";
import checkBoy3 from "../../public/image/img-check-boy-3.svg";
import checkGirl1 from "../../public/image/img-check-girl-1.svg";
import checkGirl2 from "../../public/image/img-check-girl-2.svg";
import checkGirl3 from "../../public/image/img-check-girl-3.svg";

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
  error_404: error_404,
  profile: profile,
  boy1: boy1,
  boy2: boy2,
  boy3: boy3,
  girl1: girl1,
  girl2: girl2,
  girl3: girl3,
  checkBoy1: checkBoy1,
  checkBoy2: checkBoy2,
  checkBoy3: checkBoy3,
  checkGirl1: checkGirl1,
  checkGirl2: checkGirl2,
  checkGirl3: checkGirl3,

  header_logo: header_logo,
  arrow_logo: arrow_logo,
  kakao_logo: kakao_logo,
  signup_logo: signup_logo,
};
