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

interface ImageData {
  src: string;
  alt: string;
}

const MenImages: ImageData[] = [
  { src: Images.boy1, alt: "남1" },
  { src: Images.boy2, alt: "남2" },
  { src: Images.boy3, alt: "남3" },
];

const WomenImages: ImageData[] = [
  { src: Images.girl1, alt: "여1" },
  { src: Images.girl2, alt: "여2" },
  { src: Images.girl3, alt: "여3" },
];

const CheckMenImages: ImageData[] = [
  { src: Images.checkBoy1, alt: "남1" },
  { src: Images.checkBoy2, alt: "남2" },
  { src: Images.checkBoy3, alt: "남3" },
];

const CheckWomenImages: ImageData[] = [
  { src: Images.checkGirl1, alt: "여1" },
  { src: Images.checkGirl2, alt: "여2" },
  { src: Images.checkGirl3, alt: "여3" },
];

export const ProfileSetPage: React.FC<props> = ({ onNext }) => {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputRePW, setInputRePW] = useState("");
  const [inputName, setInputName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<ImageData | null>(null);
  const [selectedMenIndex, setSelectedMenIndex] = useState<number | null>(null);
  const [selectedWomenIndex, setSelectedWomenIndex] = useState<number | null>(
    null
  );
  const [menImages, setMenImages] = useState<ImageData[]>(MenImages);
  const [womenImages, setWomenImages] = useState<ImageData[]>(WomenImages);
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

  const handleAvatarClick = (
    src: string,
    alt: string,
    isMen: boolean,
    index: number
  ) => {
    if (isMen) {
      setSelectedMenIndex(index);

      const newMenImages = menImages.map((image, i) =>
        i === index ? CheckMenImages[index] : MenImages[i]
      );
      setMenImages(newMenImages);

      if (selectedWomenIndex !== null) {
        const newWomenImages = womenImages.map((image, i) =>
          i === selectedWomenIndex ? WomenImages[selectedWomenIndex] : image
        );
        setWomenImages(newWomenImages);
        setSelectedWomenIndex(null);
      }
    } else {
      setSelectedWomenIndex(index);

      const newWomenImages = womenImages.map((image, i) =>
        i === index ? CheckWomenImages[index] : WomenImages[i]
      );
      setWomenImages(newWomenImages);

      if (selectedMenIndex !== null) {
        const newMenImages = menImages.map((image, i) =>
          i === selectedMenIndex ? MenImages[selectedMenIndex] : image
        );
        setMenImages(newMenImages);
        setSelectedMenIndex(null);
      }
    }
  };

  const arePasswordsMatching = () => {
    return inputPW === inputRePW;
  };

  const isFormComplete = () => {
    return (
      inputID &&
      inputPW &&
      inputRePW &&
      inputName &&
      (setSelectedMenIndex || setSelectedWomenIndex)
    );
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
              {menImages.map((avatar, index) => (
                <AvatarEach
                  key={index}
                  onClick={() =>
                    handleAvatarClick(avatar.src, avatar.alt, true, index)
                  }
                >
                  <Image src={avatar.src} alt={avatar.alt} />
                </AvatarEach>
              ))}
            </MenLayout>
            <WomenLayout>
              {womenImages.map((avatar, index) => (
                <AvatarEach
                  key={index}
                  onClick={() =>
                    handleAvatarClick(avatar.src, avatar.alt, false, index)
                  }
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
                inputID && inputPW && inputRePW && inputName
                  ? "var(--Light-Blue-80, #A1E1FF)"
                  : "",
            }}
          >
            <NextText
              style={{
                color:
                  inputID && inputPW && inputRePW && inputName
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
