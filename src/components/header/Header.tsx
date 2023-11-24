import React, { FC, useState } from "react";
import { Column } from "@/styles";
import { HeaderItem, HeaderWrap, Options, SelectInput } from "./header.s";
import { Logo } from "..";

import { UserIcon } from "@/assets/icons/UserIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { HeartWhiteIcon } from "@/assets/icons/HeartWhiteIcon";

// import { useRouter } from "next/navigation";
import { HamburgerIcon } from "@/assets/icons/HamburgerIcon";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const router = useRouter();

  // const handleSelectChange = (value: string) => {
  //   // router.push(`?language=${value}`);
  // };

  return (
    <HeaderWrap>
      <HeaderItem>
        <Logo />
        <Column className="right-items" items={"center"} gap={32} width="auto">
          <Column gap={18}>
            <UserIcon />
            {/* <Column onClick={() => router.push("/likes")}> */}
            <HeartWhiteIcon />
            {/* </Column> */}
            <SearchIcon />
          </Column>
          <SelectInput>
            <Options>English</Options>
            <Options>O`zbek </Options>
            <Options>Русский </Options>
          </SelectInput>
        </Column>
        <Column className="mobile-navigations">
          <HamburgerIcon width="40px" height="40px" />
        </Column>
        {/* {isMobileMenuOpen && <h1>SALOM</h1>} */}
      </HeaderItem>
    </HeaderWrap>
  );
};
