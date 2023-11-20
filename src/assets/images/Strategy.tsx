import React, { FC } from "react";

interface IStrategyProps {
  className?: string;
  width?: string;
  height?: string;
}

const Strategy: FC<IStrategyProps> = ({
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
      viewBox="0 0 74 75"
      fill="none"
    >
      <path
        d="M2 2.76758V61.9983C2 64.8545 3.13461 67.5937 5.15423 69.6133C7.17386 71.633 9.91305 72.7676 12.7692 72.7676H72"
        stroke="#5F5CF1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7692 51.2292L28.9231 35.0754L39.6923 45.8446L66.6154 18.9215"
        stroke="#5F5CF1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M66.6155 35.0754V18.9215H50.4616"
        stroke="#5F5CF1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Strategy;
