import { FC } from "react";

interface IHamburgerIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const HamburgerIcon: FC<IHamburgerIconProps> = ({
  className = "",
  width = "28",
  height = "26",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.144"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 18L20 18"
          stroke="#ffffff"
          stroke-width="2.4"
          stroke-linecap="round"
        ></path>
        <path
          d="M4 12L20 12"
          stroke="#ffffff"
          stroke-width="2.4"
          stroke-linecap="round"
        ></path>
        <path
          d="M4 6L20 6"
          stroke="#ffffff"
          stroke-width="2.4"
          stroke-linecap="round"
        ></path>
      </g>
    </svg>
  );
};
