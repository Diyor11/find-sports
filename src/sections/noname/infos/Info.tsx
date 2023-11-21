"use client";
import React from "react";
import { Column, Container, Row } from "@/styles";
import {
  ContentItemsWrap,
  ContentWrap,
  SecondInfoBoxTitelsWrap,
  SecondInfoBox,
  SecondInfoBoxTitle,
  Star,
  PriceBox,
  PriceTitle,
  PriceSpan,
  PButton,
  LDescription,
  CoachBox,
  Avatar,
  CochTitle,
  Rate,
  Text,
} from "./info.s";

import { StarIcon } from "@/assets/icons/StarIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import { HeartIcon } from "@/assets/icons/HeartIcon";
import CoachAvatar from "@/assets/trash/avatar-coach.png";

const texts = [
  { text: "Образование" },
  {
    text: "2018 — Тренерская аттестация уровня «С» (Центр по подготовке детско-юношеских тренеров по футболу имени К.И.Бескова",
  },
  {
    text: "2009-2013 — среднее-специальное (спортивно-педагогический колледж)",
  },
  {
    text: "2013-2018 — Высшее педагогическое образование, бакалавр (Московская международная академия)",
  },
  { text: "Опыт" },
  { text: "2009 — МФК Динамо-2 футболист" },
  { text: "2011 — МФК ЦСКА футболист" },
  { text: "2014 — Звезда Люберцы футболист" },
  { text: "2015-2017 — Pinkov Аcademy тренер по футболу" },
  { text: "2018 — Тренер FC Stuttgart" },
];

export const Info = () => {
  return (
    <ContentWrap>
      <Container>
        <ContentItemsWrap>
          <SecondInfoBox>
            <SecondInfoBoxTitelsWrap>
              <Column gap={10} direction={"column"}>
                <SecondInfoBoxTitle>
                  Зал единоборств "Золотой Дракон"
                </SecondInfoBoxTitle>
                <Row items={"center"} gap={10}>
                  <Star>4.5</Star>
                  <StarIcon width="12px" height="12px" />
                  <StarIcon width="12px" height="12px" />
                  <StarIcon width="12px" height="12px" />
                  <StarIcon width="12px" height="12px" />
                </Row>
              </Column>
              <Row style={{ cursor: "pointer" }} items={"center"}>
                <ShareIcon />
                <HeartIcon />
              </Row>
            </SecondInfoBoxTitelsWrap>
            <PriceBox>
              <Row items={"center"} gap={5}>
                <PriceTitle>200 000 sum </PriceTitle>
                <PriceSpan>(Групповая тренировка)</PriceSpan>
              </Row>
              <Row items={"center"} gap={5}>
                <PriceTitle>400 000 sum </PriceTitle>
                <PriceSpan>(Индивидуальная тренировка)</PriceSpan>
              </Row>
              <Row style={{ cursor: "pointer" }} gap={5}>
                <PButton>футболка</PButton>
                <PButton>спортивные штаны или шорты</PButton>
              </Row>
            </PriceBox>
            <LDescription>
              Футбол на английском для 2010-2012 г.р. (команда для международных
              турниров). Ведем прежде всего отбор (с небольшой долей набора)
              мальчиков, но возможна отдельная группа для девочек при сильной
              инициативе от родителей. Можно без футбольного опыта (опыт в
              координационных видах желателен). При себе иметь бутсы
              сороконожки, форму по погоде (щитки-гетры на усмотрение). <br />
              Тренировки 3 р\нед по 1.5 часа в окно между 17:00 и 19:00 (мы
              будем подкручивать график под большинство). <br /> <br /> Как
              проходит занятие? <br /> Тренировки проходят на английском (в
              начале частично, детям синхронно переводится; будут выдаваться
              памятки по словам и конструкциям). Простой ребенка без мяча или
              связок с партнерами сведен практически к нулю. <br /> Родители
              будут активно вовлечены в процесс контролем по питанию ребенка,
              контролем над домашними заданиями по футболу и прикладному языку,
              будут принимать участие в консилиуме с тренером и инвестором по
              итогам контрольных тренировок с датчиками (вовлеченность родителей
              для нас крайне важна, если у вас нет на это времени или желания –
              рассмотрите для ребенка обычную коммерцию).
            </LDescription>
          </SecondInfoBox>
          <CoachBox>
            <Row gap={10}>
              <Avatar width={38} height={38} src={CoachAvatar} alt="coach" />
              <Column direction={"column"} gap={5}>
                <CochTitle>Дмитрий Леонов</CochTitle>
                <Row items={"center"} gap={5}>
                  <Rate>4.5</Rate>
                  <StarIcon width="12px" height="12px" />
                </Row>
              </Column>
            </Row>
            <Column direction={"column"} gap={10}>
              {texts.map(({ text }, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </Column>
          </CoachBox>
        </ContentItemsWrap>
      </Container>
    </ContentWrap>
  );
};
