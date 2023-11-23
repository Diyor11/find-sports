"use client";

import { Column } from "@/styles";
import {
  Content,
  ProductImg,
  ProductPrice,
  ProductText,
  ProductTitle,
  ProductWrap,
} from "../../sections/home/products/components/product-item/product-item.s";
// Image
import ProdyctImg from "@/assets/trash/cardImage.png";
import { LocationIcon, PaperIcon } from "@/assets/icons";
import { HeartRoundedIcon } from "@/assets/icons/HeartRoundedIcon";
import { XOIcons } from "@/assets/icons/XOIcons";

import { useRouter } from "next/navigation";

export const ProductItem = () => {
  const router = useRouter();

  return (
    <ProductWrap
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/grounds")}
    >
      <ProductImg src={ProdyctImg.src} width={300} height={230} alt="stadium" />
      <Content>
        <Column width="100%" direction={"column"} gap={18}>
          <ProductTitle>ЗАО ТрансМетизГаз</ProductTitle>
          <Column width="100%" gap={20}>
            <Column width="100%" direction={"column"} gap={8}>
              <Column width="100%" gap={12}>
                <PaperIcon />
                <ProductText>Oylik obuna</ProductText>
              </Column>
              <Column width="100%" gap={12}>
                <XOIcons />
                <ProductText>ФУТБОЛ</ProductText>
              </Column>
              <Column wrap={"nowrap"} width="100%" gap={12}>
                <LocationIcon width="48" />
                <ProductText>
                  286290, Псковская область, город Дорохово, наб. Будапештсткая,
                  62
                </ProductText>
              </Column>
            </Column>
            <Column width="100%" items={"center"} content={"space-between"}>
              <ProductPrice>200.000 sum</ProductPrice>
              <HeartRoundedIcon />
            </Column>
          </Column>
        </Column>
      </Content>
    </ProductWrap>
  );
};
