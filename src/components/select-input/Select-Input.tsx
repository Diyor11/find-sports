"use client";
import React, { FC } from "react";
import { Column, Container } from "@/styles";
import { InputLabel, InputWrap, SelectInput } from "./select-input.s";

interface IInputSelectProps {
  defaultValue: string;
  label: string;
  optionValue?: { value: string }[];
  onChange?: (value: string) => void;
}
export const InputSelect: FC<IInputSelectProps> = ({
  label,
  optionValue,
  onChange,
}) => {
  return (
    <InputWrap>
      <Container>
        <Column direction={"column"} gap={8}>
          <InputLabel>{label}</InputLabel>
          <SelectInput onChange={(e) => onChange?.(e.target.value)}>
            <option key={-1} value={""}>
              Barchasi
            </option>
            {optionValue?.map(({ value }, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </SelectInput>
        </Column>
      </Container>
    </InputWrap>
  );
};
