"use client";
import styled from "styled-components";

export const FaqsWrap = styled.div`
  width: 100%;
`;

export const SectionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const SectionTitle = styled.h4`
  text-align: center;
  color: var(--grey-500, #262626);
  text-align: center;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AnsweredWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AnswersTitle = styled.h5`
  color: var(--grey-500, #262626);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AnswersDescription = styled.p`
  max-width: 1240px;
  color: var(--grey-500, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
