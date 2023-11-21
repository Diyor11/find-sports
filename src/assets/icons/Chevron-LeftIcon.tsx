import React, { FC } from "react";

interface IChevronLeftProps {
  className?: string;
  width?: string;
  height?: string;
}

const ChevronLeft: FC<IChevronLeftProps> = ({
  className = "",
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="black"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;
