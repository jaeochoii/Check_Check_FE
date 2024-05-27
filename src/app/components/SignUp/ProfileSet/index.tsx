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
} from "./style";

interface props {
  onNext: () => void;
}

export const ProfileSetPage: React.FC<props> = ({ onNext }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <Layout>
        <Header>
          당신의 아바타를 설정해주세요. <br />
          아참, 닉네임에 개인정보가 드러나지 않도록 유의해주세요.
        </Header>
        <AvatarLayout>
          <AvatarEach>
            <Image src={Images.boy1} alt={"남1"} />
          </AvatarEach>
          <AvatarEach>
            <Image src={Images.girl1} alt={"여1"} />
          </AvatarEach>
          <AvatarEach>
            <Image src={Images.boy2} alt={"남2"} />
          </AvatarEach>
          <AvatarEach>
            <Image src={Images.girl2} alt={"여2"} />
          </AvatarEach>
          <AvatarEach>
            <Image src={Images.boy3} alt={"남3"} />
          </AvatarEach>
          <AvatarEach>
            <Image src={Images.girl3} alt={"여3"} />
          </AvatarEach>
        </AvatarLayout>
        <TextInputLayer>
          <TextInput
            placeholder="닉네임"
            value={inputText}
            onChange={handleInputChange}
          ></TextInput>
        </TextInputLayer>
        <NextBtn
          onClick={onNext}
          style={{
            backgroundColor: inputText ? "var(--Light-Blue-80, #A1E1FF)" : "",
          }}
        >
          <NextText
            style={{
              color: inputText ? "var(--Common-0, #000)" : "",
            }}
          >
            다음
          </NextText>
        </NextBtn>
      </Layout>
    </>
  );
};
