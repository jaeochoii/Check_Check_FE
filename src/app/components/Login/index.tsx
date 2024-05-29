import * as React from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineVpnKey } from "react-icons/md";
import { login } from "@/hooks/api";
import {
  Cover,
  IcoWrapper,
  InputWrapper,
  LeftDiv,
  LoginHeader,
  LoginLayout,
  LogoDiv,
  RightDiv,
  SignUpWrapper,
  SubmitBtn,
  SubmitText,
  TextDiv,
  TextInputWrapper,
} from "./style";

export const Login: React.FC = () => {
  const [inputID, setInputID] = useState<string>("");
  const [inputPW, setInputPW] = useState<string>("");

  const [isFocusedID, setIsFocusedID] = useState(false);
  const [isFocusedPW, setIsFocusedPW] = useState(false);

  const inputRefID = useRef<HTMLInputElement>(null);
  const inputRefPW = useRef<HTMLInputElement>(null);

  const handleFocusID = () => {
    setIsFocusedID(true);
  };

  const handleBlurID = () => {
    if (inputRefID.current && !inputRefID.current.value.trim()) {
      setIsFocusedID(false);
    }
  };

  const handleFocusPW = () => {
    setIsFocusedPW(true);
  };

  const handleBlurPW = () => {
    if (inputRefPW.current && !inputRefPW.current.value.trim()) {
      setIsFocusedPW(false);
    }
  };

  const handleLoginClick = async () => {
    try {
      const response = await login({ username: inputID, password: inputPW });
      console.log("Login successful:", response);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error logging in:", error.message);
      } else {
        console.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <Cover>
        <LeftDiv>
          <LogoDiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="225"
              height="156"
              viewBox="0 0 225 156"
              fill="none"
            >
              <path
                d="M24.9942 101.378C24.9942 101.982 25.113 102.58 25.3437 103.138C25.5738 103.696 25.912 104.203 26.3379 104.63C26.7639 105.057 27.2698 105.396 27.8266 105.628C28.3834 105.859 28.9805 105.977 29.5829 105.977C30.1853 105.977 30.7824 105.859 31.3386 105.628C31.8954 105.396 32.4012 105.057 32.8272 104.63C33.2539 104.203 33.5913 103.696 33.8221 103.138C34.0529 102.58 34.1716 101.982 34.1716 101.378C34.1716 100.774 34.0529 100.176 33.8221 99.6177C33.5913 99.0595 33.2539 98.5524 32.8272 98.1254C32.4012 97.6983 31.8954 97.3594 31.3386 97.1281C30.7824 96.8974 30.1853 96.7784 29.5829 96.7784C28.9805 96.7784 28.3834 96.8974 27.8266 97.1281C27.2698 97.3594 26.7639 97.6983 26.3379 98.1254C25.912 98.5524 25.5738 99.0595 25.3437 99.6177C25.113 100.176 24.9942 100.774 24.9942 101.378Z"
                fill="white"
              />
              <path
                d="M222.66 110.924C195.991 100.248 170.238 113.417 142.965 127.358C129.329 134.33 115.222 141.537 100.631 145.853C59.8556 157.921 27.3308 124.48 26.8559 123.983C25.443 122.494 23.0896 122.435 21.6017 123.844C20.1137 125.263 20.05 127.624 21.4655 129.114C22.6851 130.4 47.3984 156 82.2491 156C88.7531 156 95.6113 155.107 102.737 153.001C117.987 148.488 132.407 141.121 146.347 133.993C172.076 120.848 196.378 108.426 219.905 117.844C221.811 118.607 223.974 117.678 224.734 115.763C225.495 113.852 224.566 111.687 222.66 110.924Z"
                fill="white"
              />
              <path
                d="M67.1587 83.0905C58.4012 93.2122 54.6558 105.821 58.9829 114.882C59.6215 116.221 60.9525 117.002 62.3385 117.002C62.8766 117.002 63.422 116.885 63.9419 116.637C65.7935 115.747 66.5771 113.525 65.6915 111.664C61.3208 102.512 70.2889 86.4745 84.1456 78.6615C87.7032 76.6554 91.5104 74.574 95.5422 72.3696C118.095 60.0348 145.62 44.9784 157.608 27.7108C162.156 36.9535 168.066 57.6642 145.95 79.8343C144.496 81.2916 144.496 83.6507 145.95 85.1059C147.403 86.5585 149.755 86.5585 151.204 85.1059C157.56 78.73 161.871 72.4066 164.679 66.3354C167.505 73.11 169.85 86.0642 156.056 99.8934C154.602 101.347 154.602 103.708 156.056 105.158C156.779 105.887 157.733 106.251 158.682 106.251C159.634 106.251 160.586 105.887 161.308 105.158C185.237 81.1732 168.729 58.0287 167.939 56.9561C173.148 35.0611 160.694 18.3766 160.515 18.1446C159.722 17.1177 158.452 16.5777 157.174 16.7142C155.886 16.8534 154.761 17.653 154.209 18.8252C145.961 36.2978 116.028 52.6703 91.9759 65.8256C87.9232 68.0408 84.096 70.1363 80.4975 72.1625C77.8536 73.6541 75.3821 75.3757 73.1079 77.2613C70.4936 76.2795 64.3371 74.1322 56.8549 72.6252C54.6377 67.2963 57.4701 57.3683 63.1583 51.4679L64.115 50.4753C75.1822 39.01 89.6292 24.0403 95.6831 11.725C98.9046 17.8601 101.978 28.9199 94.2998 43.1135C93.323 44.9239 93.9932 47.1868 95.7972 48.166C97.6031 49.1478 99.8586 48.476 100.837 46.6677C115.41 19.7203 97.428 1.27098 97.2462 1.08658C96.2695 0.111938 94.8338 -0.240987 93.5182 0.166612C92.2007 0.578782 91.2199 1.68543 90.9676 3.04488C88.9208 14.0592 70.7773 32.8574 58.7743 45.2971L57.8156 46.2897C51.8073 52.5204 47.6976 62.9722 48.8904 71.3864C35.7422 69.9856 21.0858 71.8552 14.2893 84.648C11.3362 85.4953 5.50703 87.6083 1.08866 92.0373C-0.362887 93.4906 -0.362887 95.8517 1.08866 97.3043C1.81561 98.0305 2.76508 98.395 3.7169 98.395C4.66644 98.395 5.6184 98.0305 6.34494 97.3043C10.7384 92.8981 17.5121 91.5094 17.5692 91.498C18.7593 91.2653 19.7636 90.4711 20.2587 89.3621C27.9072 72.2082 56.1371 79.4792 67.1587 83.0905Z"
                fill="white"
              />
            </svg>
          </LogoDiv>
          <TextDiv>
            서류 합격까지 한 걸음 더, <br />
            짹짹과 함께하세요.
          </TextDiv>
        </LeftDiv>
        <RightDiv>
          <LoginHeader>로그인</LoginHeader>
          <LoginLayout>
            <TextInputWrapper isFocused={isFocusedID}>
              <IcoWrapper>
                <FaRegUser
                  size={28}
                  color={isFocusedID ? "#000000" : "#9B9B9B"}
                />
              </IcoWrapper>
              <InputWrapper
                ref={inputRefID}
                onFocus={handleFocusID}
                onBlur={handleBlurID}
                placeholder="아이디"
              ></InputWrapper>
            </TextInputWrapper>
            <TextInputWrapper isFocused={isFocusedPW}>
              <IcoWrapper>
                <MdOutlineVpnKey
                  size={28}
                  color={isFocusedPW ? "#000000" : "#9B9B9B"}
                />
              </IcoWrapper>
              <InputWrapper
                ref={inputRefPW}
                onFocus={handleFocusPW}
                onBlur={handleBlurPW}
                type="password"
                placeholder="비밀번호"
              ></InputWrapper>
            </TextInputWrapper>
            <SignUpWrapper>
              <Link href={"./signUp"}>회원가입</Link>
            </SignUpWrapper>
          </LoginLayout>
          <SubmitBtn>
            <SubmitText onClick={handleLoginClick}>로그인</SubmitText>
          </SubmitBtn>
        </RightDiv>
      </Cover>
    </>
  );
};
