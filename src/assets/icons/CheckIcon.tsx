import { FC } from "react";

interface ICheckIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const CheckIcon: FC<ICheckIconProps> = ({
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
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M5 13L10 18L20 6"
        stroke="#327BED"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
