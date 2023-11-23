"use client";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  margin-bottom: 72px;
`;

export const HeaderItem = styled.div`
  width: 100%;
  display: flex;
  height: 72px;
  padding: 12px 100px;
  justify-content: space-between;
  align-items: center;
  background: var(--green-green-500, #01001f);

  @media screen and (max-width: 768px) {
    padding: 8px 70px;
  }

  @media screen and (max-width: 660px) {
    padding: 8px 40px;
  }

  @media screen and (max-width: 560px) {
    .right-items {
      display: none !important;
    }
    padding: 8px 40px;
  }
`;

export const SelectInput = styled.select`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 106px;
  height: 48px;
  background: none;
  border: none;
  color: var(--white, #fff);
  font-family: Jura;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Options = styled.option`
  background: var(--black, #000);
  color: var(--white, #fff);
  font-family: Jura;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
