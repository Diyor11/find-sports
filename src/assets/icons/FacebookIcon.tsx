import { FC } from "react";

interface IFacebookIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const FacebookIcon: FC<IFacebookIconProps> = ({
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
      viewBox="0 0 10 19"
      fill="none"
    >
      <path
        d="M6.065 18.2645V10.0685H8.83L9.241 6.85948H6.065V4.81548C6.065 3.88948 6.323 3.25548 7.652 3.25548H9.336V0.394484C8.517 0.306484 7.693 0.264484 6.869 0.267484C4.425 0.267484 2.747 1.75948 2.747 4.49848V6.85348H0V10.0625H2.753V18.2645H6.065Z"
        fill="white"
      />
    </svg>
  );
};
