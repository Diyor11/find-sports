"use client";

import React from "react";
import { Column, Container } from "@/styles";
import { BackText, BackSpaceWrap, TextNav } from "./backspace.s";
import { useRouter } from "next/navigation";

import ChevronLeft from "@/assets/icons/Chevron-LeftIcon";

export const Backspace = () => {
  const router = useRouter();

  return (
    <BackSpaceWrap>
      <Container>
        <Column direction={"column"} gap={72}>
          <Column onClick={() => router.push("/")} gap={24} items={"center"}>
            <Column items={"center"} style={{ cursor: "pointer" }}>
              <ChevronLeft />
              <BackText>Backspace</BackText>
            </Column>
            <TextNav>
              home-page <span>/ all-ads</span>{" "}
            </TextNav>
          </Column>
        </Column>
      </Container>
    </BackSpaceWrap>
  );
};
