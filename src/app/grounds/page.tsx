import React from "react";
import { Backspace } from "@/components";
import { GroundsWrap } from "./ground.s";
import { Main, Smillar } from "@/sections";

export default function Page() {
  return (
    <GroundsWrap>
      <Backspace />
      <Main />
      <Smillar />
    </GroundsWrap>
  );
}
