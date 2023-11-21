"use client";
import React from "react";
import { Container } from "@/styles";
import {
  ClientComment,
  ClientName,
  ClientsImg,
  ClientsSection,
  ClientsWrap,
  HeroImg,
  MainItems,
  SaysWrap,
  SectionDescription,
  SectionTitle,
  SwiperWrap,
  TitlesWrap,
} from "./clients.s";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Hero from "@/assets/trash/client-hero.png";
import ClientsGroup from "@/assets/trash/client-group.png";

// const clients = [{ label: "Paintball", img: "", link: "/" }];

export const Clients = () => {
  return (
    <ClientsWrap>
      <Container>
        <ClientsSection>
          <TitlesWrap>
            <SectionTitle>
              What our happy <span>client say</span>
            </SectionTitle>
            <SectionDescription>
              Several selected clients, who already believe in our service.
            </SectionDescription>
          </TitlesWrap>
          <MainItems>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <SwiperWrap>
                  <HeroImg
                    src={Hero}
                    width={370.095}
                    height={380}
                    alt="heroImg"
                  />
                  <SaysWrap>
                    <ClientName>Matthew Paul</ClientName>
                    <ClientComment>
                      Perfect, very good job! Thank you for the amazing design
                      and work. Really impressed with the high quality and quick
                      turnaround time. Highly recommend.
                    </ClientComment>
                  </SaysWrap>
                </SwiperWrap>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperWrap>
                  <HeroImg
                    src={Hero}
                    width={370.095}
                    height={380}
                    alt="heroImg"
                  />
                  <SaysWrap>
                    <ClientName>Matthew Paul</ClientName>
                    <ClientComment>
                      Perfect, very good job! Thank you for the amazing design
                      and work. Really impressed with the high quality and quick
                      turnaround time. Highly recommend.
                    </ClientComment>
                  </SaysWrap>
                </SwiperWrap>
              </SwiperSlide>
            </Swiper>
            <ClientsImg
              src={ClientsGroup}
              width={348}
              height={355}
              alt="clients-img"
            />
          </MainItems>
        </ClientsSection>
      </Container>
    </ClientsWrap>
  );
};
