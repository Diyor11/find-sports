"use client";

import { Column, Container } from "@/styles";
import {
  AllDataBtn,
  ProductsDesc,
  ProductsTitle,
  ProductsWrap,
  Radius,
  Title,
} from "./products.s";

import { useRouter } from "next/navigation";

import { ProductList } from "@/components";
import NarrowRight from "@/assets/images/Narrow-Right";

export const Products = () => {
  const router = useRouter();

  return (
    <ProductsWrap>
      <Container>
        <ProductsTitle>The most popular ads</ProductsTitle>
        <ProductsDesc>
          Lorem ipsum dolor sit amet consectetur. Ipsum nibh risus vitae etiam
          vulputate. Leo ornare sed phasellus enim.
        </ProductsDesc>
        <ProductList />
        <Column
          style={{ marginTop: "36px" }}
          content={"center"}
          items={"center"}
        >
          <AllDataBtn onClick={() => router.push("/products")}>
            <Radius className="radius" />{" "}
            <Title className="title">All ads</Title>
            <NarrowRight className="right" />
          </AllDataBtn>
        </Column>
      </Container>
    </ProductsWrap>
  );
};
