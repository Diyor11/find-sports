"use client"
import Image from "next/image"
import styled from "styled-components"

export const ProductWrap = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: var(--white, #FFF);
  box-shadow: 0px 6px 32px 0px rgba(170, 187, 198, 0.28);
`

export const ProductImg = styled(Image)`
  width: 100%;
  height: 230px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const Diteils = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ProductTitle = styled.div`
  color: var(--blue-900, #01001F);
  font-family: Mulish;
  font-size: 20px;
  font-weight: 400;
`

export const ProductPrice = styled.div`
  color: var(--blue-900, #01001F);
  font-family: Mulish;
  font-size: 16px;
  font-weight: 700;
`

export const ProductText = styled.div`
  color: var(--blue-900, #01001F);
  font-family: Mulish;
  font-size: 16px;
  font-weight: 400;
`