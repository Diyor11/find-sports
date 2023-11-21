"use client";
import styled from "styled-components";

export const InputWrap = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
`;

export const InputLabel = styled.p`
  width: 320px;
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
  color: var(--blue-cray-900, #2a313a);
`;

export const SelectInput = styled.select`
  width: 320px;
  display: flex;
  height: 55px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #e7eff4;
  background: var(--imperceptible-white, #fdfdfd);
  overflow: hidden;
  color: #2a313a;
  font-feature-settings: "clig" off, "liga" off;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

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
