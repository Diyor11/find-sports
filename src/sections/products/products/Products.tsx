"use client";
import React from "react";
import { Column, Container } from "@/styles";
import { ProductList } from "@/components";
import {
  Box,
  InputItems,
  InputLabel,
  InputSum,
  InputSumWrap,
  PaginationTitle,
  ProductsWrap,
} from "./products.s";
import { InputSelect } from "@/components";

import ArrowDown from "@/assets/icons/Chevron-DownIcon";
import ArrowLeft from "@/assets/icons/Chevron-LeftIcon";
import ArrowRight from "@/assets/icons/Chevron-RightIcon";

import { useRouter, useSearchParams } from "next/navigation";

const optionvalues = [{ value: "Bir-martalik" }, { value: "Ko`p-martalik" }];

export const SortedProducts = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("categories");

  const router = useRouter();

  const handleSelectChange = (value: string) => {
    if (value == "Barchasi") {
      router.push("/products");
    } else router.push(`/products?categories=${value}`);
  };

  return (
    <Container>
      <ProductsWrap>
        <Column gap={28} direction={"column"}>
          <Column direction={"row"} items={"center"} gap={16}>
            <InputSelect
              label="Elon turlari"
              defaultValue="Barcha elon turlari"
              optionValue={optionvalues}
              onChange={handleSelectChange}
            />
            <InputSelect
              label="Sport culublari"
              defaultValue="Barcha sprot turlari"
              optionValue={optionvalues}
            />

            <InputSumWrap>
              <InputLabel>Narxi (sum)</InputLabel>
              <InputItems>
                <InputSum type="number" placeholder="Minimum" />
                <InputSum type="number" placeholder="Maximum" />
              </InputItems>
            </InputSumWrap>

            {search === "Bir-martalik" ? (
              <>
                <InputSelect
                  label="Infratuzilma"
                  defaultValue="Infratuzilmalar"
                  optionValue={optionvalues}
                />
                <InputSelect
                  label="Sport maydoni holati (ochiq/yopiq)"
                  defaultValue="Sport Maydoni holati"
                  optionValue={optionvalues}
                />
              </>
            ) : null}

            {search === "Ko`p-martalik" ? (
              <>
                <InputSelect
                  label="Daraja (boshlovchi / o’rta / professional)"
                  defaultValue="Daraja (boshlovchi / o’rta / professional)"
                  optionValue={optionvalues}
                />
                <InputSelect
                  label="Ishtirokchilar yoshi (yoshlar / o`smirlar / kattalar)"
                  defaultValue="Ishtirokchilar yoshi (yoshlar / o`smirlar / kattalar)"
                  optionValue={optionvalues}
                />
              </>
            ) : null}
          </Column>
          <ProductList />
          <Column content={"flex-end"} items={"center"} gap={16}>
            <PaginationTitle>Sahifalar soni</PaginationTitle>
            <Box>
              20 <ArrowDown />
            </Box>
            <Box>
              <ArrowLeft />
            </Box>
            <Box>
              1 <ArrowDown />
            </Box>
            <Box>
              <ArrowRight />
            </Box>
          </Column>
        </Column>
      </ProductsWrap>
    </Container>
  );
};
