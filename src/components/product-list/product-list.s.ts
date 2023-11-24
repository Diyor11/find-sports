"use client";
import Image from "next/image";
import styled from "styled-components";

export const ProductWrap = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: var(--white, #fff);
  box-shadow: 0px 6px 32px 0px rgba(170, 187, 198, 0.28);
`;

export const ProductImg = styled(Image)`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ProductListWrap = styled.div`
  width: 100%;
`;

export const Diteils = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductTitle = styled.div`
  color: var(--blue-900, #01001f);
  font-family: Mulish;
  font-size: 20px;
  font-weight: 400;
`;

export const ProductPrice = styled.div`
  color: var(--blue-900, #01001f);
  font-family: Mulish;
  font-size: 16px;
  font-weight: 700;
`;

export const ProductText = styled.div`
  color: var(--blue-900, #01001f);
  font-family: Mulish;
  font-size: 16px;
  font-weight: 400;
`;

export const ItemWrap = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
