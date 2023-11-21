"use client";
import styled from "styled-components";

export const CollapseWrap = styled.div`
  width: 100%;
`;

export const BoxWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TitlesWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const CollapseBtn = styled.div<{ isOpen: boolean; onClick: () => void }>`
  cursor: pointer;
  transform: rotate(${({ isOpen }) => (isOpen ? "0" : "180deg")});
`;

export const CollapseTitle = styled.h4`
  color: var(--grey-500, #262626);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CollapseDescription = styled.p<{ isOpen: boolean }>`
  max-width: 1224px;
  color: var(--grey-500, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 16px;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
  overflow-y: hidden;
`;
