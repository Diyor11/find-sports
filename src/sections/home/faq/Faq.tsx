import React from "react";
import { Container } from "@/styles";
import {
  AnsweredWrap,
  AnswersDescription,
  AnswersTitle,
  FaqsWrap,
  SectionTitle,
  SectionWrap,
} from "./faq.s";
import { Collapse } from "@/components";
import { answers } from "@/mock";

export const Faq = () => {
  return (
    <FaqsWrap>
      <Container>
        <SectionWrap>
          <SectionTitle>“Frequently asked questions”</SectionTitle>
          <AnsweredWrap>
            <AnswersTitle>You asked, we answered! ✋</AnswersTitle>
            <AnswersDescription>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo lorem Ipsum is simply dummy text of the
              printing and typesetting.
            </AnswersDescription>
          </AnsweredWrap>
          {answers.map(({ desc, title }, index) => (
            <Collapse key={index} title={title} desc={desc} />
          ))}
        </SectionWrap>
      </Container>
    </FaqsWrap>
  );
};
