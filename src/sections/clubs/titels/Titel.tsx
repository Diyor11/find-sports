"use client";
import React from "react";
import { Column, Container, Row } from "@/styles";
import {
  BoxHeader,
  BoxMain,
  BoxT,
  HeaderTitle,
  Rate,
  TitelWrap,
} from "./titel.s";
import { StarIcon } from "@/assets/icons/StarIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import { HeartIcon } from "@/assets/icons/HeartIcon";

export const Titel = () => {
  return (
    <TitelWrap>
      <Container>
        <BoxT>
          <BoxHeader>
            <Column direction={"column"} gap={8}>
              <HeaderTitle>Зал единоборств "Золотой Дракон"</HeaderTitle>
              <Row style={{ width: "100%" }} gap={5} items={"center"}>
                <Rate>4.5</Rate>
                <StarIcon width="12px" height="12px" />
              </Row>
            </Column>
            <Row items={"center"}>
              <ShareIcon />
              <HeartIcon />
            </Row>
          </BoxHeader>
          <BoxMain>
            В Центре 2 больших тренировочных зала с высокими потолками и со всем
            необходимым оборудованием (шведские стенки, станки, зеркала,
            гимнастические ковры). Зона ожидания, раздевалки со шкафчиками и
            душевыми комнатами. Обучение проводят дипломированные тренеры и
            хореографы.
          </BoxMain>
        </BoxT>
      </Container>
    </TitelWrap>
  );
};
