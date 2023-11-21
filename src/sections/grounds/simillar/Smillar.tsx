"use client";
import React from "react";
import { Column, Container } from "@/styles";
import {
  AllDataBtn,
  Radius,
  SmillarTitle,
  SmillarTitleBox,
  SmillarWrap,
  Title,
} from "./simillar.s";

import { MapIcon } from "@/assets/icons/MapIcon";
import { FluentDocIcon } from "@/assets/icons/FluentDocIcon";
import { ProductList } from "@/components";

import NarrowRight from "@/assets/images/Narrow-Right";

import { useRouter } from "next/navigation";

export const Smillar = () => {
  const router = useRouter();

  return (
    <SmillarWrap>
      <Container>
        <Column direction={"column"} gap={16}>
          <SmillarTitleBox>
            <SmillarTitle>Similar ads</SmillarTitle>
            <Column style={{ cursor: "pointer" }} gap={8}>
              <MapIcon />
              <FluentDocIcon width="24px" height="24" />
            </Column>
          </SmillarTitleBox>
          <ProductList />
          <Column items={"center"} content={"center"}>
            <AllDataBtn onClick={() => router.push("/")}>
              <Radius></Radius>
              <Title>All ads</Title>
              <NarrowRight />
            </AllDataBtn>
          </Column>
        </Column>
      </Container>
    </SmillarWrap>
  );
};
