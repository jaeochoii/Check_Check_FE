import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/styles";
import {
  Header,
  Layout,
  ImageLayout,
  AvatarEach,
  TextLayout,
  TextInput,
  SaveText,
  SaveLayout,
  OutLayout,
  OutText,
  BtnLayout,
} from "./style";
import { SaveBtn } from "../Main/RightBar/style";

interface ImageData {
  src: string;
  alt: string;
}

const BeforeImages: ImageData[] = [
  { src: Images.boy1, alt: "남1" },
  { src: Images.girl1, alt: "여1" },
  { src: Images.boy2, alt: "남2" },
  { src: Images.girl2, alt: "여2" },
  { src: Images.boy3, alt: "남3" },
  { src: Images.girl3, alt: "여3" },
];

const CheckImages: ImageData[] = [
  { src: Images.checkBoy1, alt: "남1" },
  { src: Images.checkGirl1, alt: "여1" },
  { src: Images.checkBoy2, alt: "남2" },
  { src: Images.checkGirl2, alt: "여2" },
  { src: Images.checkBoy3, alt: "남3" },
  { src: Images.checkGirl3, alt: "여3" },
];

export const ProfileSettingPage: React.FC = () => {
  const [Images, setImages] = useState<ImageData[]>(BeforeImages);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAvatarClick = (src: string, alt: string, index: number) => {
    setSelectedIndex(index);

    const newImages = Images.map((image, i) =>
      i === index ? CheckImages[index] : BeforeImages[i]
    );
    setImages(newImages);
  };

  return (
    <>
      <Layout>
        <Header>닉네임의 정보를 수정할 수 있어요.</Header>
        <ImageLayout>
          {Images.map((avatar, index) => (
            <AvatarEach
              key={index}
              onClick={() => handleAvatarClick(avatar.src, avatar.alt, index)}
            >
              <Image src={avatar.src} alt={avatar.alt} />
            </AvatarEach>
          ))}
        </ImageLayout>
        <TextLayout>
          <TextInput placeholder="닉네임" />
        </TextLayout>
        <BtnLayout>
          <SaveLayout>
            <SaveText>
              <Link href={"../../main"}>저장</Link>
            </SaveText>
          </SaveLayout>
          <OutLayout>
            <OutText>회원탈퇴</OutText>
          </OutLayout>
        </BtnLayout>
      </Layout>
    </>
  );
};
