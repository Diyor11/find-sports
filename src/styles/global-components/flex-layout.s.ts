"use client"
import styled, { css } from "styled-components";

export type TWrap = "wrap" | "nowrap";
export type TDirection = "row" | "column";
export type TContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type TItems =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";
export type TMedia = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type TSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type TMediaNumber = { [K in TMedia]: TSizes };
export type TMediaWrap = { [K in TMedia]?: TWrap };
export type TMediaDirection = { [K in TMedia]?: TDirection };
export type TMediaContent = { [K in TMedia]?: TContent };

export type TMediaItems = { [K in TMedia]?: TItems };

export type columnProps = {
  width?: string;
  wrap?: TMediaWrap | TWrap;
  direction?: TMediaDirection | TDirection;
  content?: TMediaContent | TContent;
  items?: TMediaItems | TItems;
  gap?: TMediaNumber | number;
  row_gap?: TMediaNumber | number;
  column_gap?: TMediaNumber | number;
};

export type rowProps = {
  size?: TMediaNumber | number;
  difference?: TMediaNumber | number;
  gap?: number;
  direction?: TMediaDirection | TDirection;
  content?: TMediaContent | TContent;
  items?: TMediaItems | TItems;
};

const mediaLists: {
  key: TMedia;
  minWidth: string;
}[] = [
  { key: "xs", minWidth: "320px" },
  { key: "sm", minWidth: "576px" },
  { key: "md", minWidth: "768px" },
  { key: "lg", minWidth: "992px" },
  { key: "xl", minWidth: "1200px" },
  { key: "2xl", minWidth: "1440px" },
];

const commonStyles = css<columnProps>`
  && {
    @media (min-width: 320px) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap["xs"] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction["xs"]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content["xs"] : content && content};
      align-items: ${({ items }) =>
        typeof items === "object" ? items["xs"] : items && items};
      gap: ${({ gap }) =>
        typeof gap === "object" ? `${!gap ? 0 : gap["xs"]}px` : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap["xs"]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap["xs"]}px`
          : `${column_gap}px`};
    }
    @media (min-width: 576px) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap["sm"] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction["sm"]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content["sm"] : content && content};
      align-items: ${({ items }) =>
        typeof items === "object" ? items["sm"] : items && items};
      gap: ${({ gap }) =>
        typeof gap === "object" ? `${!gap ? 0 : gap["sm"]}px` : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap["sm"]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap["sm"]}px`
          : `${column_gap}px`};
    }
    @media (min-width: 768px) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap["md"] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction["md"]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content["md"] : content && content};
      align-items: ${({ items }) =>
        typeof items === "object" ? items["md"] : items && items};
      gap: ${({ gap }) =>
        typeof gap === "object" ? `${!gap ? 0 : gap["md"]}px` : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap["md"]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap["md"]}px`
          : `${column_gap}px`};
    }
    @media (min-width: 992px) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap["lg"] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction["lg"]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content["lg"] : content && content};
      align-items: ${({ items }) =>
        typeof items === "object" ? items["lg"] : items && items};
      gap: ${({ gap }) =>
        typeof gap === "object" ? `${!gap ? 0 : gap["lg"]}px` : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap["lg"]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap["lg"]}px`
          : `${column_gap}px`};
    }
    @media (min-width: 1200px) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap["xl"] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction["xl"]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content["xl"] : content && content};
      align-items: ${({ items }) =>
        typeof items === "object" ? items["xl"] : items && items};
      gap: ${({ gap }) =>
        typeof gap === "object" ? `${!gap ? 0 : gap["xl"]}px` : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap["xl"]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap["xl"]}px`
          : `${column_gap}px`};
    }
    @media (min-width: 1440px) {
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap["2xl"] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction["2xl"]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content["2xl"] : content && content};
      align-items: ${({ items }) =>
        typeof items === "object" ? items["2xl"] : items && items};
      gap: ${({ gap }) =>
        typeof gap === "object" ? `${!gap ? 0 : gap["2xl"]}px` : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap["2xl"]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap["2xl"]}px`
          : `${column_gap}px`};
    }
  }
`;

export const Column = styled.div<columnProps>`
  && {
    display: flex;
    width: ${({ width }) => width};

    ${commonStyles}
  }
`;
export const Row = styled.div<rowProps>`
  && {
    display: flex;
    ${commonStyles}
    ${mediaLists.map((media) => {
      return css<rowProps>`
        @media (min-width: ${media.minWidth}) {
          width: ${({ size, difference = 0 }) => {
            // console.log(size && typeof size === "object" && size[media.key]);

            return size && difference
              ? typeof size === "object" && typeof difference === "object"
                ? `calc(${(size[media.key] / 12) * 100}% - ${
                    difference[media.key]
                  }px)`
                : typeof size === "number" &&
                  typeof difference === "number" &&
                  `calc(${(size / 12) * 100}% - ${difference}px)`
              : "";
          }};
        }
      `;
    })}
  }
`;