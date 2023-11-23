import React from "react";
import { ProductsWrap } from "./product.s";
import { SortedProducts } from "@/sections";
import { Backspace, Layout, Search } from "@/components";

export default function Page() {
  return (
    <Layout>
      <ProductsWrap>
        <Search />
        <Backspace />
        <SortedProducts />
      </ProductsWrap>
    </Layout>
  );
}
