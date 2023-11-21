"use client";
import React, { FC, useState } from "react";
import {
  BoxWrap,
  CollapseBtn,
  CollapseDescription,
  CollapseTitle,
  CollapseWrap,
  TitlesWrap,
} from "./collapse.s";
import { Container } from "@/styles";
import ChevronUp from "@/assets/icons/Chevron-UpICon";

interface ICollapseProps {
  title: string;
  desc: string;
  defaultOpen?: boolean;
}

export const Collapse: FC<ICollapseProps> = ({ defaultOpen, desc, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(!!defaultOpen);
  return (
    <CollapseWrap>
      <Container>
        <BoxWrap>
          <TitlesWrap>
            <CollapseTitle>{title}</CollapseTitle>
            <CollapseBtn
              isOpen={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <ChevronUp className="cheron-icon" width="32" height="32px" />
            </CollapseBtn>
          </TitlesWrap>
          <CollapseDescription isOpen={isOpen}>{desc}</CollapseDescription>
        </BoxWrap>
      </Container>
    </CollapseWrap>
  );
};
