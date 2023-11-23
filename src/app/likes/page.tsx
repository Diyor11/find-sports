import React from "react";
import { Backspace, Layout, ProductList, Search } from "@/components";
import { LikesWrap } from "./like.s";
import { Container } from "@/styles";

export default function Page() {
  return (
    <Layout>
      <LikesWrap>
        <Search />
        <Backspace />
        <Container>
          <ProductList />
        </Container>
      </LikesWrap>
    </Layout>
  );
}
