"use client";

import styled from "styled-components";

export const ProductsWrap = styled.div`
  width: 100%;
`;

export const ProductsTitle = styled.h2`
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: Mulish;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ProductsDesc = styled.p`
  color: #01001f;
  text-align: center;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 28px;
`;

export const AllDataBtn = styled.button`
  display: flex;
  height: 48px;
  padding: 0px 24px;
  align-items: center;
  gap: 10px;
  transition: all 0.4s ease-in-out;

  &:hover {
    width: auto;
    color: white;
    background: var(
      --dark-blue-gradient,
      linear-gradient(270deg, #5f5cf1 0%, #01001f 78.33%)
    );
    border-radius: 4px;

    .radius {
      display: none;
    }

    .title {
      color: white;
      padding-left: 30px;
    }
  }

  ::before {
    background: red;
  }
`;

export const Radius = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: var(--blue-400, #5f5cf1);

  box-shadow: 0px 6px 32px 0px rgba(170, 187, 198, 0.28);
`;

export const Title = styled.div`
  color: var(--blue-900, #01001f);
  font-family: Jura;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.64px;
  margin-left: -30px;
`;
