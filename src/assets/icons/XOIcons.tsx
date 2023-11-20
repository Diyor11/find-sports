import { FC } from "react";

interface IPaperIconProps {
  className?: string;
  width?: string;
  height?: string;
}
export const XOIcons = ({ className = "", width = "24", height = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 19 19"
    >
      <path
        stroke="#01001F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M5.115 15.821a1.969 1.969 0 100-3.937 1.969 1.969 0 000 3.937zM3.146 5.696L5.958 8.51M5.958 5.696L3.146 8.51M12.708 12.446l2.813 2.813M15.52 12.446l-2.812 2.813M9.896 6.259V3.446h2.812"
      ></path>
      <path
        stroke="#01001F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M9.896 3.446l1.125 1.125c2.812 2.813.562 6.188-1.688 6.75"
      ></path>
    </svg>
  );
};
