import React from "react";
import { Container } from "@/styles";
import {
  AirBnb,
  Amazon,
  CompanysWrap,
  Google,
  ImagesWrap,
  Netflix,
  SlackImg,
} from "./company.s";

import airbnb from "@/assets/images/airbnb.png";
import amazon from "@/assets/images/amazon.png";
import slack from "@/assets/images/slack.png";
import google from "@/assets/images/google.png";
import netflix from "@/assets/images/netflix.png";

export const Companys = () => {
  return (
    <CompanysWrap>
      <Container>
        <ImagesWrap>
          <SlackImg width={168.806} height={42} alt="slack" src={slack} />
          <AirBnb width={167.819} height={76} alt="airbnb" src={airbnb} />
          <Amazon width={144.127} height={44} alt="amazon" src={amazon} />
          <Google width={132.281} height={44} alt="google" src={google} />
          <Netflix width={146.101} height={44} alt="netflix" src={netflix} />
        </ImagesWrap>
      </Container>
    </CompanysWrap>
  );
};
