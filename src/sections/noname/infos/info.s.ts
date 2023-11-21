"use client";
import Image from "next/image";
import styled from "styled-components";

export const ContentWrap = styled.div`
  width: 100%;
`;

export const ContentItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SecondInfoBoxTitelsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* gap: 430px; */
  align-items: center;
`;

export const SecondInfoBoxTitle = styled.div`
  color: #01001f;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-variant: all-small-caps;
  letter-spacing: 1.2px;
`;

export const Star = styled.span`
  color: #1c1c36;
  text-align: center;
  font-family: Manrope;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 5px;
  letter-spacing: 0.11px;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PriceTitle = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2.4px;
`;

export const PriceSpan = styled.span`
  color: #01001f;
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.36px;
`;

export const PButton = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 0.8px solid #01001f;
  color: #01001f;
  text-align: center;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`;

export const LDescription = styled.p`
  max-width: 781px;
  color: #01001f;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const SecondInfoBox = styled.div`
  display: flex;
  width: 821px;
  padding: 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
`;

export const CoachBox = styled.div`
  display: flex;
  width: 821px;
  padding: 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
`;

export const Avatar = styled(Image)`
  width: 38px;
  height: 38px;
  object-fit: cover;
`;

export const CochTitle = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-variant: all-small-caps;
  letter-spacing: 1.2px;
`;

export const Rate = styled.span`
  color: #1c1c36;
  text-align: center;
  font-family: Manrope;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 5px;
  letter-spacing: 0.11px;
`;

export const Text = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
`;
