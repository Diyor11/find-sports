"use client";
import React from "react";
import { Column, Container, Row } from "@/styles";
import {
  ContactAvatar,
  ContactBox,
  ContactButton,
  ContactName,
  ContactNames,
  ContactTel,
  ContentItemsWrap,
  ContentWrap,
  FirstItemsWrap,
  InfoBox,
  InfoBoxItem,
  InfoBoxSize,
  InfoBoxTitle,
  LSpan,
  LTitle,
  LocationBox,
  LocationTitles,
  RightItemsWrap,
} from "./content.s";
import { Carousel } from "@/components";

import Avatar from "@/assets/trash/avatar-conect.png";
import { StadionIcon } from "@/assets/icons/StadionIcon";
import { LocationIcon } from "@/assets/icons";

export const Content = () => {
  return (
    <ContentWrap>
      <Container>
        <ContentItemsWrap>
          <FirstItemsWrap>
            <Carousel />
            <RightItemsWrap>
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

              <InfoBox>
                <InfoBoxItem>
                  <Row style={{ width: "100%" }} items={"center"} gap={5}>
                    <StadionIcon width="23px" height="23px" />
                    <InfoBoxSize>15 × 11,5 × 4,5</InfoBoxSize>
                  </Row>
                  <InfoBoxTitle>Крытая</InfoBoxTitle>
                </InfoBoxItem>
                <InfoBoxTitle>Возраст занимающихся: с 8 до 12 лет</InfoBoxTitle>
                <InfoBoxTitle>
                  Уровень подготовки: начинающие, любители
                </InfoBoxTitle>
              </InfoBox>

              <LocationBox>
                <LocationTitles>
                  <LTitle>Location</LTitle>
                  <Column>
                    <LocationIcon />
                    <LSpan>
                      286290, Псковская область, город Дорохово, наб.
                    </LSpan>
                  </Column>
                  <LTitle>Orentir</LTitle>
                  <Column>
                    <LocationIcon />
                    <LSpan>
                      286290, Псковская область, город Дорохово, наб.
                    </LSpan>
                  </Column>
                </LocationTitles>
              </LocationBox>
            </RightItemsWrap>
          </FirstItemsWrap>
        </ContentItemsWrap>
      </Container>
    </ContentWrap>
  );
};
