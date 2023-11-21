"use client";
import Image from "next/image";
import styled from "styled-components";

export const SmillarWrap = styled.div`
  width: 100%;
`;

export const SmillarTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SmillarTitle = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4px;
`;

export const AllDataBtn = styled.button`
  display: flex;
  height: 48px;
  padding: 0px 24px;
  align-items: center;
  gap: 10px;
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
