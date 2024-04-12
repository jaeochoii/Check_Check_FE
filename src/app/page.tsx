"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { HomeWrap } from "./style";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Header } from "./components/Layout/Header";
import { PageFirst } from "./components/home/PageFirst";
import { PageSecond } from "./components/home/PageSecond";
import { PageThree } from "./components/home/PageThree";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100vh;
`;
const StyledSwiperSlide = styled(SwiperSlide)``;

export default function Home(): React.JSX.Element {
  SwiperCore.use([Autoplay]);
  return (
    <Header>
      <StyledSwiper
        speed={1000}
        className="mySwiper"
        direction={"vertical"}
        spaceBetween={30}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // 페이지 표시기
        }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        modules={[Mousewheel, Pagination]}
        onSlideChange={(swiper: any) => console.log(swiper)}
        onSwiper={(swiper: any) => swiper.mousewheel.enable()}
      >
        <HomeWrap>
          <StyledSwiperSlide>
            {({ isActive }) => isActive && <PageFirst />}
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            {({ isActive }) => isActive && <PageSecond />}
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            {({ isActive }) => isActive && <PageThree />}
          </StyledSwiperSlide>
        </HomeWrap>
      </StyledSwiper>
    </Header>
  );
}
