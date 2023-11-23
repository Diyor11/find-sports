"use client";
import styled from "styled-components";
import Image from "next/image";

export const CustomersWrap = styled.div`
  width: 100%;
`;

export const CustomersBox = styled.div`
  width: 100%;
  display: flex;
  padding: 64px 200px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(
    --dark-blue-gradient,
    linear-gradient(270deg, #5f5cf1 0%, #01001f 78.33%)
  );

  @media screen and (max-width: 1000px) {
    padding: 64px 150px;
  }

  @media screen and (max-width: 840px) {
    padding: 64px 100px;
  }

  @media screen and (max-width: 840px) {
    padding: 34px 70px;
  }

  @media screen and (max-width: 400px) {
    padding: 24px 40px;
  }
`;

export const CustomerElemets = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const CustomerTitlesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CustomerTitle = styled.div`
  max-width: 365px;
  color: var(--white, #fff);
  font-family: K2D;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 400px;
  }
`;

export const CustomerDescription = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: 0.512px;
`;

export const CustomerButton = styled.button`
  display: flex;
  height: 58px;
  padding: 0px 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 32px;
  border: 1px solid var(--white-gradient, #fff);
  background: var(
    --white-gradient-bg,
    linear-gradient(
      99deg,
      rgba(170, 187, 198, 0.4) -25.81%,
      rgba(170, 187, 198, 0.2) 130.94%
    )
  );
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.512px;
`;

export const AvatarsWrap = styled.div`
  display: flex;
  /* gap: 10px; */
`;

export const AvatarsDecriptsions = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const Avatar = styled(Image)`
  width: 36.99px;
  height: 37px;
  object-fit: cover;
  margin-left: -8px;
`;
