import React from "react";

import avatar from "@/assets/images/girl-avatar.png";

import { Container } from "@/styles";
import {
  Avatar,
  AvatarsWrap,
  CustomerButton,
  CustomerDescription,
  CustomerElemets,
  CustomerTitle,
  CustomerTitlesWrap,
  CustomersBox,
  CustomersWrap,
} from "./customer.s";

export const Customers = () => {
  return (
    <CustomersWrap>
      <Container>
        <CustomersBox>
          <CustomerElemets>
            <CustomerTitlesWrap>
              <CustomerTitle>
                We will solve these problems for you. 😍
              </CustomerTitle>
              <CustomerDescription>
                Join with more 1200+ happy customers
              </CustomerDescription>
              <AvatarsWrap>
                <Avatar width={37} height={37} alt="label" src={avatar} />
                <Avatar width={37} height={37} alt="label" src={avatar} />
                <Avatar width={37} height={37} alt="label" src={avatar} />
                <Avatar width={37} height={37} alt="label" src={avatar} />
              </AvatarsWrap>
            </CustomerTitlesWrap>
            <CustomerButton>Registration</CustomerButton>
          </CustomerElemets>
        </CustomersBox>
      </Container>
    </CustomersWrap>
  );
};
