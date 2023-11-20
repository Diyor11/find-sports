import { FC } from "react";

interface ILocationIconProps {
  className?: string;
  width?: string;
  height?: string;
}
export const HeartRoundedIcon = ({className = "", width = "20", height = '21'}) => {
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
        d="M13.4259 2.63379C16.3611 2.63379 18.3334 5.42754 18.3334 8.03379C18.3334 13.3119 10.1482 17.6338 10 17.6338C9.85187 17.6338 1.66669 13.3119 1.66669 8.03379C1.66669 5.42754 3.63891 2.63379 6.5741 2.63379C8.25928 2.63379 9.36113 3.48691 10 4.23691C10.6389 3.48691 11.7408 2.63379 13.4259 2.63379Z"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
