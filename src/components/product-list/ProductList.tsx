import React from "react";
import { ProductItem } from "./ProductItem";
import { ItemWrap, ProductListWrap } from "./product-list.s";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ProductList = () => {
  return (
    <ProductListWrap>
      <ItemWrap>
        {products.map((product, index) => (
          <ProductItem key={index} />
        ))}
      </ItemWrap>
    </ProductListWrap>
  );
};
