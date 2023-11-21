"use client";
import Image from "next/image";
import styled from "styled-components";

export const TitelWrap = styled.div`
  width: 100%;
`;

export const BoxT = styled.div`
  display: flex;
  width: 821px;
  padding: 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
`;

export const BoxHeader = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  /* gap: 440px; */
`;

export const HeaderTitle = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-variant: all-small-caps;
  letter-spacing: 1.2px;
`;

export const Rate = styled.p`
  color: #1c1c36;
  text-align: center;
  font-family: Manrope;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 5px;
  letter-spacing: 0.11px;
`;

export const BoxMain = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
  max-width: 781px;
`;
