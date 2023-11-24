"use client";
import React, { FC } from "react";
import { Column, Container } from "@/styles";
import { useRouter } from "next/navigation";
import { SearchButton, SearchInput, SearchItems, SearchWrap } from "./search.s";

import { SearchMdIcon } from "@/assets/icons/SearchmdIdon";
import { MarkerPinIcon } from "@/assets/icons/MarkerPInIcon";

interface SearchProps {}

export const Search: FC<SearchProps> = () => {
  const router = useRouter();

  return (
    <SearchWrap>
      <Container>
        <SearchItems>
          <Column gap={16}>
            <SearchMdIcon />
            <SearchInput placeholder="We have 21 215 486 ads, ask what you need" />
          </Column>

          <Column gap={16}>
            <MarkerPinIcon />
            <SearchInput placeholder="The whole of Uzbekistan" />
          </Column>

          <SearchButton>Search</SearchButton>
        </SearchItems>
      </Container>
    </SearchWrap>
  );
};
