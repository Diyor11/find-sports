import React from "react";
import { SectionsWrap } from "./section.s";
import { Backspace } from "@/components";
import { Content, Info } from "@/sections";

export default function Page() {
  return (
    <SectionsWrap>
      <Backspace />
      <Content />
      <Info />
    </SectionsWrap>
  );
}
