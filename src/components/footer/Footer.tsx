// "use client";
import React, { FC } from "react";

import { Column } from "@/styles";

import {
  FooterItem,
  FooterSpan,
  FooterTitle,
  FooterWrap,
  Line,
  Titel,
} from "./footer.s";
import { Logo } from "..";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { YoutubeIcon } from "@/assets/icons/YoutubeIcon";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = () => {
  return (
    <FooterWrap>
      <FooterItem>
        <Column gap={72}>
          <Logo />

          <Column gap={20} direction={"column"}>
            <FooterTitle>Learn More</FooterTitle>
            <FooterSpan>Press Relaases</FooterSpan>
            <FooterSpan>Environment</FooterSpan>
            <FooterSpan>Jobs</FooterSpan>
            <FooterSpan>Privacy Policy</FooterSpan>
            <FooterSpan>Contact Us</FooterSpan>
          </Column>

          <Column gap={20} direction={"column"}>
            <FooterTitle>Tickets & Booking</FooterTitle>
            <FooterSpan>Lift Tickets</FooterSpan>
            <FooterSpan>Season Passes</FooterSpan>
            <FooterSpan>Vacation Packages</FooterSpan>
          </Column>

          <Column gap={20} direction={"column"}>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterSpan>Hotel Reservation: 123-456-7890</FooterSpan>
            <FooterSpan>Ticket Office: 123-456-7890</FooterSpan>
          </Column>

          <Column gap={20} direction={"column"}>
            <FooterTitle>Social</FooterTitle>
            <Column items={"center"} gap={25} style={{ cursor: "pointer" }}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon width="25" height="25" />
              <YoutubeIcon width="29" height="25" />
            </Column>
          </Column>
        </Column>
        <Line />
        <Titel>© 2023 Felix It Solutions | All Rights Reserved</Titel>
      </FooterItem>
    </FooterWrap>
  );
};
