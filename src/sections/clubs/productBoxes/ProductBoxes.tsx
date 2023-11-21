"use client";
import React from "react";
import { Column, Container, Row } from "@/styles";
import { MapIcon } from "@/assets/icons/MapIcon";
import { FluentDocIcon } from "@/assets/icons/FluentDocIcon";
import { HeaderTitle, ProductsHeader, ProductsWrap } from "./productBoxes.s";
import { ProductList } from "@/components";

export const ProductBoxes = () => {
  return (
    <ProductsWrap>
      <Container>
        <Column direction={"column"} gap={47}>
          <ProductsHeader>
            <HeaderTitle>Аренда спортивных площадок</HeaderTitle>
            <Row
              style={{ width: "100%" }}
              content={"flex-end"}
              items={"flex-end"}
              gap={8}
            >
              <MapIcon />
              <FluentDocIcon />
            </Row>
          </ProductsHeader>
          <ProductList />
        </Column>
      </Container>
    </ProductsWrap>
  );
};
