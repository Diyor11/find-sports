import React from "react";
import { ClubsWrap } from "./club.s";
import { Backspace, Layout, Search } from "@/components";
import { ContentBox, Titel, ProductBoxes } from "@/sections";

export default function Page() {
  return (
    <Layout>
      <ClubsWrap>
        <Search />
        <Backspace />
        <ContentBox />
        <Titel />
        <ProductBoxes />
      </ClubsWrap>
    </Layout>
  );
}
