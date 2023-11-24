"use client";

import styled from "styled-components";

export const SearchWrap = styled.div`
  width: 100%;
`;

export const SearchItems = styled.div`
  width: 100%;
  display: flex;
  padding: 6px 6px 6px 24px;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 64px 0px rgba(52, 51, 76, 0.06);

  @media screen and (max-width: 680px) {
    justify-content: start;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const SearchInput = styled.input`
  width: 420px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;
  max-width: 440px;
  height: 24px;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  &::placeholder {
    overflow: hidden;
    color: #b6c3ca;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 14px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  background: var(--blue-900, #01001f);
  color: var(--white, #fff);
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;

  @media screen and (max-width: 680px) {
    padding: 7px 21px;
  }
`;
