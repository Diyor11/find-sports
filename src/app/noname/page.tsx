import React from "react";
import { SectionsWrap } from "./section.s";
import { Backspace, Layout, Search } from "@/components";
import { Content, Info } from "@/sections";

export default function Page() {
  return (
    <Layout>
      <SectionsWrap>
        <Search />
        <Backspace />
        <Content />
        <Info />
      </SectionsWrap>
    </Layout>
  );
}
