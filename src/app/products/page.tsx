import React from "react";
import { ProductsWrap } from "./product.s";
import { SortedProducts } from "@/sections";
import { Backspace } from "@/components";

export default function Page() {
  return (
    <ProductsWrap>
      <Backspace />
      <SortedProducts />
    </ProductsWrap>
  );
}
