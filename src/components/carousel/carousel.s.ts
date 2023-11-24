"use client";
import styled from "styled-components";
import Image from "next/image";

export const CarouselWrap = styled.div`
  width: 100%;
`;

export const SwiperBox = styled.div`
  max-width: 821px;
  padding: 20px 22px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);

  .swiper-button {
    margin-right: 0;
    padding: 0;
  }
`;

export const BackImage = styled(Image)`
  padding: 20px;
  width: 100%;
  height: 460px;
  object-fit: cover;
`;
