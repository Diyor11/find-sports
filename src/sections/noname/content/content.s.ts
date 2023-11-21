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

export const FirstItemsWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const RightItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactBox = styled.div`
  display: flex;
  width: 403px;
  padding: 18px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  height: 112px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
`;

export const ContactNames = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ContactAvatar = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 6px;
`;

export const ContactName = styled.div`
  color: #000;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-variant: all-small-caps;
  letter-spacing: 0.96px;
`;

export const ContactTel = styled.div`
  color: #01001f;
  font-family: Mulish;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: normal;
  letter-spacing: 0.6px;

  span {
    cursor: pointer;
    color: #327bed;
    font-variant: normal;
  }
`;

export const ContactButton = styled.button`
  margin-left: 220px;
  width: 129px;
  height: 32px;
  display: flex;
  height: 32px;
  padding: 0px 20px 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 4px;
  background: #01001f;
  color: var(--control-primary-typo, #fff);
  text-align: center;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
`;

export const InfoBox = styled.div`
  display: flex;
  width: 403px;
  padding: 18px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
`;

export const InfoBoxItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between !important;
  /* gap: 180px; */
  align-items: center;
`;

export const InfoBoxSize = styled.span`
  color: #01001f;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const InfoBoxTitle = styled.p`
  color: #01001f;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const LocationBox = styled.div`
  display: flex;
  width: 402px;
  padding: 18px 20px;
  gap: 12px;
  height: 156px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
  height: auto;
`;

export const LocationTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LTitle = styled.p`
  color: #000;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LSpan = styled.p`
  max-width: 210px;
  color: #01001f;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: all-small-caps;
  letter-spacing: 0.2px;
`;

export const SecondItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const SecondInfoBoxTitelsWrap = styled.div`
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
