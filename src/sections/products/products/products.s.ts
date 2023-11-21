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
