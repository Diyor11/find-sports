import React, { FC } from "react";

interface IChevronDownProps {
  className?: string;
  width?: string;
  height?: string;
}

const ChevronDown: FC<IChevronDownProps> = ({
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
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M4 6.26758L8 10.2676L12 6.26758"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
