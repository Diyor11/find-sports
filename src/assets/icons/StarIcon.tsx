import { FC } from "react";

interface IStarIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const StarIcon: FC<IStarIconProps> = ({
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
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M11.9686 4.75457C11.8919 4.52118 11.6856 4.3643 11.4537 4.3643H7.90885L6.51073 0.379023C6.43095 0.151632 6.2271 0.00137329 5.99959 0.00137329C5.77208 0.00137329 5.56827 0.151632 5.48909 0.379023L4.09097 4.3643H0.545517C0.313634 4.3643 0.107327 4.52053 0.0306468 4.75457C-0.0460335 4.98795 0.0244122 5.24724 0.205805 5.4015L3.0625 7.82564L1.75103 11.9286C1.67749 12.1586 1.74602 12.414 1.92307 12.5676C2.09948 12.7211 2.34756 12.7411 2.54454 12.6174L5.99652 10.4459L9.54636 12.7171C9.63299 12.773 9.73024 12.8002 9.82685 12.8002C9.82746 12.8002 9.82871 12.8002 9.82996 12.8002C10.1304 12.7896 10.3778 12.5403 10.3778 12.2185C10.3778 12.1214 10.356 12.0296 10.3161 11.9492L8.94048 7.82229L11.7934 5.40145C11.9748 5.24787 12.0452 4.9879 11.9686 4.75452V4.75457Z"
        fill="#F8F81F"
      />
    </svg>
  );
};