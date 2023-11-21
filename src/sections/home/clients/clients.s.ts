"use client";
import styled from "styled-components";
import Image from "next/image";

export const ClientsWrap = styled.div`
  width: 100%;
`;

export const ClientsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TitlesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const SectionTitle = styled.h3`
  max-width: 640px;
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: K2D;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: 1.008px;

  span {
    color: var(--blue-400, #5f5cf1);
  }
`;

export const SectionDescription = styled.p`
  max-width: 920px;
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.576px;
`;

export const MainItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const SwiperWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

export const HeroImg = styled(Image)`
  width: 378.095px;
  height: 380px;
`;

export const SaysWrap = styled.div`
  max-width: 465px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const ClientName = styled.h4`
  width: 247px;
  color: var(--dark-green, #213d39);
  font-family: K2D;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ClientComment = styled.p`
  color: var(--dark-green, #213d39);
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ClientsImg = styled(Image)`
  width: 348px;
  height: 355px;
`;
