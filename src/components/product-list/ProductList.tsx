import { Column, Row } from "@/styles";
import React from "react";
import { ProductItem } from "./ProductItem";
import { ProductListWrap } from "./product-list.s";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ProductList = () => {
  return (
    <ProductListWrap>
      <Column width="100%" gap={14}>
        {products.map((product, index) => (
          <Row size={3} difference={10.5} key={index}>
            <ProductItem />
          </Row>
        ))}
      </Column>
    </ProductListWrap>
  );
};
