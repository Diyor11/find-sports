import { FC } from "react";

interface ICloseIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const CloseIcon: FC<ICloseIconProps> = ({
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
        d="M18 18L6 6M6 18L18 6L6 18Z"
        stroke="#FF0000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
