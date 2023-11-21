import React, { FC } from "react";

interface IChevronRightProps {
  className?: string;
  width?: string;
  height?: string;
}

const ChevronRight: FC<IChevronRightProps> = ({
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
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M7.5 15.2676L12.5 10.2676L7.5 5.26758"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
