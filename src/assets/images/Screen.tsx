import React, { FC } from "react";

interface IScreenProps {
  className?: string;
  width?: string;
  height?: string;
}

const Screen: FC<IScreenProps> = ({
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
      <rect
        x="2.33069"
        y="2.76758"
        width="71"
        height="62"
        rx="7"
        stroke="#5F5CF1"
        stroke-width="4"
      />
      <path
        d="M41.9#2121246209L47.2305 69.077M33.74 27.5253L33.4344 33.3832M26.4628 36.9354L21.5422 33.7388M45.2227 34.9803L39.9934 37.6448M26.0533 44.746L20.8278 47.4117M33.0243 41.1957L35.072 66.5371L41.5299 57.889L52.3223 57.7477L33.0243 41.1957Z"
        stroke="#5F5CF1"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="3.33069"
        y1="19.7676"
        x2="72.3307"
        y2="19.7676"
        stroke="#5F5CF1"
        stroke-width="4"
      />
      <circle cx="10.3307" cy="11.7676" r="2" fill="#5F5CF1" />
      <circle cx="18.3307" cy="11.7676" r="2" fill="#5F5CF1" />
      <circle cx="26.3307" cy="11.7676" r="2" fill="#5F5CF1" />
    </svg>
  );
};

export default Screen;
