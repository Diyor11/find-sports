import React from "react";
import { Backspace, Layout, Search } from "@/components";
import { GroundsWrap } from "./ground.s";
import { Main, Smillar } from "@/sections";

export default function Page() {
  return (
    <Layout>
      <GroundsWrap>
        <Search />
        <Backspace />
        <Main />
        <Smillar />
      </GroundsWrap>
    </Layout>
  );
}
