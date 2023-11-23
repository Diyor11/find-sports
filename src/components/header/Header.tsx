// "use client";
import React, { FC } from "react";
import { Column } from "@/styles";
import { HeaderItem, HeaderWrap, Options, SelectInput } from "./header.s";
import { Logo } from "..";

import { UserIcon } from "@/assets/icons/UserIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { HeartWhiteIcon } from "@/assets/icons/HeartWhiteIcon";

import { useRouter } from "next/navigation";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  // const router = useRouter();

  const handleSelectChange = (value: string) => {
    // router.push(`?language=${value}`);
  };

  return (
    <HeaderWrap>
      <HeaderItem>
        <Logo />
        <Column className="right-items" items={"center"} gap={32} width="auto">
          <Column gap={18}>
            <UserIcon />
            <HeartWhiteIcon />
            <SearchIcon />
          </Column>
          <SelectInput>
            <Options>English</Options>
            <Options>O`zbek </Options>
            <Options>Русский </Options>
          </SelectInput>
        </Column>
      </HeaderItem>
    </HeaderWrap>
  );
};
