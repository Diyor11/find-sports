import { FC } from "react";

interface IPaperIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PaperIcon: FC<IPaperIconProps> = ({
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
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M11.7415 3.51363H13.2369C13.6335 3.51363 14.0139 3.67118 14.2943 3.95161C14.5748 4.23205 14.7323 4.61241 14.7323 5.00901V15.4767C14.7323 15.8733 14.5748 16.2537 14.2943 16.5341C14.0139 16.8145 13.6335 16.9721 13.2369 16.9721H4.26461C3.86801 16.9721 3.48765 16.8145 3.20721 16.5341C2.92678 16.2537 2.76923 15.8733 2.76923 15.4767V5.00901C2.76923 4.61241 2.92678 4.23205 3.20721 3.95161C3.48765 3.67118 3.86801 3.51363 4.26461 3.51363H5.76"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9939 2.0184H6.50776C6.09482 2.0184 5.76007 2.35316 5.76007 2.76609V4.26148C5.76007 4.67442 6.09482 5.00917 6.50776 5.00917H10.9939C11.4069 5.00917 11.7416 4.67442 11.7416 4.26148V2.76609C11.7416 2.35316 11.4069 2.0184 10.9939 2.0184Z"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
