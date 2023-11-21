import React from "react";
import { Column, Container } from "@/styles";
import {
  AdvantagesWrap,
  BoxTitle,
  BoxWrap,
  SectionDescription,
  SectionTitle,
} from "./advantages.s";

import Strategy from "@/assets/images/Strategy";
import Document from "@/assets/images/Document";
import Screen from "@/assets/images/Screen";
import People from "@/assets/images/People";

const advantages = [
  { label: "You want to increase your revenue.", Icon: Strategy, link: "/" },
  {
    label: "You're overwhelmed with administrative work.",
    Icon: Document,
    link: "/",
  },
  {
    label: "People can't easily see when your facilities are available.",
    Icon: Screen,
    link: "/",
  },
  { label: "I’m tired of looking for new customers.", Icon: People, link: "/" },
];

export const Advantages = () => {
  return (
    <AdvantagesWrap>
      <Container>
        <Column
          direction={"column"}
          gap={16}
          content={"center"}
          items={"center"}
        >
          <SectionTitle>
            Are you facing these{" "}
            <span>
              common <br /> issues?
            </span>
          </SectionTitle>
          <SectionDescription>
            At FingStop, we understand your problems because we were in your
            place. Our sports facility booking, planning and access management
            program has helped hundreds of customers around the world save time
            and increase revenue. Register on our platform and place your
            object.
          </SectionDescription>
          <Column
            wrap={"wrap"}
            gap={16}
            items={"center"}
            content={"center"}
            width="100%"
          >
            {advantages.map(({ Icon, label }, index) => (
              <BoxWrap key={index}>
                <Icon width="70" height="70" />
                <BoxTitle>{label}</BoxTitle>
              </BoxWrap>
            ))}
          </Column>
        </Column>
      </Container>
    </AdvantagesWrap>
  );
};
