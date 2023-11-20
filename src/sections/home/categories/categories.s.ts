"use client";
import styled from "styled-components";
import Image from "next/image";

export const CategoriesWrap = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 24px;
  color: var(--green-green-900, #00000d);
  text-align: center;
  font-family: Mulish;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CategoriesList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CategoryBox = styled.div`
  display: flex;
  width: 158px;
  height: 158px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 158px;
  background: rgba(255, 255, 255, 0.32);
  box-shadow: 0px 4px 64px 0px rgba(52, 51, 76, 0.06);
  backdrop-filter: blur(6px);
`;

export const CategoreItem = styled.div`
  width: calc(14.28% - 17.14px);
  min-width: calc(14.28% - 17.14px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CategoryImg = styled(Image)`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

export const CategoryLabel = styled.p`
  color: var(--blue-900, #01001f);
  text-align: center;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
