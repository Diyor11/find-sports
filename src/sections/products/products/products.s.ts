"use client";

import styled from "styled-components";

export const ProductsWrap = styled.div`
  width: 100%;
`;

export const PaginationTitle = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Box = styled.button`
  display: flex;
  padding: 8px 16px;
  gap: 10px;
  align-self: stretch;
  border-radius: 2px;
  background: var(--white, #fff);
  box-shadow: 0px 6px 32px 0px rgba(170, 187, 198, 0.28);
  height: 36px;
  color: var(--blue-900, #01001f);
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const InputSumWrap = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const InputLabel = styled.p`
  overflow: hidden;
  color: var(--blue-cray-900, #2a313a);
  font-feature-settings: "clig" off, "liga" off;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

export const InputItems = styled.div`
  display: flex;
  height: 48px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #e7eff4;
  background: var(--imperceptible-white, #fdfdfd);
`;

export const InputSum = styled.input`
  width: 131px;
  height: 19px;
  overflow: hidden;
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  border: none;

  &::placeholder {
    overflow: hidden;
    color: #b6c3ca;
    font-feature-settings: "clig" off, "liga" off;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
`;
