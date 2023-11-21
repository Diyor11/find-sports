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
  LSpan,
  LTitle,
  LocationBox,
  LocationTitles,
  RightItemsWrap,
} from "./content.s";
import { Carousel } from "@/components";

import Avatar from "@/assets/trash/avatar-conect.png";
import { LocationIcon } from "@/assets/icons";

export const ContentBox = () => {
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

              <LocationBox>
                <LocationTitles>
                  <LTitle>Location</LTitle>
                  <Column gap={8}>
                    <LocationIcon />
                    <LSpan>
                      286290, Псковская область, город Дорохово, наб.
                    </LSpan>
                  </Column>
                  <LTitle>Orentir</LTitle>
                  <Column gap={8}>
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
