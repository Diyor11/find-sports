import React from "react";
import { ClubsWrap } from "./club.s";
import { Backspace } from "@/components";
import { ContentBox, Titel, ProductBoxes } from "@/sections";

export default function Page() {
  return (
    <ClubsWrap>
      <Backspace />
      <ContentBox />
      <Titel />
      <ProductBoxes />
    </ClubsWrap>
  );
}
