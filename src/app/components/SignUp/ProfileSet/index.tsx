import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Images } from "../../../../styles";
import {
  Layout,
  Header,
  NextBtn,
  NextText,
  AvatarLayout,
  AvatarEach,
  TextInputLayer,
  TextInput,
  LeftLayout,
  InputText,
  InputTextLayout,
  RightLayout,
  RightHeader,
  MenLayout,
  WomenLayout,
  ErrorMessage,
  BtnWrapper,
} from "./style";

interface props {
  onNext: (nickname: string) => void;
}

const MenImages = [
  { src: Images.boy1, alt: "남1" },
  { src: Images.boy2, alt: "남2" },
  { src: Images.boy3, alt: "남3" },
];

const WomenImages = [
  { src: Images.girl1, alt: "여1" },
  { src: Images.girl2, alt: "여2" },
  { src: Images.girl3, alt: "여3" },
];

export const ProfileSetPage: React.FC<props> = ({ onNext }) => {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputRePW, setInputRePW] = useState("");
  const [inputName, setInputName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);

  const handleIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputID(e.target.value);
  };
  const handlePWChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPW(e.target.value);
  };
  const handleRePWChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRePW(e.target.value);
    setIsPasswordMismatch(inputPW !== e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleAvatarClick = (src: string) => {
    setSelectedAvatar(src);
  };

  const arePasswordsMatching = () => {
    return inputPW === inputRePW;
  };

  const isFormComplete = () => {
    return inputID && inputPW && inputRePW && inputName && selectedAvatar;
  };

  const handleNextClick = () => {
    if (!arePasswordsMatching()) {
      setIsPasswordMismatch(true);
      return;
    }

    if (!isFormComplete()) {
      setIsFormIncomplete(true);
      return;
    }

    onNext(inputName);
  };

  return (
    <>
      <Layout>
        <LeftLayout>
          <Header>
            아이디와 비밀번호를 <br /> 설정해주세요.
          </Header>
          <InputTextLayout>
            <InputText
              placeholder="아이디"
              value={inputID}
              onChange={handleIDChange}
            />
          </InputTextLayout>
          <InputTextLayout>
            <InputText
              type="password"
              placeholder="비밀번호"
              value={inputPW}
              onChange={handlePWChange}
            />
          </InputTextLayout>
          <BtnWrapper>
            <InputTextLayout>
              <InputText
                type="password"
                placeholder="비밀번호 확인"
                value={inputRePW}
                onChange={handleRePWChange}
              />
            </InputTextLayout>
            {isPasswordMismatch && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </BtnWrapper>
        </LeftLayout>
        <RightLayout>
          <RightHeader>
            당신을 잘 표현할 수 있는 <br />
            아바타와 닉네임을 설정해주세요.
          </RightHeader>
          <AvatarLayout>
            <MenLayout>
              {MenImages.map((avatar, index) => (
                <AvatarEach
                  key={index}
                  isSelected={selectedAvatar === avatar.src}
                  onClick={() => handleAvatarClick(avatar.src)}
                >
                  <Image src={avatar.src} alt={avatar.alt} />
                </AvatarEach>
              ))}
            </MenLayout>
            <WomenLayout>
              {WomenImages.map((avatar, index) => (
                <AvatarEach
                  key={index}
                  isSelected={selectedAvatar === avatar.src}
                  onClick={() => handleAvatarClick(avatar.src)}
                >
                  <Image src={avatar.src} alt={avatar.alt} />
                </AvatarEach>
              ))}
            </WomenLayout>
          </AvatarLayout>
          <TextInputLayer>
            <TextInput
              placeholder="닉네임"
              value={inputName}
              onChange={handleNameChange}
            ></TextInput>
          </TextInputLayer>
          <NextBtn
            onClick={handleNextClick}
            style={{
              backgroundColor:
                inputID && inputPW && inputRePW && inputName && selectedAvatar
                  ? "var(--Light-Blue-80, #A1E1FF)"
                  : "",
            }}
          >
            <NextText
              style={{
                color:
                  inputID && inputPW && inputRePW && inputName && selectedAvatar
                    ? "var(--Common-0, #000)"
                    : "",
              }}
            >
              다음
            </NextText>
          </NextBtn>
        </RightLayout>
      </Layout>
    </>
  );
};
