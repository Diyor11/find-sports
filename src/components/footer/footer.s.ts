"use client";
import styled from "styled-components";

export const FooterWrap = styled.div`
  margin-top: 72px;
  width: 100%;
`;

export const FooterItem = styled.div`
  display: flex;
  width: 100%;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  background: var(--blue-900, #01001f);

  @media screen and (max-width: 768px) {
    padding: 60px;
  }
`;

export const FooterTitle = styled.p`
  color: var(--white, #fff);
  font-family: K2D;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FooterSpan = styled.span`
  cursor: pointer;
  color: var(--white, #fff);
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
  opacity: 0.72;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  align-self: stretch;
  opacity: 0.64;
  background: var(--slate-400, #aabbc6);
`;

export const Titel = styled.p`
  color: var(--white, #fff);
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
