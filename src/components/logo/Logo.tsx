"use client";
import React, { FC } from "react";

import { Column } from "@/styles";

import { useRouter } from "next/navigation";

import LogoImg from "@/assets/images/LogoImg";
import { LogoTitle } from "./logo.s";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  const router = useRouter();

  return (
    <Column
      onClick={() => router.push("/")}
      width="auto"
      style={{ height: "42px", cursor: "pointer" }}
      items={"center"}
      gap={12}
    >
      <LogoImg width="42" height="42" />
      <LogoTitle>FindSport</LogoTitle>
    </Column>
  );
};
