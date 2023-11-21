"use client";
import styled from "styled-components";
import Image from "next/image";

export const CompanysWrap = styled.div`
  width: 100%;
`;

export const ImagesWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SlackImg = styled(Image)`
  cursor: pointer;
  width: 168.806px;
  height: 42px;
`;

export const AirBnb = styled(Image)`
  cursor: pointer;
  width: 167.819px;
  height: 76px;
`;

export const Amazon = styled(Image)`
  cursor: pointer;
  width: 144.127px;
  height: 44px;
`;

export const Google = styled(Image)`
  cursor: pointer;
  width: 132.281px;
  height: 44px;
`;

export const Netflix = styled(Image)`
  cursor: pointer;
  width: 146.101px;
  height: 44px;
`;
