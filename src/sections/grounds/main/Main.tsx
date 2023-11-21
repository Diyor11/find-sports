import React from "react";
import { Column, Container } from "@/styles";

import {
  ContactAvatar,
  ContactBox,
  ContactButton,
  ContactName,
  ContactNames,
  ContactTel,
  Description,
  FlexWrap,
  HeaderTitle,
  InfoBox,
  LSpan,
  LTitle,
  LocationBox,
  LocationTitles,
  MainContent,
  MainTitle,
  MainWrap,
  PalaceHeader,
  PalaceInfoBox,
  PalaceInfoTitle,
  PlaceInfo,
  PriceTitle,
  RateNum,
  Titel,
} from "./main.s";
import { Carousel } from "@/components";

import { ShareIcon } from "@/assets/icons/ShareIcon";
import { HeartIcon } from "@/assets/icons/HeartIcon";
import { StarIcon } from "@/assets/icons/StarIcon";
import { StadionIcon } from "@/assets/icons/StadionIcon";
import { BathromIcon } from "@/assets/icons/BathromIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { LocationIcon } from "@/assets/icons";
import Avatar from "@/assets/trash/avatar-conect.png";
import { ChroomIcon } from "@/assets/icons/ChroomsIcon";
import { CarParkingIcon } from "@/assets/icons/CarParkingIcon";
import { TirBunesIcon } from "@/assets/icons/TirbunesIcon";
import { LightIcon } from "@/assets/icons/LightIcon";
import { InverTonyIcon } from "@/assets/icons/InvertonyIcon";

const datas = [
  { icon: <BathromIcon />, label: "Душ", checedIcon: <CheckIcon /> },
  { icon: <ChroomIcon />, label: "Раздевалки", checedIcon: <CheckIcon /> },
  { icon: <LightIcon />, label: "Освещение", checedIcon: <CheckIcon /> },
  {
    icon: <CarParkingIcon />,
    label: "Парковка — бесплатная",
    checedIcon: <CheckIcon />,
  },
  { icon: <TirBunesIcon />, label: "Трибуны", checedIcon: <CheckIcon /> },
  { icon: <InverTonyIcon />, label: "Инвентарь", checedIcon: <CheckIcon /> },
];

export const Main = () => {
  return (
    <MainWrap>
      <Container>
        <FlexWrap>
          <Column gap={16}>
            <Carousel />
            <InfoBox>
              <Column content={"space-between"} gap={420} items={"center"}>
                <Column direction={"column"} gap={8}>
                  <Titel>Зал единоборств "Золотой Дракон"</Titel>
                  <Column items={"center"} gap={10}>
                    <RateNum>4.5</RateNum>
                    <Column items={"center"}>
                      <StarIcon width="12px" height="12px" />
                      <StarIcon width="12px" height="12px" />
                      <StarIcon width="12px" height="12px" />
                      <StarIcon width="12px" height="12px" />
                      <StarIcon width="12px" height="12px" />
                    </Column>
                  </Column>
                </Column>
                <Column gap={10} items={"center"}>
                  <ShareIcon />
                  <HeartIcon />
                </Column>
              </Column>
              <PriceTitle>200 000 sum</PriceTitle>
              <Description>
                Спортивный зал 140 м2 в 5-ти минутах пешком от м. Авиамоторная.
                Зал отлично подойдет для проведения индивидуальных и групповых
                занятий самбо, дзюдо, йогой, восточными практиками, для
                организации семинаров, мастер-классов. Мягкое покрытие, душевые,
                раздевалки, туалеты. Есть необходимый инвентарь для занятий.
                Спортивный зал 173 м2 в 5-ти минутах пешком от м. Авиамоторная.
                Зал отлично подойдет для проведения индивидуальных и групповых
                занятий самбо, дзюдо, йогой, восточными практиками, для
                организации семинаров, мастер-классов. Мягкое покрытие, душевые,
                раздевалки, туалеты. Есть необходимый инвентарь для занятий.
              </Description>
            </InfoBox>
          </Column>

          <Column direction={"column"} gap={16}>
            <PlaceInfo>
              <PalaceHeader>
                <PalaceInfoBox>
                  <StadionIcon />
                  <PalaceInfoTitle>15 × 11,5 × 4,5</PalaceInfoTitle>
                </PalaceInfoBox>
                <HeaderTitle>Крытая</HeaderTitle>
              </PalaceHeader>
              {datas.map((item, index) => (
                <MainContent key={index}>
                  <Column items={"center"} gap={5}>
                    {item.icon}
                    <MainTitle>{item.label}</MainTitle>
                  </Column>
                  {item.checedIcon}
                </MainContent>
              ))}
            </PlaceInfo>

            <LocationBox>
              <LocationTitles>
                <LTitle>Location</LTitle>
                <Column gap={8}>
                  <LocationIcon />
                  <LSpan>286290, Псковская область, город Дорохово, наб.</LSpan>
                </Column>
                <LTitle>Orentir</LTitle>
                <Column gap={8}>
                  <LocationIcon />
                  <LSpan>286290, Псковская область, город Дорохово, наб.</LSpan>
                </Column>
              </LocationTitles>
            </LocationBox>

            <ContactBox>
              <ContactNames>
                <ContactAvatar
                  width={36}
                  height={36}
                  alt="Avatar"
                  src={Avatar}
                />
                <Column direction={"column"}>
                  <ContactName>Ronald Simpson</ContactName>
                  <ContactTel>
                    +998-(99)- <span>Показать телефон</span>{" "}
                  </ContactTel>
                </Column>
              </ContactNames>
              <ContactButton>Connection</ContactButton>
            </ContactBox>
          </Column>
        </FlexWrap>
      </Container>
    </MainWrap>
  );
};
