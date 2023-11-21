"use client";
import styled from "styled-components";

export const AdvantagesWrap = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h3`
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: K2D;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: 1.008px;
  span {
    color: var(--blue-400, #5f5cf1);
    font-family: K2D;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    letter-spacing: 1.008px;
  }
`;

export const SectionDescription = styled.p`
  max-width: 928px;
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.576px;
`;

export const BoxWrap = styled.div`
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 6px;
  box-shadow: 0px 6px 32px 0px rgba(170, 187, 198, 0.28);
`;

export const BoxTitle = styled.div`
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.512px;
  width: 200px;
  height: 72px;
`;
