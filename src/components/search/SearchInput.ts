"use client";
import styled from "styled-components";

export const SearchInput = styled.input`
  min-width: 420px;
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
