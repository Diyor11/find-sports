import React, { FC } from "react";

interface IChevronUpProps {
  className?: string;
  width?: string;
  height?: string;
}

const ChevronUp: FC<IChevronUpProps> = ({
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
      viewBox="0 0 32 33"
      fill="none"
    >
      <path
        d="M24 20.2676L16 12.2676L8 20.2676"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronUp;
