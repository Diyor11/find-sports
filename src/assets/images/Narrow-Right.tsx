import React, { FC } from "react";

interface INarrowRightProps {
  className?: string;
  width?: string;
  height?: string;
}

const NarrowRight: FC<INarrowRightProps> = ({
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
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M3.16663 8.26758H13.8333M13.8333 8.26758L9.83329 4.26758M13.8333 8.26758L9.83329 12.2676"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NarrowRight;
